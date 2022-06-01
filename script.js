const gridSize = document.getElementById("gridSize"); 
const gridText = document.getElementById("grid-size-text")
const grids = document.getElementsByClassName("grids");

gridSize.onchange = (element) => initialiseGrid(element.target.value);
grids.onclick = (cell) => updateColour(cell);

// function to add number of cells based on slider input
function initialiseGrid(n) {
    // update grid size for user visual
    gridText.textContent = `${n} x ${n}`;
    updateCSS(n);
    // to reset the grid for every change in slider input
    resetGrid();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let div = document.createElement("div");
            div.className = "grids";
            // div.addEventListener();
            let sketchPad = document.querySelector("#sketch-pad");
            sketchPad.appendChild(div);
        }
    }
}

// function to update number of columns in style.css
function updateCSS(rows) {
    const root = document.querySelector(":root");
    root.style.setProperty("--rows", rows);
}

function resetGrid() {
    const resetGrid = document.getElementById("sketch-pad");
    resetGrid.innerHTML = " ";
}


// function to change colour
function updateColour(element) {
    element.target.style.backgroundColor = "black";
}


window.onload = () => {
    initialiseGrid(gridSize.value);
}

