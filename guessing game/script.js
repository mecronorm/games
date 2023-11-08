const numberInput = document.querySelector("form")
const randomNumber = Math.floor((Math.random()*26)+1)
const win = document.createElement("p")

numberInput.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(event);
    if (event.target.number.value == randomNumber) {
        win.innerHTML = "Awesome! You number "+ randomNumber +" was correct. You can be named many things, hungry not being one of them."
    } else {
        if (event.target.number.value == randomNumber-1 || event.target.value == randomNumber+1) {
            win.innerHTML = "So close, but you just missed it! Are you in a class that started on the thirteenth or what?"
        } else{
            win.innerHTML = "Bummer... You guessed "+event.target.number.value+" and the secret number was "+randomNumber
        }
    }
    document.body.children[1].append(win)
})