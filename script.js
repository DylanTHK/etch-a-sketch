const gridSize = document.getElementById("gridSize");
const gridText = document.getElementById("grid-size-text")

gridSize.onchange = (element) => createGrid(element.target.value);

// function to add number of cells based on slider input
function createGrid(n) {
    // update grid size for user visual
    gridText.textContent = `${n} x ${n}`;
    updateCSS(n);
    // to reset the grid for every change in slider input
    const resetGrid = document.getElementById("sketch-pad");
    resetGrid.innerHTML = " ";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let div = document.createElement("div");
            div.id = `${i}${j}`;
            div.className = "grid-border";
            // div.textContent = `${i}${j}`;
            let sketchPad = document.querySelector("#sketch-pad");
            sketchPad.appendChild(div);
        }
    }
    console.log("done");
}

// function to update number of columns in style.css
function updateCSS(rows) {
    const root = document.querySelector(":root");
    root.style.setProperty("--rows", rows);
}

createGrid(gridSize.value);