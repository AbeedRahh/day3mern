import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CardApi2 = () => {
  var [output,setOutput]=useState([])
 
    useEffect(()=>{
        // axios.get("url").then().catch()
        axios.get("https://dummyapi.online/api/pokemon")
        .then((res)=>{
         console.log(res);
         setOutput(res.data)
         

      }).catch((e)=>{
        console.log(e);
      })
     },[]);
     
  return (
    <div>
      <Typography variant='h3'>Pokemon</Typography>
      <Grid container space ={3}>
      {output.map((val,i)=>
        {return(
       <Grid item xs={12} md={4} key={i}>
       
      <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={val.image_url}
        title={val.pokemon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {val.pokemon}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Abilities:{val.abilities}
        <br />
      ,Evolutions:{val.evolutions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>)})}
        </Grid>

        
       
    </div>
  )
}

export default CardApi2
