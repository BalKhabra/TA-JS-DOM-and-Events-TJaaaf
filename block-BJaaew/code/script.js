let rootUl = document.querySelector('ul')

got.forEach(card => {
    let li = document.createElement('li')
    let img = document.createElement('img')
    img.src = card.got.houses.people.image
    let h2 = document.createElement('h2')
    h2.innerText = card.got.houses.people.name
    let p = document.createElement('p')
    p.innerText = card.got.houses.people.description;


    li.append(img, h2, p, button)
    rootUl.append(li)
})

console.log(got.houses)


let root = document.querySelector(".cards");

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);


let allTags = got.houses.map((house) => house.name);

function createCards(data = []) {
    root.innerHTML = "";
    data.forEach((people) => {
        let li = document.createElement("li");
        let img = document.createElement("img")
        img.alt = people.name;
        img.src = people.image;
        let h2 = document.createElement("h2")
        h2.innerText = people.name;
        let p = document.createElement("p")
        p.innerText = people.description;
        let button = document.createElement("button");
        button.innerText = "know More!";
        li.append(img, h2, p, button);

        root.append(li)
        

    })
}

function createTagsUI(tags = []) {
    rootTags.innerHTML = "";
    tags.forEach((people) => {
        let li = document.createElement("li");
        li.innerText = tag;

        if (activeHouse === tag) {
            li.classList.add("active");
        }
        li.addEventListener("click", () => {
            activeHouse = tag;
            let.peopleOfTheHouse = got.houses.find((house) => house.name === tag)
            createCards(peopleOfTheHouse);
            createTagsUI(allTags)
        })
        
        let peopleOfTheHouse = got.housesfind((house) => house === tag)
        createCards(peopleOfTheHouse);

        rootTags.append(li)

    })
    function handleSearch(event) {
        let searchText = event.target.value;
        let filterPeople = allPeople.filter((p) => p.name.toLowerCase().inlcudes(searchText))
    };
    createCards(filteredPeople)
}

search.addEventListener('input', handleSearch);
createCards(allPeople);
createTagsUI(allTags);