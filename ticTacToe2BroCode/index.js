// variables are Permanently Initialized, We can't change in the mid Of the Program
const cells = document.getElementsByClassName('cell');
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 6]
];


// variables Are Able to be Changed
let running = false;
let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';


function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked)); // 'onclcik' event on Each-Cell firing a callBack Function
    restartBtn.addEventListener('click', restartGame);  // onclick on restartBtn, firing 'restartGame' function
    statusText.textContent = `${currentPlayer}'s Turn`; // statusText's innerText would B "currentPlayer's Value"

}
function cellClicked() {



}
function updateCell() {

}
function changePlayer() {

}
function checkWinner() {

}
function restartGame() {

}