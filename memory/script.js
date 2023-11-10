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
const infoButton = document.getElementById("info")
const infoArticle = document.getElementById("info-article")
const playAgain = document.getElementById("play-again")
const cardsPairs = []
let tries = 0
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
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
shuffle(cardsPairs)  
infoButton.addEventListener("click", (event)=> {
    event.target.classList.toggle("active")
    if (event.target.classList.contains("active")) {
        cardsPairs.forEach(card =>{
            card.style.display = "none"
        })
        infoArticle.style.display = "block"
    } else {
        if (points != cardsPairs.length / 2) {  
            cardsPairs.forEach(card => {
                card.style.display = "block"
            })
        }
        infoArticle.style.display = "none"
    }
})
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
            tries++
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
            }
        }
        if (points === cardsPairs.length / 2) {
            setTimeout(name => {
                cardsPairs.forEach(card => {
                    card.style.display = "none"
                });
                const winMessage = document.createElement("h3")
                winMessage.textContent = `You won, and it only took you ${tries / 2} tries!`
                document.body.children[2].insertBefore(winMessage, document.body.children[2].firstChild)
                document.body.children[2].style.display = "block"
            }, 750)
        }
    })
    document.body.children[1].children[0].append(card)
})
playAgain.addEventListener("click", (event)=>{
    location.reload()
})