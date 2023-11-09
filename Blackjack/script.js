let suits = ["spades", "diamonds", "clubs", "hearts"]
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const hitButton = document.getElementById("hit")
const standButton = document.getElementById("stand")
const playerHand = document.getElementById("player-hand")
const dealerHand = document.getElementById("dealer-hand")

let deck = new Array();
suits.forEach(emblem => {
    values.forEach(number => {
        let card = {value: number, suit: emblem}
        deck.push(card)
        });
});
let playerTotal = 0;
let dealerTotal = 0;

function drawCard(hand, total){
    const randomCard = Math.floor(Math.random()*deck.length)
    const drawnCard = deck[randomCard]
    const articleCard = document.createElement("article")
    const number = document.createElement("p")
    number.textContent = drawnCard.value
    if (number.textContent === "A") {
        number.className = "11"
    } else {
        if (number.textContent === "J" || number.textContent === "Q" || number.textContent === "K") {
            number.className = "10 " + number.textContent
        } else {
            number.className = number.textContent
        }
    }
    articleCard.append(number)
    const emblem = document.createElement("p")
    emblem.textContent = drawnCard.suit
    articleCard.className = drawnCard.suit
    articleCard.append(emblem)
    hand.append(articleCard)
    total = total + +number.classList[0]
    console.log(total);
    deck.splice(randomCard, 1)
    if (total > 21) {
        if (hand.getElementsByClassName("11")[0]){
            document.getElementsByClassName("11")[0].classList = "1"
            total = total - 10;
        }
    }
    return total
}
function dealersTurn() {
    if (playerTotal <= 21) {
        if (dealerTotal < 15) {
            dealerTotal = drawCard(dealerHand, dealerTotal)
            dealersTurn()
            return
        } else {
            if (playerTotal > dealerTotal || dealerTotal > 21) {
                const playerWin = document.createElement("p")
                playerWin.className = "win"
                playerWin.textContent = "Congratulations! You win!"
                document.body.children[2].append(playerWin)
            } else {
                if (playerTotal === dealerTotal) {
                    const playerDraw = document.createElement("p")
                    playerDraw.className = "draw"
                    playerDraw.textContent = "It's a draw!"
                    document.body.children[2].append(playerDraw)
                } else{
                    const playerLose = document.createElement("p")
                    playerLose.className = "lose"
                    playerLose.textContent = "You lost against the dealer"
                    document.body.children[2].append(playerLose)
                }
            }
        }
    } else {
        const playerLose21 = document.createElement("p")
        playerLose21.className = "lose21"
        playerLose21.textContent = "You Bust and lost!"
        document.body.children[2].append(playerLose21)
    }
    const playAgain = document.createElement("button")
    playAgain.addEventListener("click", (event)=>{
        location.reload()
    })
    playAgain.className = "play-again"
    playAgain.textContent = "Play Again?"
    document.body.children[2].append(playAgain)
}
playerTotal = drawCard(playerHand, playerTotal)
playerTotal = drawCard(playerHand, playerTotal)
dealerTotal = drawCard(dealerHand, dealerTotal)

hitButton.addEventListener("click", (event)=>{
    playerTotal = drawCard(playerHand, playerTotal)
    if (playerTotal > 21) {
        hitButton.style.display = "none"
        standButton.style.display = "none"
        dealersTurn()
    }
})
standButton.addEventListener("click", (event) =>{
    hitButton.style.display = "none"
    standButton.style.display = "none"
    dealersTurn()
})
