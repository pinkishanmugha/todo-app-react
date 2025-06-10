import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Add = () => {
  const[form,setForm]=useState({
    todo:'',
    completed:'',
    userId:''
  })
  let fetchValue=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const submit=()=>{
    console.log(form);
  }
  return (
    <div> <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Item Description" variant="outlined" name="todo" value={form.todo} onChange={fetchValue}/>
      <TextField id="outlined-basic" label="Completion Status" variant="outlined" name="completed" value={form.completed} onChange={fetchValue} />
      <TextField id="outlined-basic" label="UserId" variant="outlined" name="userId" value={form.userId} onChange={fetchValue}/>

    </Box>
     <Stack spacing={2} direction="row">
      
      <Button variant="contained" onClick={submit}>Submit</Button>
    </Stack></div>
  )
}

export default Add