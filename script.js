// linking variable names to elements
const blackButton = document.getElementById("black");
const rainbowButton = document.getElementById("rainbow");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
const gridSlider = document.getElementById("gridSlider"); 
const gridText = document.getElementById("gridSizeText");
const grids = document.getElementsByClassName("gridElements");
const gridArea = document.getElementById("sketch-pad");

// condition to detect when mouse is pressedon grid
let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true};
document.body.onmouseup = () => {mouseDown = false};

// status variables
let paintColour = "black";

// detect changes to call functions
gridSlider.onchange = (element) => initialiseGrid(element.target.value);
grids.onclick = (cell) => updateColour(cell);
blackButton.addEventListener("click", () => paintColour = "black");
rainbowButton.addEventListener("click", () => paintColour = "red");
eraserButton.addEventListener("click", () => paintColour = "white");
clearButton.addEventListener("click", () => initialiseGrid(gridSlider.value));

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
    if (event.type === "mouseover" && !mouseDown){ 
        return; // if event is mouseover only while mouseDown
    }
    event.target.style.backgroundColor = paintColour;
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

// when window initialised, call start building sketch pad
window.onload = () => {
    initialiseGrid(gridSlider.value);
}

