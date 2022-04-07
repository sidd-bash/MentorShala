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
    ans.value="";
}