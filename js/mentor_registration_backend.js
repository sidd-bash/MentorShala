function fun1() {
    const mongoose = require('mongoose');
    const bodyparser=require('body-parser')
    main().catch(err => console.log(err));
    async function main() {
        await mongoose.connect('mongodb://localhost:27017/registered_User_info');    //mentor_info is my database name
    }
    var db=mongoose.connection;
    db.on('error',console.error.bind(console,'connection error:'));
    db.once('open',function(){
        console.log("we are connected");
    })
    // const mentor_registrator = new Schema({
    //     firstName:  String, 
    //     lastName: String,
    //     userName:   String,
    //     city: String,
    //     educationInfo: String,
    //     preferedLanguage: String,
    //     skills: String,
    //     shortDescription: String,
    //   });
    // const mentor_register = mongoose.model('mentor_registration',mentor_registrator ); 
    const fname=document.getElementById('firstName');
    const lname=document.getElementById('lastName');
    const username=document.getElementById('userName');
    const city=document.getElementById('city');
    const edu=document.getElementById('educationInfo');
    const lang=document.getElementById('preferdlang');
    const skills=document.getElementById('skills');
    const shortbio=document.getElementById('shortDescription');
    
    // var mydata=new mentor_register()
    // mydata.save().then(()=>{
    //     res.send("This item has been saved")
    // }).catch(()=>{
    //     res.status(400).send("Error")
    // })
    // const mentee_registration_file=fs.readFileSync('../../HTML/card.html');
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.end(mentee_registration_file)
}