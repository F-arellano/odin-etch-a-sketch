export function changeColorHoverSquare(e) {
    const hovered = document.querySelector('.square:hover');
    hovered.style.cssText = "background: black;"
}

export function resetGrid(e) {
    const squareList = document.querySelectorAll(".square")
    const oddList = document.querySelectorAll(".column:nth-child(odd) .square:nth-child(odd)")
    const evenList = document.querySelectorAll(".column:nth-child(even) .square:nth-child(even)")

    for (let i=0; i < squareList.length; i++) {
        const square = squareList[i]
        square.style.background = "whitesmoke"
    }

    for (let i=0; i < oddList.length; i++) {
        const square = oddList[i]
        square.style.background = "antiquewhite"
    }

    for (let i=0; i < evenList.length; i++) {
        const square = evenList[i]
        square.style.background = "antiquewhite"
    }
}