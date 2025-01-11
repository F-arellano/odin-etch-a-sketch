import { setGrid } from './set-grid.js'
import { changeBackground } from './hovering.js';
setGrid()

const container = document.querySelector(".container");
container.addEventListener("mousemove", changeBackground, false);