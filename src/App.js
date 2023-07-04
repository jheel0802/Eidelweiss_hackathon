import * as React from 'react';
import './App.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import axios from 'axios';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


export default function BasicTable() {
  const [data, setData] = useState();
  const [datelist, setDateList] = useState();
  const [option, setOption] = useState("ALLBANKS");
  const [pages, setPages] = useState(2);
  const [curr_page, setCurrPage] = useState(1);
  const [optionType, setOptionType] = useState("CE");
  const [selectedDate, setselectedDate]= useState("");


  useEffect(() => {
    if (selectedDate == "" ){
    axios.get(`http://127.0.0.1:5000/`, { params: { option1: option, option2: optionType, page: curr_page, option3:"" } })
      .then((res) => {
        console.log(res.data)
        setData(res.data.filtered_data)
        setPages(res.data.total_pages)
        setDateList(res.data.dates_list)
      }).catch((err) => {
        console.log(err)
      })}
      else{
        axios.get(`http://127.0.0.1:5000/`, { params: { option1: option, option2: optionType, page: curr_page, option3: selectedDate } })
        .then((res) => {
          console.log(res.data)
          setData(res.data.filtered_data)
          setPages(res.data.total_pages)
          setDateList(res.data.dates_list)
        }).catch((err) => {
          console.log(err)
        })}   
  }, [option, optionType, curr_page, selectedDate]);


  const column_names = ["Trading Symbol", "Strike Price", "Expiry Date", "Ask Price" ,  "Ask Quantity", "Bid Price", "Bid Quantity", "Last Traded Price",
    "Last Traded Quantity", "Open Interest", "Option Type", "Previous Close Price", "Previous Open Interest",  "Sequence Number", "Volume"];


  const options1 = ["ALLBANKS", "MAINIDX","FINANCIALS","MIDCAPS"]
  const options2 = ["CE", "PE"]
  const options3 = []


  const handleChange = (event, value) => {
    setCurrPage(value)
    console.log(value)
  }
  const resetPage = () => {
    setCurrPage(1);
  }

  return (
    <>
      <h2>Option Chain</h2>
      <div style={{ flex: "true", gap: "2" }}>
        <FormControl style={{ width: "15%", margin: "10px" }}>
          <InputLabel id="demo-simple-select-label">Options</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option}
            label="Options"
            onChange={(e) => { setOption(e.target.value) }}
          >
            {options1?.map((option) => (
              <MenuItem value={option} onClick={resetPage}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{ width: "15%", margin: "10px" }}>
          <InputLabel id="demo-simple-select-label">PUT/CALL</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={optionType}
            label="Options"
            onChange={(e) => { setOptionType(e.target.value) }}
          >
            {options2?.map((option) => (
              <MenuItem value={option} onClick={resetPage}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{ width: "15%", margin: "10px" }}>
          <InputLabel id="demo-simple-select-label">Select date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={datelist}
            label="Options"
            onChange={(e) => { setselectedDate(e.target.value) }}
          >
            {datelist?.map((option) => (
              <MenuItem value={option} onClick={resetPage}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{ '&:first-child td, &:first-child th': { border: 2 } }}
            >
              {
                column_names?.map((column) => (
                  <TableCell>{column}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                sx={{ '&:first-child td, &:first-child th': { border: 0 } }}
              >
                {
                  column_names?.map((name) => (
                    <TableCell>{row[name]}</TableCell>
                  ))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Stack spacing={2} className='pagination' >
          <Pagination count={pages} page={curr_page} size='large' onChange={handleChange} />
        </Stack>
      </div>

    </>
  );
}