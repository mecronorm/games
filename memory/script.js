const cards = ["1","2","3","4","5","6","7","8","9","10"]
const cardsPairs = []
const points = 0
cards.forEach(card => {
    const original = document.createElement("button")
    const pair = document.createElement("button")
    original.className = card
    pair.className = card
    cardsPairs.push(original, pair)
});

cardsPairs.forEach(card =>{
    card.addEventListener("click", (event) =>{
        if (card.className.includes("is-clicked") || card.className.includes("is-correct")) {
            console.log(card.className);
            return
        } else {
            card.className = card.className + " is-clicked"
        }
        if (document.body.children[1].getElementsByClassName("is-clicked").length === 2) {
            if (document.body.children[1].getElementsByClassName("is-clicked")[0].className === document.body.children[1].getElementsByClassName("is-clicked")[1].className){
                document.body.children[1].getElementsByClassName("is-clicked")[0].classList.add("is-correct")
                document.body.children[1].getElementsByClassName("is-clicked")[1].classList.add("is-correct")
                document.body.children[1].getElementsByClassName("is-clicked")[0].classList.remove("is-clicked")
                document.body.children[1].getElementsByClassName("is-clicked")[0].classList.remove("is-clicked")
                points++
            } else {

            }
        }
    })
    document.body.children[1].append(card)
    
})