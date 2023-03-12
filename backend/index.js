const express=require('express');
const fs=require('fs');
const path=require('path');

const app=express();

app.get('/vidio',(req,res)=>{
    res.sendFile('./vidioes/sample.mp4',{root:__dirname})
});

app.listen(5000,()=>{
    console.log("Listening on port 5000");
})