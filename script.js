const gridContainer = document.getElementById("grid-container");
let gridItems = document.querySelectorAll(".grid-item");

function makeGrid(rows, cols) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
    gridItems = document.querySelectorAll(".grid-item");
  }
}

makeGrid(16, 16);

function addHoverListener() {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = "black";
    });
  });
}

function replaceGrid() {
  gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.remove();
  });
  const gridDimension = prompt("Enter grid size");
  if (gridDimension > 0 && gridDimension <= 100) {
    makeGrid(gridDimension, gridDimension);
  }
  addHoverListener();
}

addHoverListener();
