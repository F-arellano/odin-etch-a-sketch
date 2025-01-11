export function setGrid() {
    console.log("setting grid")
    const container = document.querySelector(".container")

    const row = 16
    const col = 32

    // create columns of grid
    for (let i=0; i < col; i++) {
        const gridCol = document.createElement("div")
        gridCol.classList.add("column")

        // create rows for every column
        for (let j=0; j < row; j++) {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("square")
            gridCol.appendChild(gridSquare)
        }
        container.appendChild(gridCol)
    }
}