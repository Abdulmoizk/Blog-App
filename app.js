function submit(){
    var userName = document.getElementById("userName");
    var password = document.getElementById("password");
    var data = localStorage.getItem("username");
    data = JSON.parse(data) || [];
    
    var useremail = {
        userName: userName.value,
        password: password.value
    }
    data.push(useremail)

localStorage.setItem("username", JSON.stringify(data));

}