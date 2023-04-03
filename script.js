const firstCard = getRandomCard(2, 11);
const secondCard = getRandomCard(2, 11);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

console.log(firstCard);
console.log(secondCard);
console.log(sum);

function getRandomCard(min, max) {
    const floatRandom = Math.random();
    const difference = max - min;
    const random = Math.round(difference * floatRandom);
    const randomWithinRange = random + min;
    return randomWithinRange;
}

function startGame() {
    if (sum <= 20) {
        message = "Would you like to draw another card?";
        sumEl.textContent = "Sum: " + sum;
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "You have blackjack! You win!";
        sumEl.textContent = "Sum: " + sum;
    } else {
        isAlive = false;
        message = "You have gone over. You lose!";
        sumEl.textContent = "Sum: " + sum;
    }
    messageEl.textContent = message;
}
