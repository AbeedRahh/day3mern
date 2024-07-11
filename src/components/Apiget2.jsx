import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apiget2 = () => {
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res)
            setOutput(res.data)
        }).catch((e)=>{
            console.log(e)
        })


    },[]);

    var [output,setOutput]=useState([])
  return (
    
    <div>
      <Typography
        variant='h3'>
      Table</Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>phone number</TableCell>
                    <TableCell>username</TableCell>
                </TableRow>

            </TableHead>
            <TableBody>
                {output.map((val,i)=>{
                    return( <TableRow key={i}>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.phone}</TableCell>
                        <TableCell>{val.username}</TableCell>
                    </TableRow>

                    )
                })}

            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Apiget2
