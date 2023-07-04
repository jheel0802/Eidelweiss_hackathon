from datetime import datetime, timedelta
from flask import Flask, render_template, request , jsonify
import socket
import struct
import regex as re
from math import log, sqrt
from scipy.stats import norm
from scipy import optimize
import math
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
CORS(app, origins=['http://localhost:3000'])

def addflterTolist(data, row_data):
    length = len(data)
    if length >= 0:
        trading_symbol = row_data['Trading Symbol']
        filter = False
        if length != 0:   
            for index,row in enumerate(data):
                if row['Trading Symbol'] == trading_symbol:
                    data[index] = row_data
                    filter = True
        if filter == False:
            data.append(row_data)
        return data

    else:
        data = []
        return data

@app.route('/' , methods=['GET'])
def show_data():
    args = request.args
    option1 = args['option1']
    option2 = args['option2']
    if args['option3'] is None :
        option3 = []
    else:
        option3 = args['option3']
    
    server_address = ('localhost', 9011)
    buffer_size = 130
    
    # Get the page number from the request parameters
    page = request.args.get('page', default=1, type=int)
    print(page)
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

            # Split the trading symbol
            symbol = trading_symbol.rstrip('\x00')

            # Extract the underlying symbol
            underlying_match = re.match(r'^([A-Za-z]+)', symbol)
            underlying = underlying_match.group(1) if underlying_match else ''

            # Extract the expiry date
            expiry_date_match = re.search(r'(\d{2}[A-Za-z]{3}\d{2})', symbol)
            expiry_date = expiry_date_match.group(1) if expiry_date_match else ''

            # Extract the strike price
            strike_price_match = re.search(r'[A-Za-z]+\d{2}(\d+)', symbol)
            strike_price = strike_price_match.group(1) if strike_price_match else ''
            #strike_price = int(strike_price)
            

            # Extract the option type
            option_type_match = re.search(r'([A-Za-z]+)$', symbol)
            option_type = option_type_match.group(1) if option_type_match else ''

            risk_free_rate = 0.05
            # Current date
            current_date = datetime.now().date()

            # Specified date
            specified_date = datetime.strptime(expiry_date, '%d%b%y').date()

            # Calculate the number of days
            num_days = (specified_date - current_date).days
            num_yrs = num_days*24

            def calculate_implied_volatility(last_traded_price, strike_price, time_to_maturity, risk_free_rate):
                def black_scholes_call(sigma):
                    d1 = (math.log(last_traded_price / strike_price) + (risk_free_rate + sigma**2/2) * time_to_maturity) / (sigma * math.sqrt(time_to_maturity))
                    d2 = d1 - sigma * math.sqrt(time_to_maturity)
                    return last_traded_price * norm.cdf(d1) - strike_price * math.exp(-risk_free_rate * time_to_maturity) * norm.cdf(d2) - last_traded_price
                
                implied_volatility = optimize.root_scalar(black_scholes_call, bracket=[0.001, 100000]).root
                return implied_volatility
            
            # implied_volatility = calculate_implied_volatility(last_traded_price, strike_price, num_yrs, risk_free_rate)
            

            # If the current row is within the range of the current page, add it to the data_rows list
            if start_index < row_counter < end_index:
                row_data = {
                    "Packet Length": packet_length,
                    "Trading Symbol": trading_symbol,
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
                    # "Implied Volatility": implied_volatility
                }
                if(row_data['Underlying'] == option1 and row_data['Option Type'] == option2):
                    data_rows = addflterTolist(data_rows,row_data)
                    row_counter += 1
            else:

                row_counter += 1
            
            # Increment the row counter
            # If we have reached the end of the current page, break the loop
            if row_counter > end_index:
                break
        print(row_counter)
        # Calculate the total number of pages
        if option3 == "":
            filtered_data = [item for item in data_rows if item['Underlying'] == option1 and item['Option Type'] == option2]
            total_pages = (row_counter // per_page) + (1 if row_counter % per_page > 0 else 0)
        else:
            filtered_data = [item for item in data_rows if item['Underlying'] == option1 and item['Option Type'] == option2 and item['Expiry Date'] == option3]
            total_pages = (row_counter // per_page) + (1 if row_counter % per_page > 0 else 0)
        dates = []
        for data in filtered_data:
            date = data['Expiry Date']
            if date not in dates:
                dates.append(date )

        print (dates)
        filtered_data = sorted(filtered_data, key=lambda x: x['Strike Price'])

        # Render the template with the data and pagination information
        # return render_template('index1.html', data_rows=data_rows, page=page, total_pages=total_pages)
        final_Data = {'filtered_data':filtered_data , 'total_pages':total_pages , 'dates_list':dates}
        return jsonify(final_Data)


          
    finally:
        sock.close()

# Run the Flask application
if __name__ == '__main__':
    app.run()