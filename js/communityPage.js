function likepost(){
    let imglike=document.getElementById("likebtn");
    let imgcomp=document.getElementById("dislikebtn");
    if(imglike.src.match("/images/like2.png") && imgcomp.src.match("/images/dislike2.png")){
        imglike.src="/images/likedpost.png";
    }
    else{
        imglike.src="/images/like2.png";  
    }
}
function dislikepost() {
    let imgdislike=document.getElementById("dislikebtn");
    let imgcomp=document.getElementById("likebtn");
    if(imgdislike.src.match("/images/dislike2.png") && imgcomp.src.match("/images/like2.png")){
        imgdislike.src="/images/dislikedpost.png"
    }
    else{
        imgdislike.src="/images/dislike2.png";
    }
}
function question_card_open() {
    document.getElementById("QuestionAskWindow").style.display = "block";
}

function question_card_close() {
    document.getElementById("QuestionAskWindow").style.display = "none";
}
function AnswerSend() {
    let ans=document.getElementById('writeAns');
    ans.value="";
}
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://saurabhkumar1432001:Saurabh%40mongodb@mentorshala.3gffj.mongodb.net/test";
// function insertion_in_CommunityCollection(myobj) {
//     MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("mydb");
//       dbo.collection("CommunityCollection").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//       });
//     });
// }
function insertion_in_mongo() {
    const ques=document.getElementById("QuestionAsked").value;
    document.getElementById("QuestionAskWindow").style.display = "none";
    document.getElementById("QuestionAskedCard").style.display = "block";
    document.getElementById("QuestionAskedShow").innerHTML=ques;
    const myobj={
        "Question-Asked": ques,
    }
    console.log(myobj);
}