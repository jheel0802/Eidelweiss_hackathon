from datetime import datetime, timedelta
from flask import Flask, render_template, request
import socket
import struct
import regex as re
from math import log, sqrt
from scipy.stats import norm
from scipy import optimize
import math
from py_vollib.black_scholes.implied_volatility import implied_volatility
import numpy as np



app = Flask(__name__)

@app.route('/')
def show_data():
    server_address = ('localhost', 9011)
    buffer_size = 130
    
    # Get the page number from the request parameters
    page = request.args.get('page', default=1, type=int)
    per_page = 100  # Number of rows to display per page (adjust this value as per your requirement)
    
    # Calculate the start and end indices for the current page
    start_index = (page - 1) * per_page
    end_index = start_index + per_page
    
    # Create a TCP socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    
    try:
        # Connect to the server
        sock.connect(server_address)
        
        # Send a byte
        sock.sendall(b'\x01')
        data_rows = []
        
        # Receive and process the streaming data
        row_counter = 0
        while True:
            data1 = sock.recv(buffer_size)
            
            if not data1:
                break
                
            packet_format = '<I30sQqQQQQQQQQQQ'
            
            # Little-endian encoded packet data
            data = data1
            # Unpack the data
            values = struct.unpack(packet_format, data)

            # Extract the field values
            packet_length = values[0]
            trading_symbol = values[1].decode('utf-8').rstrip('\x00')
            sequence_number = values[2]
            timestamp = values[3]
            last_traded_price = values[4]
            last_traded_quantity = values[5]
            volume = values[6]
            bid_price = values[7]
            bid_quantity = values[8]
            ask_price = values[9]
            ask_quantity = values[10]
            open_interest = values[11]
            previous_close_price = values[12]
            previous_open_interest = values[13]

            underlying_price_dict = {"MAINIDX":1854880, "FINANCIALS":1940360, "ALLBANKS": 4398250, "MIDCAPS": 785650}

            # Split the trading symbol
            symbol = trading_symbol.rstrip('\x00')

            # Expiry date
            expiry_date_match = re.search(r'(\d{2}[A-Za-z]{3}\d{2})', symbol)
            expiry_date = expiry_date_match.group(1) if expiry_date_match else None

            # Strike Price
            strike_price_match = re.search(r'[A-Za-z]+\d{2}(\d+)', symbol)
            strike_price = strike_price_match.group(1) if strike_price_match else 0
            strike_price = int(strike_price)

            # Option Type
            option_type_match = re.search(r'([A-Za-z]+)$', symbol)
            option_type = option_type_match.group(1) if option_type_match else ''
            if option_type=="CE":
                flag = 'c'
                # underlying = strike_price + last_traded_price
            elif option_type=="PE":
                flag = 'p'
                # underlying = strike_price - last_traded_price

            # Underlying price
            underlying_match = re.match(r'^([A-Za-z]+)', symbol)
            underlying_symbol = underlying_match.group(1) if underlying_match else ''
            underlying = underlying_price_dict[underlying_symbol]


            risk_free_rate = 0.05
            # Current date
            current_date = datetime.now().date()

            # Specified date
            if expiry_date != None:
                specified_date = datetime.strptime(expiry_date, '%d%b%y').date() 
            # Calculate the number of days
                num_yrs = (specified_date - current_date).days 


            def black_scholes_call(S, K, T, r, sigma):
                # Black-Scholes formula for call option price
                d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
                d2 = d1 - sigma * np.sqrt(T)
                call_price = S * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2)
                return call_price
            
            # Define the input values
            observed_price = last_traded_price
            S = (bid_price+ask_price)/2 #
            K = strike_price #strike price
            r = 0.05 #rate
            T = num_yrs #time in days

            volatility_candidates = np.arange(0.001, 10, 0.01)
            price_differences = np.zeros_like(volatility_candidates)
            for i in range(len(volatility_candidates)):
                candidate = volatility_candidates[i]
                price_differences[i] = observed_price - black_scholes_call(S, K, T, r, candidate)

            # Find the implied volatility with the smallest price difference
            idx = np.argmin(abs(price_differences))
            iv = volatility_candidates[idx]

            # If the current row is within the range of the current page, add it to the data_rows list
            if start_index < row_counter < end_index:
                row_data = {
                    "Packet Length": packet_length,
                    "Trading Symbol": underlying_symbol,
                    "Underlying": underlying,
                    "Expiry Date": expiry_date,
                    "Strike Price": strike_price,
                    "Option Type": option_type,
                    "Sequence Number": sequence_number,
                    "Timestamp": timestamp,
                    "Last Traded Price": last_traded_price,
                    "Last Traded Quantity": last_traded_quantity,
                    "Volume": volume,
                    "Bid Price": bid_price,
                    "Bid Quantity": bid_quantity,
                    "Ask Price": ask_price,
                    "Ask Quantity": ask_quantity,
                    "Open Interest": open_interest,
                    "Previous Close Price": previous_close_price,
                    "Previous Open Interest": previous_open_interest,
                    "Implied Volatility": iv
                }
                data_rows.append(row_data)

            # Increment the row counter
            row_counter += 1
            
            # If we have reached the end of the current page, break the loop
            if row_counter > end_index:
                break
        
        # Calculate the total number of pages
        total_pages = (row_counter // per_page) + (1 if row_counter % per_page > 0 else 0)
        
        # Render the template with the data and pagination information
        return render_template('index1.html', data_rows=data_rows, page=page, total_pages=total_pages)
          
    finally:
        sock.close()

# Run the Flask application
if __name__ == '__main__':
    app.run()
