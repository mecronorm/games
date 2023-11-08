const weapons = ["rock","paper","scissors"];
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const playButton = document.getElementById("play");
const computerWeapon = weapons[(Math.floor(Math.random()*weapons.length))];
const endOfGameMessage = document.createElement("p")

let selectedBox = null;

function selectBox(box){
    playerPaper.style.border = "none"
    playerRock.style.border = "none"
    playerScissors.style.border = "none"

    box.style.border = "2px solid black"

    selectedBox = box
}
function winOrLose(win){
    if (win.textContent === "rock" && computerWeapon === "paper" || win.textContent === "scissors" && computerWeapon === "rock" || win.textContent === "paper" && computerWeapon === "scissors") {
        return "You lose, you chose " + win.textContent + " and the computer had " + computerWeapon +"." 
    } else {
        if (selectedBox.textContent === computerWeapon) {
            return "Draw, you both chose " + computerWeapon +"."
        } else {
            return "You win! You chose " + win.textContent + " and the computer had " + computerWeapon + "."
        }
    }
}

playerRock.addEventListener("click", () => selectBox(playerRock))
playerPaper.addEventListener("click", () => selectBox(playerPaper))
playerScissors.addEventListener("click", () => selectBox(playerScissors))

playButton.addEventListener("click", (event) =>{
    if (selectedBox) {
        console.log(selectedBox.textContent === computerWeapon)
        console.log(selectedBox.textContent, computerWeapon)
        endOfGameMessage.textContent = winOrLose(selectedBox)
        console.log(endOfGameMessage);
        document.body.children[2].append(endOfGameMessage)
    } else {
        alert("please select a box before hitting play")
    }
})