const primeColors = ["red", "orange", "yellow", "green", "blue", "pink", "purple", "brown", "black", "white"];
const bgColor = document.getElementById("bg-color")
const colorEL = document.querySelector('.color')



function changeColor() {
    bgColor.style.backgroundColor = primeColors[randomColor()]
    colorEL.textContent = bgColor.style.backgroundColor
}

function randomColor() {
    return Math.floor(Math.random() * primeColors.length)
}