const express=require('express');
const app=express();
const port=5500;
const path = require('path');

const fs=require('fs');
// const { hostname } = require('os');


app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/HTML/mentor-registartion.html',(req,res)=>{
    const index=fs.readFileSync('../../HTML/mentor-registartion.html');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(index)
})
app.post('/mentor_regis',(req,res)=>{
    console.log(req.body);
    // firstName=req.body.firstName
    // console.log(firstName)
    res.end("Welcome")
})
app.listen(port,'127.0.0.1',()=>{
    console.log(`The application started successfully on port ${port}`);
})