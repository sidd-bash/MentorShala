// import mongoose from 'mongoose';
const express=require('express');
const app=express();
const port=5500;           //port number 5500
const path = require('path');
const fs=require('fs');
const { send } = require('process');
const { Script } = require('vm');
// const { hostname } = require('os');

const mongoose = require('mongoose');
const bodyparser=require('body-parser')
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mentor_info');    //mentor_info is my database name
}

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("we are connected");
})
const { Schema } = mongoose;

const mentor_registrator = new Schema({
    firstName:  String, 
    lastName: String,
    userName:   String,
    city: String,
    educationInfo: String,
    preferedLanguage: String,
    skills: String,
    shortDescription: String,
  });

const mentor_register = mongoose.model('mentor_registration',mentor_registrator );     //mentor_registration is collection name

app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/HTML/mentor-registartion.html',(req,res)=>{ 
    const index=fs.readFileSync('../../HTML/mentor-registration.html');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(index)
})
app.post('/mentor_regis',(req,res)=>{
    console.log(req.body);
    var mydata=new mentor_register(req.body)
    mydata.save().then(()=>{
        res.send("This item has been saved")
    }).catch(()=>{
        res.status(400).send("Error")
    })
    res.end("Welcome")
})
app.listen(port,'127.0.0.1',()=>{
    console.log(`The application started successfully on port ${port}`);
})