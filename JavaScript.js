var email = document.gerElementById("email");
var password = document.getElementById("password");

email.addEventListener("focus",()=>{
    email.style.borderColor = "#FFF";
})<

email.addEventListener("blur",()=>{
    email.style.borderColor = "#ccc";
});

password.addEventListener("focus",()=>{
    email.style.borderColor = "#4A5F6A";
});

password.addEventListener("blur",()=>{
    email.style.borderColor = "#ccc";
});