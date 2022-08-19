let sidebar = document.querySelector(".sidebar")
let backgroundWidth = sidebar.clientWidth;
document.getElementById("logo").style.width = `${backgroundWidth}px`;
let button = document.querySelector("#create");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

let form = document.querySelector('form');

window.addEventListener("resize", ()=> {
    backgroundWidth = sidebar.clientWidth;
    document.getElementById("logo").style.width = `${backgroundWidth}px`;
});

form.addEventListener('submit', event => {
    event.preventDefault();

    let pass1 = document.querySelector('input[name=password]');
    let pass2 = document.querySelector('input[name=confirmPassword]');

    if(pass1.value !== pass2.value) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirmPassword").style.borderColor = "red";
        alert("The passwords must match!");
    } else {
        document.getElementById("password").style.borderColor = "black";
        document.getElementById("confirmPassword").style.borderColor = "black";
    }
});


