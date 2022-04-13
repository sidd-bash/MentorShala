// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    //Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  var ele = document.getElementById("PersonType");
  ele.readOnly=true;

function insertion_in_personalInfo(){
  // const express=require('express');
  // const app=express();
  // const PersonType=document.getElementById('PersonType').value;
  // const firstName=document.getElementById('firstName').value;
  // const lastName=document.getElementById('lastName').value;
  // const userName=document.getElementById('userName').value;
  // const city=document.getElementById('city').value;
  // const educationInfo=document.getElementById('educationInfo').value;
  // const preferdlang=document.getElementById('preferdlang').value;
  // const skills=document.getElementById('skills').value;
  // const shortDescription=document.getElementById('shortDescription').value;
  // const myobj={
  //   "PersonType" :PersonType,
  //   "firstName" :firstName,
  //   "lastName": lastName,
  //   "userName": userName,
  //   "city": city,
  //   "educationInfo": educationInfo,
  //   "preferdlang": preferdlang,
  //   "skills": skills,
  //   "shortDescription": shortDescription,
  // }
  // console.log(myobj);
  // var MongoClient = require('mongodb').MongoClient;
  // var url = "mongodb+srv://saurabhkumar1432001:Saurabh%40mongodb@mentorshala.3gffj.mongodb.net/test";
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   dbo.collection("personalInfo").insertOne(myobj, function(err, res) {
  //   if (err) throw err;
  //     console.log("1 document inserted");
  //     db.close();
  //   });
  // });
}