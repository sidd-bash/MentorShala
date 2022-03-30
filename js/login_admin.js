function CheckDetails() {
    const pass="Mentoradmin123"
    const username="Admin@MentorShala"
    const username_page=document.getElementById('Username').value
    const pass_page=document.getElementById('Pass').value
    if(username==username_page && pass==pass_page){
        window.location.href="http://127.0.0.1:5500/HTML/admin.html"
    }
    if (username!=username_page) {
        alert("Wrong Username");
    }
    if(pass!=pass_page){
        alert("Wrong Password");
    }
}