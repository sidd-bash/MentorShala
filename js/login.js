//  function Check() {
//         var message = '<%=Session["otp"] %>';
//         var otp = document.getElementById('txtOTP').value;
//         var countdigit = otp.length;
//         if (countdigit == 4) {
//             if (otp == message) {
//                 document.getElementById('psw-repeat').innerHTML = "Correct OTP";
//             }
//             else {
//                 document.getElementById('psw-repeat').innerHTML = "Incorrect OTP";
//             }
//         }
//         else {
//             document.getElementById('psw-repeat').innerHTML = "";
//         }
//         return false;
// }
// <div>
//     Enter OTP:
//     <asp:TextBox ID="txtOTP" class="otp" runat="server" MaxLength="4" TextMode="Password"
//         onkeyup="Check();" />
//     <br />
//     <asp:Label ID="lblMessage" runat="server" />
// </div>
// const res = require('express/lib/response');
// const { append } = require('express/lib/response');
// var nodemailer= require('nodemailer');
// var transporter= nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'chaturvedi.a20@iiits.in',
//         pass:'iiits@2020'
//     }
// });
// var mailOptions = {
//     from: 'chaturvedi.a20@iiits.in',
//     to: 'saurabhkumar726301@gmail.com',
//     subject: 'Sending Email',
//     text: 'Send vpn username and Password'
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
//   app.get('/',function(req,res){
// 	  res.render('form-popup');
//   });
// const { Auth, LoginCredentials } = require("two-step-auth");

// async function login(emailId) {
// try {
// 	const res = await Auth(emailId, "MentorShala");
// 	console.log(res);
// 	console.log(res.mail);
// 	console.log(res.OTP);
// 	console.log(res.success);
// } catch (error) {
// 	console.log(error);
// }
// }

// This should have less secure apps enabled
// LoginCredentials.mailID = "chaturvedi.a20@iiits.in";

// You can store them in your env variables and
// access them, it will work fine
// LoginCredentials.password = "";
// LoginCredentials.use = true;

// Pass in the mail ID you need to verify
// login("saurabhkumar726301@gmail.com");

const express=require('express');
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const path=require('path');
const exphbs=require('express-handlebars');
const app=express();
app.engine('.hbs',exphbs({extname:".hbs",defaultLayout:false,layoutsDir:"views/"}));

app.set('.hbs','handlebars');

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.use('/public',express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
    res.render('form-popup');
});

var email;

var otp = Math.random();
otp = otp * 10000;
otp = parseInt(otp);
console.log(otp);

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',
    
    auth: {
      user: 'chaturvedi.a20@iiits.in',
      pass: 'iiits@2020',
    }
    
});
    
app.post('/form-popup',function(req,res){
    email=req.body.email;

     // send mail with defined transport object
    var mailOptions={
        to: req.body.email,
       subject: "Otp for registering is: ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
     
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('otp');
    });
});

app.post('/verify',function(req,res){

    if(req.body.otp==otp){
        res.send("You has been successfully registered");
    }
    else{
        res.render('otp',{msg : 'otp is incorrect'});
    }
});  

app.post('/resend',function(req,res){
    var mailOptions={
        to: email,
       subject: "Otp for registration is: ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
     
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('otp',{msg:"otp has been sent"});
    });

});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
})
  