let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal_info");


let userInfo = {}


function handleSubmit(event) {
    event.preventDefault();
    userInfo.text = elements.text.value;
    userInfo.email = elements.email.value;
    userInfo.gender = elements.gender.value;
    userInfo.color = elements.color.value;
    userInfo.range = elements.range.value;
    userInfo.drone = elements.drone.value;
    userInfo.terms = elements.terms.checked;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let elements = event.target.elements;

    userInfo.text = elements.text.value;
    userInfo.email = elements.email.value;
    userInfo.gender = elements.gender.value;
    userInfo.color = elements.color.value;
    userInfo.range = elements.range.value;
    userInfo.drone = elements.drone.value;
    userInfo.terms = elements.terms.checked;

    modal.classList.add("open")

    let close = document.querySelector(".modal_close");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
    });
    displayInfo(userInfo)
});

console.log(userInfo);

function displayInfo(data = {}) {
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;

    modalInfo.append(h1)
}