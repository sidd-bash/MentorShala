//  function Check() {
//         var message = '<%=Session["otp"] %>';
//         var otp = document.getElementById('txtOTP').value;
//         var countdigit = otp.length;
//         if (countdigit == 4) {
//             if (otp == message) {
//                 document.getElementById('lblMessage').innerHTML = "Correct OTP";
//             }
//             else {
//                 document.getElementById('lblMessage').innerHTML = "Incorrect OTP";
//             }
//         }
//         else {
//             document.getElementById('lblMessage').innerHTML = "";
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
var nodemailer= require('nodemailer');
var transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'chaturvedi.a20@iiits.in',
        pass:'iiits@2020'
    }
});
var mailOptions = {
    from: 'chaturvedi.a20@iiits.in',
    to: 'saurabhkumar726301@gmail.com',
    subject: 'Sending Email',
    text: 'Message Received!'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  