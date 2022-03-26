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