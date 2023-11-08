let suits = ["spades", "diamonds", "clubs", "hearts"]
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


let deck = new Array();
suits.forEach(emblem => {
    values.forEach(number => {
        let card = {value: number, suit: emblem}
        deck.push(card)
        });
});
function drawCard(){
    const randomCard = Math.floor(Math.random()*deck.length)
    const drawnCard = deck[randomCard]
    const articleCard = document.createElement("article")
    const number = document.createElement("p")
    number.textContent = drawnCard.value
    articleCard.append(number)
    const emblem = document.createElement("p")
    emblem.textContent = drawnCard.suit
    articleCard.append(emblem)
    document.body.children[1].append(articleCard)
}

console.log(deck)
