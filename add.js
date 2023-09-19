const btn1=document.querySelector(".btn");
const  input1=document.querySelector("input");
const error1=document.querySelector(".error");
const message1=document.querySelector(".message")

btn1.addEventListener("click",displayMessage);

function displayMessage(){

    if(input1.value){
        message1.textContent=input1.value;
        input1.value="";
    }
    else{
        error1.style.display="block";

       
        setInterval(() => {
            error1.style.display = "none";
        }, 100000);

    }
}


