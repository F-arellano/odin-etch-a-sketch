export function changeBackground(e) {
    console.log("hovering!")
    const hovered = document.querySelector('.square:hover');
    hovered.style.cssText = "background: black;"
}
