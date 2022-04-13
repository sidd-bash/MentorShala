function CheckDetails() {
    const pass="Mentoradmin123"
    const username="Admin@MentorShala"
    const username_page=document.getElementById('Username').value
    const pass_page=document.getElementById('Pass').value
    if(username==username_page && pass==pass_page){
        window.location.href="/admin"
    }
    if (username!=username_page) {
        alert("Wrong Username");
    }
    if(pass!=pass_page){
        alert("Wrong Password");
    }
}