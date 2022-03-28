
function showinput(){
    if(document.getElementById("chatinput").value === ""){
        return false;
    }
    var inp=document.getElementById("chatinput").value;
    var n = document.createElement("div");
    n.classList.add("sender");
    n.classList.add("chat");
    n.classList.add("newchat");
    document.getElementById("chatbox").appendChild(n);
    n.innerHTML=document.getElementById("chatinput").value;
    var m = document.createElement("div");
    m.classList.add("bot");
    m.classList.add("chat");
    m.classList.add("newchat");
    if(inp==="hi"){
        
        document.getElementById("chatbox").appendChild(m);
        m.innerHTML="Hi, how can I help u today?";
    }
    else{
        document.getElementById("chatbox").appendChild(m);
        m.innerHTML="sorry but, please try to rephrase the question.";
    }
    
    document.getElementById("chatinput").value="";
}
function chatbox(){
    document.getElementById("chatbox").style.display="flex";
    document.getElementsByClassName("chaticon")[0].style.display="none";
}
function closeChatWindow() {
    document.getElementById("chatbox").style.display="none";
    document.getElementsByClassName("chaticon")[0].style.display="flex";
}
var input=document.getElementById("chatinput");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementsByClassName("subinput")[0].click();
    }
});