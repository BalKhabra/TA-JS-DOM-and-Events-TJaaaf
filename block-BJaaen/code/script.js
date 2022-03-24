let userRoot = document.querySelector("user-icons");
let computerRoot = document.querySelector(".computer-icons");

let dataSet = [
    {
        name: "rock",
        beats: "scissors",
    },  
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },
  
];

let userSelected = {}, computerSelected = {};

function getWinner(user, computer) {
    if (user.name === computer.name){
        result.innerText = "It's a tie!"
    }
    else if (user.beats === computer.name){
        result.innerText = "You Win"
    } else {
        result.innerText = "Computer Wins"
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
function createUserLayout () {
    dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i")
    i.className = `fa fa-hand-${icon.name}-o`;

    if(userSelected.name === icon.name){
        li.classList.add("selected")
    }
    li.addEventListener('click', () => {
        userSelected = icon;
        computerSelected = dataSet[getRandomNumber()];
        createComputerLayout();
        createUserLayout();

    });
    li.append(i)
    userRoot.append(li)
});
}

function createComputerLayout () {
    computerRoot.innerHTML = "";
    dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i")
    i.className = `fa fa-hand-${icon.name}-o`;
    li.append(i)
    computerRoot.append(li)
});
}