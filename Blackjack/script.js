let suits = ["spades", "diamonds", "clubs", "hearts"]
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const hitButton = document.getElementById("hit")
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

function drawCard(hand){
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
    articleCard.append(emblem)
    hand.append(articleCard)
    playerTotal = playerTotal + +number.classList[0]
    if (playerTotal > 21) {
        if (hand.getElementsByClassName("11")[0]){
            document.getElementsByClassName("11")[0].classList = "1"
            playerTotal = playerTotal - 10;
        } else {
            const bustMessage = document.createElement("p")
            bustMessage.textContent = "you bust"
            hand.append(bustMessage)
        }
    }
    console.log(playerTotal);
}
drawCard(playerHand)
drawCard(playerHand)
drawCard(dealerHand)

hitButton.addEventListener("click", (event)=>{
    drawCard(playerHand)
})

console.log(deck)
