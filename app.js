///////////index.html

function submit() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var data = JSON.parse(localStorage.getItem("username"));

    
if (data === null) {
    Swal.fire({
        icon: "error",
        title: "User Not Found!!!"
    });


    setTimeout(() => {
        window.location.href = "./signup.html"
    }, 2000)

}


for (var i = 0; i < data.length; i++) {
    if (email.value !== data[i].email && password.value !== data[i].password) {
        Swal.fire({
            icon: "error",
            title: "User not found!!!"
        });

        setTimeout(() => {
            window.location.href = "./signup.html"
        }, 2000)
    
    } else {
        Swal.fire({
            title: "You have successfully login!",
            icon: "success"
        });

        setTimeout(() => {
            window.location.href = "./main.html"
        }, 2000)

    }
}

}

///////////signup.html

function submitt() {
    // event.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("cpassword");
    var confirmEmail = document.getElementById("cemail");
    var location = document.getElementById("location");
    var country = document.getElementById("country");
    var condition = document.getElementById("condition");
    console.log(name.value)

    if (name.value === "") {
        Swal.fire({
            icon: "error",
            title: "Name should'nt be empty!!!"
        });
    } else if (email.value === "") {
        Swal.fire({
            icon: "error",
            title: "Email should'nt be empty!!!"
        });
    } else if (confirmEmail.value !== email.value) {
        Swal.fire({
            icon: "error",
            title: "Email should be same!!!"
        });
    } else if (password.value === "") {
        Swal.fire({
            icon: "error",
            title: "Password should'nt be empty!!!"
        });
    } else if (confirmPassword.value !== password.value) {
        Swal.fire({
            icon: "error",
            title: "Password should be same!!!"
        });
    } else if (country.value === "") {
        Swal.fire({
            icon: "error",
            title: "Please select country!!!"
        });
    } else if (location.value === "") {
        Swal.fire({
            icon: "error",
            title: "Please select city!!!"
        });
    } else {
        Swal.fire({
            title: name.value,
            text: "You have successfully registered!",
            icon: "success"
        });
        var data = localStorage.getItem("username");
        data = JSON.parse(data) || [];

        var useremail = {
            userName: name.value,
            email: email.value,
            password: password.value,
            country: country.value,
            city: location.value,
        }
        data.push(useremail)

        localStorage.setItem("username", JSON.stringify(data));

        setTimeout(()=>{
            window.location.href="./main.html"
        }, 2000)
    }
    // var data = localStorage.getItem("username");
    // data = JSON.parse(data) || [];

    // var useremail = {
    //     userName: name.value,
    //     email: email.value,
    //     password: password.value,
    //     country: country.value,
    //     city: location.value,
    // }
    // data.push(useremail)

    // localStorage.setItem("username", JSON.stringify(data));

}



/////////////main.html


function logout(){
    // localStorage.clear()
   setTimeout(()=> {window.location.href= "./index.html"}, 2000)
}


// function submit(){
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var data = JSON.parse(localStorage.getItem("username"));



// console.log(data)
// }


// if (data === null) {
//     Swal.fire({
//         icon: "error",
//         title: "User Not Found!!!"
//     });

//     setTimeout(() => {
//         window.location.href = "./signup.html"
//     }, 2000)

// }


// for (var i = 0; i < data.length; i++) {
//     if (email.value !== data[i].email && password.value !== data[i].password) {
//         Swal.fire({
//             icon: "error",
//             title: "User not found!!!"
//         });
//     } else {
//         Swal.fire({
//             title: "You have successfully login!",
//             icon: "success"
//         });

//         setTimeout(() => {
//             window.location.href = "./signup.html"
//         }, 2000)

//     }
// }
