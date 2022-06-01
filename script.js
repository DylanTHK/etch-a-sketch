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
let colourStatus = "black"; // default colour

// detect changes to call functions
gridSlider.onchange = (element) => initialiseGrid(element.target.value);
grids.onclick = (cell) => updateColour(cell);
blackButton.addEventListener("click", () => updateColourStatus("black"));
rainbowButton.addEventListener("click", () => updateColourStatus("rainbow"));
eraserButton.addEventListener("click", () => updateColourStatus("eraser"));
clearButton.addEventListener("click", () => initialiseGrid(gridSlider.value));

// function to add number of cells based on slider input
function initialiseGrid(n) {
    gridText.textContent = `${n} x ${n}`; // update grid size for user visual
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

function updateColourStatus(colour) {
    // update current selected colour
    colourStatus = colour;
    
    // update visuals for colour selection buttons
    blackButton.classList.remove("clicked");
    rainbowButton.classList.remove("clicked");
    eraserButton.classList.remove("clicked");
    if (colour === "black") {
        blackButton.classList.add("clicked");
    } else if (colour === "rainbow") {
        rainbowButton.classList.add("clicked");
    } else {
        eraserButton.classList.add("clicked");
    }

}

// function to change colour of a single cell
function updateColour(event) {
    if (event.type === "mouseover" && !mouseDown){ 
        return; // if event is mouseover only while mouseDown
    }
    // check for colour status
    if (colourStatus === "black") {
        event.target.style.backgroundColor = "black";
    } else if (colourStatus === "rainbow") {
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else {
        event.target.style.backgroundColor = "white"
    }
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

