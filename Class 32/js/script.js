let f_name = document.querySelector(".first-name");
let ferror = document.querySelector(".ferror");

let l_name = document.querySelector(".last-name");
let lerror = document.querySelector(".lerror");

let email = document.querySelector(".email");
let eerror = document.querySelector(".eerror");

let password = document.querySelector(".password");
let perror = document.querySelector(".perror");
let passwordshow = document.querySelector(".passwordshow");

let submit_btn = document.querySelector(".submit");

submit_btn.addEventListener("click",function(){
    console.log()
    if(f_name.value == ""){
        ferror.innerHTML = "Please Enter Your First Name";
        f_name.style.border = "2px solid red";
    }
    else if (l_name.value == ""){
        lerror.innerHTML = "Please Enter Your Last Name";
        l_name.style.border = "2px solid red";
    }
    else if (email.value == ""){
        eerror.innerHTML = "Please Enter Your E-mail";
        email.style.border = "2px solid red";
    }
    else if (password.value == ""){
        perror.innerHTML = "Please Enter Your Password";
        password.style.border = "2px solid red";
    }
    else{
        
    }
}) 

function show(){
    if(password.type == "password"){
        password.type = "text"
    }else {
        password.type = "password"
    }
}
// passwordshow.addEventListener("click",function(){
//     console.log(password.type)
// })
/*
function submit(){
    if(f_name.value == ""){
        ferror.innerHTML = "Please Enter Your First Name";
        f_name.style.border = "2px solid red";

    }
    else if (l_name.value == ""){
        lerror.innerHTML = "Please Enter Your Last Name";
        l_name.style.border = "2px solid red";

    }
    else if (email.value == ""){
        eerror.innerHTML = "Please Enter Your E-mail";
        email.style.border = "2px solid red";
 
    }
    else {
        console.log("ache")
    }
}
*/