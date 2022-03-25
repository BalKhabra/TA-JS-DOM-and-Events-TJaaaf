let form = document.querySelector("form");

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

form.addEventListener("submit", handleSubmit)