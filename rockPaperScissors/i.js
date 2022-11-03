const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
let uC;


// we gotta Iterate this element to get Its All-Possible-Siblings like  Array
const button = document.getElementsByTagName("button");

for (let i = 0; i < button.length; i++) {
    const possibleChoices = button[i];
    possibleChoices.addEventListener('click', e => {
        userChoiceDisplay.innerHTML = e.target.id;
        let ranNum = generateComputerChoice();
        computerChoiceDisplay.innerHTML = ranNum == 1 ? "Rock" : ranNum == 2 ? "Paper" : ranNum == 3 ? "Scissor" : ' ';
        console.log(ranNum);
        if (checkWin(userChoiceDisplay.innerText, computerChoiceDisplay.innerText) == -1) {
            resultDisplay.innerHTML = "Tie";

        }
        if (checkWin(userChoiceDisplay.innerText, computerChoiceDisplay.innerText) == 1) {
            resultDisplay.innerHTML = "User-Wins";

        }
        if (checkWin(userChoiceDisplay.innerText, computerChoiceDisplay.innerText) == 0) {
            resultDisplay.innerHTML = "Computer-Wins";

        }
    });
}
const generateComputerChoice = () => {
    return (Math.floor(Math.random() * (4 - 1)) + 1);
}

const checkWin = (userChoicePassedString, computerChoicePassedString) => {
    if (userChoicePassedString == computerChoicePassedString)
        return -1;
    if (userChoicePassedString == "Paper" && computerChoicePassedString == "Rock")
        return 1;
    if (userChoicePassedString == "Scissor" && computerChoicePassedString == "Paper")
        return 1;
    if (userChoicePassedString == "Rock" && computerChoicePassedString == "Scissor")
        return 1;
    if (userChoicePassedString == "Rock" && computerChoicePassedString == "Paper")
        return 0;
    if (userChoicePassedString == "Paper" && computerChoicePassedString == "Scissor")
        return 0;
    if (userChoicePassedString == "Scissor" && computerChoicePassedString == "Rock")
        return 0;
}





