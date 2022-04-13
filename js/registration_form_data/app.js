// import mongoose from 'mongoose';
const express=require('express');
const app=express();
const port=5500;           //port number 5500
const path = require('path');
const fs=require('fs');
const { send } = require('process');
const { Script } = require('vm');
const bodyParser=require('body-parser')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://saurabhkumar1432001:Saurabh%40mongodb@mentorshala.3gffj.mongodb.net/test";

function insertion_in_personalInfo(myobj) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("personalInfo").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
}
function insertion_in_CommunityCollection(myobj) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("CommunityCollection").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,"../../")));
app.post('/HTML/card.html',(req,res)=>{
    console.log(req.body);
    res.redirect('../../HTML/card.html')
    insertion_in_personalInfo(req.body);
})
app.post('/HTML/CommunityPage.html',(req,res)=>{
  res.redirect('../../HTML/CommunityPage.html')
  console.log(req.body);
  insertion_in_CommunityCollection(req.body);
})
app.listen(port,'127.0.0.1',()=>{
    console.log(`The application started successfully on port ${port}`);
})