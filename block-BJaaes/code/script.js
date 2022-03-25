let form = document.querySelector("form");

let userInfo = {};

let errorMessages = {};

let usernameError = "";
function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);

    let usernameElm = event.target.elements.username;

    if(usernameElm.value === "") {
        usernameError = "Username can't be empty"
    } else if(usernameElm.value.length < 5){
    usernameElm.nextElementSibling.innerText = usernameError;
}
}


let form = document.querySelector("form");

let userInfo = {};

let errorMessages = {};

function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessages;
    elm.parentElement.classList.add("error");
}

function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success");
}

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    const username  = elements.user.value;
    const name  = elements.name.value;
    const email  = elements.email.value;
    const phone  = elements.phone.value;
    const username  = elements.user.value;
    const name  = elements.name.value;
}

if(username.length <= 4) {
    errorMessages.user = "Username can't be less than 3 characters";
    displayError("user");
} else {
    displaySuccess("user");
}

if(!isNaN(name)) {
    errorMessages.name = "Name can't be numbers";
    displayError("name");
} else {
    displaySuccess("name");
}

if(!email.includes('0')) {
    errorMessages.email = "Name can't be numbers";
    displayError("email");
} else if(email.length < 6) {
}   else {
    displaySuccess("email");
}

form.addEventListener("submit", handleSubmit)
