function likepost() {
    let imglike=document.getElementById('likebtn');
    if(imglike.src.match("/images/like2.png")){
        imglike.src="/images/likedpost.png";
    }
    else{
        imglike.src="/images/like2.png"
    }
}