const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const bgColor = document.querySelector('main')
const colorEL = document.querySelector('.color')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let hexCol = '#'
    for (let num = 0; num < 6; num++) {
        hexCol += hex[randomNum()];
    }
    bgColor.style.backgroundColor = hexCol
    colorEL.textContent = hexCol

})

function randomNum() {
    return Math.floor(Math.random() * hex.length);
}