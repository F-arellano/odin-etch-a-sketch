import { setGrid, addButtons } from './set-dom.js'
import { changeColorHoverSquare, resetGrid } from './events.js';


setGrid()
addButtons()


const container = document.querySelector(".container");
container.addEventListener("mouseover", changeColorHoverSquare, false);

const resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", resetGrid);