// Get the button element
const button = document.getElementById('rollButton')

// Add images into array

const diceImages = ["images/Vector.png" , "images/Vector-1.png", "images/Vector-2.png" , "images/Vector-3.png", "images/Vector-3.png" , "images/Vector-4.png" , "images/Vector-5.png"]

const dice = document.querySelectorAll("img");


// add  a click event to the button

button.addEventListener('click',  rollDice)

// rolldice function

function rollDice() {

    const roll = Math.floor( Math.random() * diceImages.length )

    document.getElementById("decimates").src = diceImages[roll]
}