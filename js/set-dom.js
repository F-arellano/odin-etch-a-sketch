import { changeColorHoverSquare } from './events.js';

let row = 16
let col = 32

function setGrid(n = 16) {
    console.log("setting grid")
    const container = document.querySelector(".container")

    n = Math.min(100, n)
    row = n
    col = n * 2

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

    container.addEventListener("mouseover", changeColorHoverSquare, false)
    addButtons()
}

function deleteGrid() {
    const container = document.querySelector(".container")
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function updateGrid() {
    let rowNumber = prompt("how many rows do you want?")
    deleteGrid()
    setGrid(rowNumber)
}

function resetGrid() {
    deleteGrid()
    setGrid(row)
}

function addButtons() {
    const resetButton = document.createElement("button")
    const newGridButton = document.createElement("button")
    const div = document.createElement("div")

    const firstSquare = document.querySelector(".column:nth-child(1) .square:nth-child(1)")
    const secondSquare = document.querySelector(".column:nth-child(2) .square:nth-child(1)")
    const body = document.querySelector("body")

    resetButton.classList.add("reset")
    resetButton.textContent = "⟲"

    newGridButton.classList.add("update")
    newGridButton.textContent = "±"

    div.classList.add("button-list")

    resetButton.addEventListener("click", resetGrid)
    newGridButton.addEventListener("click", updateGrid)

    div.appendChild(resetButton)
    div.appendChild(newGridButton)

    body.appendChild(div)
    // container.appendChild(newGridButton)


}

export {
    setGrid,
    deleteGrid,
    addButtons,
}