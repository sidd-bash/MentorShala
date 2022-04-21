// import mongoose from 'mongoose';
const express = require('express');
const app = express();
const port = 5500; //port number 5500
const path = require('path');

const bodyParser = require('body-parser')
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.render('index');
 });

app.get('/card', (req, res) => {
  res.render('card');
 });

 app.get('/login-mentor', (req, res) => {
  res.render('login-mentor');
 });

 app.get('/login-mentee', (req, res) => {
  res.render('login-mentee');
 });

 app.get('/chatbot', (req, res) => {
  res.render('chatbot');
 });

 app.get('/settings', (req, res) => {
  res.render('settings');
 });

 app.get('/mentee-registration', (req, res) => {
  res.render('mentee-registration');
 });

 app.get('/mentor-registration', (req, res) => {
  res.render('mentor-registration');
 });

 app.get('/login-admin', (req, res) => {
  res.render('login-admin');

 });

 app.get('/admin', (req, res) => {
   const count_mentor=admin();
  const params={"mentorCount": count_mentor}
  res.render('admin',params);

 });
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://saurabhkumar1432001:Saurabh%40mongodb@mentorshala.3gffj.mongodb.net/test";

function insertion_in_personalInfo(myobj) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("personalInfo").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

function admin(){
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    const mentor_count=dbo.collection("personalInfo").find({PersonType:"Mentor"}).count();
    const mentee_count=dbo.collection("personalInfo").find({PersonType:"Mentee"}).count();

      db.close();
      return mentor_count , mentee_count;
  });

}

function insertion_in_CommunityCollection(myobj) {
  
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("CommunityCollection").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}
function Questions_in_CommunityCollection() {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    const query={QuestionAsked : "What is mentor shala?"};
    dbo.collection("CommunityCollection").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}

app.get('/CommunityPage', (req, res) => {
  
 Questions_in_CommunityCollection()
  // const params={result};
  res.status(200).render("CommunityPage");
})
app.post('/card', (req, res) => {
  console.log(req.body);
  res.redirect('/card')
  insertion_in_personalInfo(req.body);
})
app.post('/CommunityPage', (req, res) => {
  console.log(req.body);
  res.status(200).render("CommunityPage");
  req.body.answers=[];
  insertion_in_CommunityCollection(req.body);
})
app.listen(port, '127.0.0.1', () => {
  console.log(`The application started successfully on port ${port}`);
})
// function searchQuestion() {

// }