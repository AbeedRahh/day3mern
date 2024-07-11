import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Textinput2 = () => {
    var [inputs,setInput]=useState({name:'' ,age:'' ,place:'' });
const inputHandler=(e)=>{
    setInput({...inputs,[e.target.name]:e.target.value})
    console.log(inputs);
}
  return (
    <div>
      <TextField variant='outlined' 
      label="username"
      onChange={inputHandler}
      name="name"
      value={inputs.name}
      />
      <TextField variant='outlined' 
      label="age"
      onChange={inputHandler}
      name="age"
      value={inputs.age}
      />
    </div>
  )
}

export default Textinput2
