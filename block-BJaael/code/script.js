
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(20, 20);

let grid = document.querySelector(".container")
let i = 0;

const colors1 = ['red', 'green', 'blue', 'purple'];

grid.addEventListener('mousemove', function onMouseMove() {
    grid.style.backgroundColor = colors1[i];
    grid.style.color = 'white';
  
    i = i >= colors1.length - 1 ? 0 : i + 1;
  });
