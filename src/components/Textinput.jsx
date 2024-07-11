import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import ChildCareIcon from '@mui/icons-material/ChildCare';
const Textinput = () => {
    var [inputs,setInput]=useState({name:'',age:'',place:''});
    const inputHandler=(e)=>{
    setInput({...inputs,[e.target.name]:e.target.value});
    console.log(inputs);
    //spred operator ...    
    }
  return (
    <div>
   <TextField variant='outlined' 
   label="name"
   onChange={inputHandler}
   name='name'
   value={inputs.name}/><br /><br />
   <TextField variant='outlined'
    label="Age"
    onChange={inputHandler}
    name='age'
    value={inputs.age}  /><br /><br />
   <TextField variant='outlined'
    label="Place"
    onChange={inputHandler}
    name='place'
   value={inputs.place}/><br /><br />
   <Button variant="outlined" endIcon={ <ChildCareIcon/>}>save</Button>
    </div>
  )
}

export default Textinput
