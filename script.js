// linking variable names to elements
const blackButton = document.getElementById("black");
const rainbowButton = document.getElementById("rainbow");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
const gridSize = document.getElementById("gridSize"); 
const gridText = document.getElementById("gridSizeText");
const grids = document.getElementsByClassName("gridElements");
const gridArea = document.getElementById("sketch-pad");

let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true};
document.body.onmouseup = () => {mouseDown = false};

// detect changes to call functions
gridSize.onchange = (element) => initialiseGrid(element.target.value);
grids.onclick = (cell) => updateColour(cell);

// function to add number of cells based on slider input
function initialiseGrid(n) {
    gridText.textContent = `${n} x ${n}`; // update grid size for user visual
    updateCSS(n);
    resetGrid(); // to reset the grid for every change in slider input
    gridArea.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let div = document.createElement("div");
            div.className = "gridElements";
            div.addEventListener("mousedown", updateColour);
            div.addEventListener("mouseover", updateColour);
            let sketchPad = document.querySelector("#sketch-pad");
            sketchPad.appendChild(div);
        }
    }
}

// function to change colour of a single cell
function updateColour(event) {
    if (event.type === "mouseover" && mouseDown){ 
        return; // if event is mouseover only while mouseDown
    }
    event.target.style.backgroundColor = "black";
}

// function to update number of columns in style.css
function updateCSS(rows) {
    const root = document.querySelector(":root");
    root.style.setProperty("--rows", rows);
}

// function to reset grid when new dimensions are selected
function resetGrid() {
    const resetGrid = document.getElementById("sketch-pad");
    resetGrid.innerHTML = " ";
}



window.onload = () => {
    initialiseGrid(gridSize.value);
}

