function showchat(el){
    
    let value='#'+el;
    let ele = document.getElementsByClassName("contactname")[0];
    ele.innerHTML=document.querySelector(value).innerHTML;
    value=value+' .profilename';
    document.querySelector('.contactname .profilename').style.marginLeft='2vw';
    document.querySelector('.contactname .profileimage').style.marginTop='2vh';
    document.querySelector('.contactname .profilename').style.paddingLeft='-2vw';
    document.querySelector('.contactname .profilename').style.border='';
    document.querySelector('.contactname .profileimage').style.border='';
    document.querySelector('.contactname .profilename').style.fontSize='1vh*1vw';
    document.querySelector('.contactname .profilename').style.right='1vh*1vw';
    
    document.getElementsByClassName("chatwindow")[1].style.visibility="visible";
    document.getElementsByClassName("chatwindow")[0].style.display="none";
    document.getElementsByClassName("filledwindow")[0].style.display="flex";
    document.getElementsByClassName("emptywindow")[0].style.background="blue";
    document.getElementsByClassName("voicecall")[0].style.visibility="visible";
    document.getElementsByClassName("videocall")[0].style.visibility="visible";
    document.getElementsByClassName("sentchat")[0].innerHTML='Hi '+document.querySelector(value).innerHTML;
    let chatcontainer = document.getElementsByClassName("chatwindow");
    chatcontainer[1].scrollTop = chatcontainer[1].scrollHeight;
    
    for(let i=0;i<chatcontainer.size;i++){
        if(i!=j){
            chatcontainer[i].style.visibility=hidden;
        }
    }
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
    let chatcontainer = document.getElementsByClassName("chatwindow")[1];
    chatcontainer.scrollTop = chatcontainer.scrollHeight;
}
const textinput=document.getElementById("inputbox");
textinput.addEventListener('keydown',function(event){
    if(event.code === 'Enter' && textinput.value!==''){
        sendmessage();
    }
})
const chatwin = document.querySelector('.chatwindow');
chatwin.addEventListener('keydown', function(event){
    let chatcontainer = document.getElementsByClassName("chatwindow")[1];
    
    if(event.code === 'Up'){
        chatcontainer.scrollTop=chatcontainer.scrollTop+10;
    }
}
);

let contact1_messages={
    'sent':{
        'sequence':1,
        'message':'hello'
    },
    'recieved':{
        'sequence':2,
        'message':'hello back'
    }
}
let contact_container_map=[
    {
        'contact':document.querySelector('.contact')[i],
        'container':document.querySelector('.chatcontainer')[j]
    }
]
function create_chatcontainer(index){

}
function load_chatcontainer(index){
    let contacts = document.querySelector('.contact');
    for(let i=0;i<contacts.size;i++){
            if (i!=index){
                chatcontainer[i].style.visibility='hidden';
            }
    }
}