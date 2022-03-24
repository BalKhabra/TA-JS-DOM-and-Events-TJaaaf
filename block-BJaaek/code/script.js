let box = document.querySelector(".box")
let index = 0;

const colors = ['red', 'green', 'blue', 'purple'];

box.addEventListener('click', function onClick() {
    box.style.backgroundColor = colors[index];
    box.style.color = 'white';
  
    index = index >= colors.length - 1 ? 0 : index + 1;
  });




let box2 = document.querySelector(".box-2")
let i = 0;

const colors1 = ['red', 'green', 'blue', 'purple'];

box2.addEventListener('mousemove', function onMouseMove() {
    box2.style.backgroundColor = colors[i];
    box2.style.color = 'white';
  
    i = i >= colors1.length - 1 ? 0 : i + 1;
  });