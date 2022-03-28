
const mongoose = require('mongoose');
const bodyparser=require('body-parser')
main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://localhost:27017/Community_Data');    //mentor_info is my database name
}

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("we are connected");
})
const { Schema } = mongoose;

const Ans_que = new Schema({
    Question : String,
    Answer : String,
  });
  const ansInData = mongoose.model('Answers_to_Questions',Ans_que ); 
function likepost() {
    let imglike=document.getElementById('likebtn');
    let imgcomp=document.getElementById('dislikebtn');
    if(imglike.src.match("/images/like2.png") && imgcomp.src.match("/images/dislike2.png")){
        imglike.src="/images/likedpost.png";
    }
    else{
        imglike.src="/images/like2.png"
    }
}

function dislikepost() {
    let imgdislike=document.getElementById('dislikebtn');
    let imgcomp=document.getElementById('likebtn');
    if(imgdislike.src.match("/images/dislike2.png") && imgcomp.src.match("/images/like2.png")){
        imgdislike.src="/images/dislikedpost.png"
    }
    else{
        imgdislike.src="/images/dislike2.png";
    }
}

function openAskwindow() {
    document.getElementById("popAskWindow").style.display = "block";
}

function closeAskWindow() {
    document.getElementById("popAskWindow").style.display = "none";
}
function AnswerSend() {
    let ans=document.getElementById('writeAns');
    let ansTodb=ans.value;
    ans.value="";
    let QuestionAsked=document.getElementById('QuestionInCard').innerText;
    var mybody={
        Question: QuestionAsked,
        Answer: ansTodb
    }
    var mydata=new ansInData(mybody);
    mydata.save().then(()=>{
        res.send("This item has been saved")
    }).catch(()=>{
        res.status(400).send("Error")

    })  
    // console.log(mybody);
}