let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(".movie_list")
let allMovies = [
    {
        name: "Leap Year",
        watched: false,
    },
    {
        name: "Interstellar",
        watched: false,
    },

];

input.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        allMovies.push ({
                name: event.target.value,
                watched: false,
        })
    }
});

function deletedMovie(event) {
    event.target.parentElement.remove();
    let id = event.target.dataset.id;
    allMovies.spliced(id, 1);
}

function createMovieUI (){
allMovies.forEach((movie) => {
    let li = document.createElement("li")
    let input = document.createElement("input")
    input.classList.add('styled-checkbox')
    input.type = "checkbox";
    input.id = "i"
    input.checked = movie.watched
    let label = document.createElement("label")
    label.for = "i";
    let span = document.createElement("span")
    span.innerText = "";
    span.setAttribute('data-id', i);

    span.addEventListener('click', deleteMovie )

    li.append(input, label, span)
    rootElm.append(li);
});
}