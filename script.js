function createGrid(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let div = document.createElement("div");
            div.id = `${i}${j}`;
            div.textContent = `${i}${j}`;
            let sketchPad = document.querySelector("#sketch-pad");
            sketchPad.appendChild(div);
        }
    }
}

createGrid(3);