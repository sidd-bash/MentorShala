// // getting-started.js
// const mongoose = require('mongoose');
// const bodyparser=require('body-parser')
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/practicemongo');
// }

// var db=mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//     console.log("we are connected");
// })

// const mentor_registrator = new Schema({
//     firstName:  String, // String is shorthand for {type: String}
//     lastName: String,
//     userName:   String,
//     city: String,
//     educationInfo: String,
//     preferedLanguage: String,
//     skills: String,
//     shortDescription: String,
//   });

//   const mentor_register = mongoose.model('mentor_registration',mentor_registrator );