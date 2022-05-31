const gridSize = document.getElementById("gridSize");
const gridText = document.getElementById("grid-size-text")

gridSize.onchange = (element) => createGrid(element.target.value);

function createGrid(n) {
    gridText.textContent = `${n} x ${n}`;
    updateCSS(n);
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

function updateCSS(rows) {
    const root = document.querySelector(":root");
    root.style.setProperty("--rows", rows);
}

createGrid(gridSize.value);