const cards = [
    {
        name: 1,
        image: "./images/Grass_Block_29_JE2_BE2.webp"
    },
    {
        name: 2,
        image: "./images/Mycelium_29_JE2_BE2.webp"
    },
    {
        name: 3,
        image: "./images/wood.jpg"
    },
    {
        name: 4,
        image: "./images/stonebrick.jpg"
    },
    {
        name: 5,
        image: "./images/command.jpg"
    },
    {
        name: 6,
        image: "./images/sand.jpeg"
    },
    {
        name: 7,
        image: "./images/stone.webp"
    },
    {
        name: 8,
        image: "./images/woodplank.webp"
    },
    {
        name: 9,
        image: "./images/awman.webp"
    },
    {
        name: 10,
        image: "./images/steve.jpg"
    }
]
const cardsPairs = []
let points = 0
cards.forEach(card => {
    const original = document.createElement("button")
    const pair = document.createElement("button")
    const image = document.createElement("img")
    const pairImage = document.createElement("img")
    image.src = card.image
    pairImage.src = card.image
    original.className = card.name
    pair.className = card.name
    original.append(image)
    pair.append(pairImage)
    cardsPairs.push(original, pair)
});

cardsPairs.forEach(card =>{
    card.addEventListener("click", (event) =>{
        if (card.className.includes("is-clicked") || card.className.includes("is-correct")) {
            console.log(card.className);
            return
        } else {
            if (document.body.children[1].getElementsByClassName("is-clicked").length === 2) {
                return
            }
            card.className = card.className + " is-clicked"
            if (document.body.children[1].getElementsByClassName("is-clicked").length === 2) {
                if (document.body.children[1].getElementsByClassName("is-clicked")[0].className === document.body.children[1].getElementsByClassName("is-clicked")[1].className){
                    document.body.children[1].getElementsByClassName("is-clicked")[0].classList.add("is-correct")
                    document.body.children[1].getElementsByClassName("is-clicked")[1].classList.add("is-correct")
                    document.body.children[1].getElementsByClassName("is-clicked")[0].classList.remove("is-clicked")
                    document.body.children[1].getElementsByClassName("is-clicked")[0].classList.remove("is-clicked")
                    points++
                    console.log(points);
                } else {
                    setTimeout(name =>{
                        document.body.children[1].getElementsByClassName("is-clicked")[0].classList.remove("is-clicked")
                        document.body.children[1].getElementsByClassName("is-clicked")[0].classList.remove("is-clicked")
                    }, 1500)
                }
            } else{
                
            }
        }
    })
    document.body.children[1].append(card)
})