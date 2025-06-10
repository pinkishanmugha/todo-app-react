import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Home=()=>{
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/todos')
    .then((res)=>{
      setUsers(res.data.todos);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);



  return (
    <div><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item Description</TableCell>
            <TableCell align="right">Completion State</TableCell>
            <TableCell align="right">UserID</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.todo}
              </TableCell>
              <TableCell align="right">{row.completed ? 'Completed' : 'Incomplete'}</TableCell>
              <TableCell align="right">{row.userId}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
  )
}

export default Home