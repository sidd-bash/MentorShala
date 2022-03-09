function showchat(el){
    
    let ele = document.getElementsByClassName("contactname")[0];
    ele.innerHTML=document.getElementById(el).innerHTML;
    document.getElementsByClassName("chatwindow")[0].style.visibility="visible";
    document.getElementsByClassName("voicecall")[0].style.visibility="visible";
    document.getElementsByClassName("videocall")[0].style.visibility="visible";
    document.getElementsByClassName("sentchat")[0].innerHTML='Hi'+ele.innerHTML;
}



function sendmessage(){
    
    let newmessage = document.createElement('div');
    newmessage.classList.add("chat");
    newmessage.classList.add("sentchat");
    let message=document.getElementById("inputbox").value;
    newmessage.innerHTML = message;
    document.getElementById("inputbox").value='';
    let cont = document.getElementsByClassName("chatcontainer")[0];
    cont.appendChild(newmessage);
}
const textinput=document.getElementById("inputbox");
textinput.addEventListener('keydown',function(event){
    if(event.code === 'Enter' && textinput.value!==''){
        sendmessage();
    }
})