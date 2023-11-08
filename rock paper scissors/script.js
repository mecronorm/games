const weapons = ["rock","paper","scissors"];
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const playButton = document.getElementById("play");
const computerWeapon = weapons[(Math.floor(Math.random()*weapons.length))];
const endOfGameMessage = document.createElement("p")
const playAgainButton = document.createElement("button")
playAgainButton.id = "play-again"
playAgainButton.textContent = "Play again?"
playAgainButton.addEventListener("click", (event) =>{
    location.reload()
})

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
        endOfGameMessage.textContent = winOrLose(selectedBox)
        playerRock.style.display = "none"
        playerPaper.style.display = "none"
        playerScissors.style.display = "none"
        playButton.style.display = "none"
        document.body.children[2].append(endOfGameMessage)
        document.body.children[2].append(playAgainButton)
    } else {
        alert("please select a box before hitting play")
    }
})