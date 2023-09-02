document.getElementById("one").innerHTML = "Hello World";
document.querySelector(".two").innerHTML = "Hello, This is query selector";
document.querySelector("p").innerHTML = "Hello, this is tag";



let three = document.querySelector(".three");
console.log(three.innerHTML)
three.style.background = "red";

let number = document.querySelector(".number");
let num_btn = document.querySelector(".num_btn");
let result = document.querySelector(".result");

// num_btn.addEventListener("click",function(){
//     console.log(number.value)
//     result.innerHTML = number.value;
// })

num_btn.addEventListener("click",function(){
    console.log(number.value)
    if (1<5) {
        number.style.background = " green";
    }else {
        number.style.background = " red";
    }
})



function jog(a,b) {
    return a+b
}

// jog(10+20)
console.log (jog(50+20 ))
document.querySelector(".jog").innerHTML = jog(50,20)



let alert_btn = document.querySelector(".alert-button");
alert_btn.addEventListener("click" ,function(){
    alert("You DARE!")
})