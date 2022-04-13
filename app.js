// import mongoose from 'mongoose';
const express=require('express');
const app=express();
const port=5500;           //port number 5500
const path = require('path');
const fs=require('fs');
const { send } = require('process');
const { Script } = require('vm');
const bodyParser=require('body-parser')
app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,"../../")));
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
app.get('/HTML/CommunityPage.ejs',(req,res)=>{
  res.status(200).render("/HTML/CommunityPage.ejs");
})
app.post('/HTML/card.html',(req,res)=>{
    console.log(req.body);
    res.redirect('/HTML/card.ejs')
    insertion_in_personalInfo(req.body);
})
app.post('/HTML/CommunityPage.html',(req,res)=>{
  // res.redirect('../../HTML/CommunityPage.html')
  console.log(req.body);
  const style=`<style>#QuestionAskWindow{display="none";}#QuestionAskedCard{display="block";}</style>`
  const params={'style':style};
  res.status(200).render("/HTML/CommunityPage.ejs",params);
  insertion_in_CommunityCollection(req.body);
})
app.listen(port,'127.0.0.1',()=>{
    console.log(`The application started successfully on port ${port}`);
})