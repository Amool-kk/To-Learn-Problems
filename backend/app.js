const express = require('express');
const app = express();

const port = process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(()=>{
    console.log(`backend run on ${port} port`);
})