// import mongoose from 'mongoose';
const express = require('express');
const app = express();
const port = 5500; //port number 5500
const path = require('path');
let alert = require('alert');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const ejs = require('ejs');
const res = require('express/lib/response');
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname)));
const multer = require('multer')
// const upload = multer({ dest: 'imgUpload/' })

let usernameLogedIn;
let typeLogedIn;
let firstNameLogedIn;
let lastNameLogedIn;
let emailLogedIn;
let imgUrlLogedIn;
let passwordLogedIn;
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
let bioLogedIn;
let birthdateLogedIn;
let phoneLogedIn;
let imgCoverUrlLoggedIn;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.render('index');
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
  const params = {
    'imgURL': imgUrlLogedIn,
    'imgCoverURL': imgCoverUrlLoggedIn,
    'userName': usernameLogedIn,
    'firstName': firstNameLogedIn,
    'lastName': lastNameLogedIn,
    'email': emailLogedIn,
    'bio': bioLogedIn,
    'birthdate': birthdateLogedIn,
    'phone': phoneLogedIn
  }
  res.render('settings', params);
});

app.get('/mentee-registration', (req, res) => {
  res.render('mentee-registration');
});

app.get('/chat', (req, res) => {
  res.render('chat');
})

app.get('/mentor-registration', (req, res) => {
  res.render('mentor-registration');
});

app.get('/login-admin', (req, res) => {
  res.render('login-admin');

});


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://saurabhkumar1432001:Saurabh%40mongodb@mentorshala.3gffj.mongodb.net/test";


app.get('/admin', async (req, res) => {
  MongoClient.connect(url, async function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    const mentor_coun = await dbo.collection("personalInfoMentor").find().count();
    const mentee_coun = await dbo.collection("personalInfoMentee").find().count();
    console.log(mentor_coun);
    db.close();
    res.render('admin', { "mentor_count": mentor_coun, "mentee_count": mentee_coun });
  });

});


app.get('/card', async (req, res) => {
  MongoClient.connect(url, async function (err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    const mentors = dbo.collection("personalInfoMentee").find({}).toArray(function (err, result) {
      if (err) throw err;

      res.render('card', { "mentee": result, "k": 0 });
      db.close();
    });


  });

});



function insertion_in_personalInfoMentor(myobj) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("personalInfoMentor").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

function insertion_in_personalInfoMentee(myobj) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("personalInfoMentee").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
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
    const query = { QuestionAsked: "What is mentor shala?" };
    dbo.collection("CommunityCollection").find(query).toArray(function (err, result) {
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

app.post('/CommunityPage', (req, res) => {
  console.log(req.body);
  res.status(200).render("CommunityPage");
  req.body.answers = [];
  insertion_in_CommunityCollection(req.body);
})

let emailGlobal;
let passwordGlobal;

app.post('/cardMentor', (req, res) => {
  console.log(req.body);
  res.redirect('/card')
  // console.log(emailGlobal);
  // console.log(passwordGlobal);
  req.body.email = emailGlobal;
  req.body.password = passwordGlobal;
  req.body.image = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  req.body.imageCover = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  console.log(req.body);
  insertion_in_personalInfoMentor(req.body);
})

app.post('/cardMentee', (req, res) => {
  console.log(req.body);
  res.redirect('/card')
  // console.log(emailGlobal);
  // console.log(passwordGlobal);
  req.body.email = emailGlobal;
  req.body.password = passwordGlobal;
  req.body.image = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  req.body.imageCover = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  console.log(req.body);
  insertion_in_personalInfoMentee(req.body);
})
var otp = Math.random();
otp = otp * 10000;
otp = parseInt(otp);
console.log(otp);

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: 'gmail',

  auth: {
    user: 'chaturvedi.a20@iiits.in',
    pass: 'iiits@2020',
  }

});
app.post('/registrationMentor', (req, res) => {
  console.log(req.body);
  const email = req.body.email;
    emailGlobal = email;
    const password = req.body.password;
    passwordGlobal = password;
    console.log(password);
    const passwordRepeat = req.body.passwordRepeat;
    console.log(passwordRepeat);
  var mailOptions = {
    from: 'chaturvedi.a20@iiits.in',
    to: emailGlobal,
    subject: "Otp for registering is: ",
    html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  if (passwordRepeat == password) {
    res.render("login-mentor");
  }
  else {
    res.redirect("index")
  }
})
app.post('/send',(req,res)=>{
    if (req.body.otp == otp)
      res.render("mentor-registration");
    else
      res.render("login-mentor");
  })
})
  // app.post('/registrationMentor', (req, res) => {
  //   console.log(req.body);
  //   emailGlobal = email;
  //   const password = req.body.password;
  //   passwordGlobal = password;
  //   console.log(password);
  //   const passwordRepeat = req.body.passwordRepeat;
  //   console.log(passwordRepeat);
  //   if (passwordRepeat == password && req.body.otp == otp) {
  //     res.render("mentor-registration");
  //   }
  //   else {
  //     res.redirect("index")
  //   }
  // });


app.post('/registrationMentee', (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  emailGlobal = email;
  const password = req.body.password;
  passwordGlobal = password;
  console.log(password);
  const passwordRepeat = req.body.passwordRepeat;
  console.log(passwordRepeat);
  if (passwordRepeat == password) {
    res.render("mentee-registration");
  }
  else {
    res.redirect("index")
  }
})

app.post('/loginToCardMentor', async (req, res) => {
  console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("personalInfoMentor").findOne({ email: req.body.email, password: req.body.password }, function (err, result) {
      if (err) throw err;
      if (result == null) {
        res.redirect("index")
      }
      else {
        usernameLogedIn = result.userName;
        typeLogedIn = "Mentor";
        firstNameLogedIn = result.firstName;
        lastNameLogedIn = result.lastName;
        emailLogedIn = result.email;
        passwordLogedIn = result.password;
        imgUrlLogedIn = result.image;
        imgCoverUrlLoggedIn = result.imageCover
        bioLogedIn = result.shortDescription;
        phoneLogedIn = req.body.phoneNumber;
        birthdateLogedIn = req.body.dob;
        console.log(usernameLogedIn);
        console.log(result);
        res.redirect("card");
      }
      db.close();
    })
  });
})

app.post('/loginToCardMentee', async (req, res) => {
  console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("personalInfoMentee").findOne({ email: req.body.email, password: req.body.password }, function (err, result) {
      if (err) throw err;
      if (result == null) {
        res.redirect("index")
      }
      else {
        usernameLogedIn = result.userName;
        typeLogedIn = "Mentee";
        firstNameLogedIn = result.firstName;
        lastNameLogedIn = result.lastName;
        emailLogedIn = result.email;
        passwordLogedIn = result.password;
        imgUrlLogedIn = result.image;
        imgCoverUrlLoggedIn = result.imageCover
        bioLogedIn = result.shortDescription;
        phoneLogedIn = req.body.phoneNumber;
        birthdateLogedIn = req.body.dob;
        console.log(usernameLogedIn);
        console.log(result);
        res.redirect("card");
      }
      db.close();
    })
  });
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'imgUpload/');
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({ storage: storage })

var multipleUpload = upload.fields([{ name: "imgUrl" }, { name: "imgUrl_cover", maxCount: 3 }])

app.post('/setting', multipleUpload, (req, res) => {
  console.log(req.body);
  console.log(req.files);
  // console.log(req.files.imgUrl[0].path);
  // console.log(req.files[1].path);
  usernameLogedIn = req.body.userName;
  imgUrlLogedIn = req.files.imgUrl[0].path;
  imgCoverUrlLoggedIn = req.files.imgUrl_cover[0].path;
  firstNameLogedIn = req.body.fname;
  lastNameLogedIn = req.body.lname;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { email: emailLogedIn };
    var newvalues = {
      $set: {
        userName: usernameLogedIn, firstName: firstNameLogedIn, lastName: lastNameLogedIn, image: imgUrlLogedIn,
        imageCover: imgCoverUrlLoggedIn
      }
    };
    // const query={{"email":emailLogedIn},{"$set":{"userName":req.body.userName},{"firstName":req.body.fname},{"lastName":req.body.lname},{"image":req.body.imgUrl}}}
    var collName;
    if (typeLogedIn == "Mentor") {
      collName = "personalInfoMentor"
    }
    else {
      collName = "personalInfoMentee"
    }
    dbo.collection(collName).updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });
  res.redirect('settings');
})
app.post('/Report-button',(req,res)=>{
  console.log(req.body);
  var report;var flag;
    MongoClient.connect(url, function (err, db) {
      if(typeLogedIn=="Mentor"){
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("personalInfoMentee").findOne({ username: req.body.username}, function (err, result) {
        if (err) throw err;
        if (result == null) {
          flag=-1;
        }
        else{
          dbo.collection("report").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
        }
      })
    }
      else{
        if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("personalInfoMentee").findOne({ username: req.body.username}, function (err, result) {
        if (err) throw err;
        if (result == null) {
          flag=-1;
        }
      })
  }
  })
})

app.post('/settingChange', (req, res) => {
  console.log(req.body);
  if (passwordLogedIn == req.body.currentPassword) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myquery = { email: emailLogedIn };
      var newvalues = { $set: { password: req.body.newPassword } };
      var collName;
      if (typeLogedIn == "Mentor") {
        collName = "personalInfoMentor"
      }
      else {
        collName = "personalInfoMentee"
      }
      dbo.collection(collName).updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
      });
    });
    res.redirect('settings');
  }
  else {
    res.redirect('settings');
  }
})

app.post('/Info', (req, res) => {
  console.log(req.body);
  phoneLogedIn = req.body.phone;
  birthdateLogedIn = req.body.birthdate;
  bioLogedIn = req.body.bio;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { email: emailLogedIn };
    var newvalues = { $set: { phoneNumber: phoneLogedIn, dob: birthdateLogedIn, shortDescription: bioLogedIn } };
    var collName;
    if (typeLogedIn == "Mentor") {
      collName = "personalInfoMentor"
    }
    else {
      collName = "personalInfoMentee"
    }
    dbo.collection(collName).updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });
  res.redirect('settings');
})

app.listen(port, '127.0.0.1', () => {
  console.log(`The application started successfully on port ${port}`);
})
// function searchQuestion() {

// }