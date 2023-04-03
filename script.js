const firstCard = getRandomCard(2, 11);
const secondCard = getRandomCard(2, 11);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

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
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "You have blackjack! You win!";
    } else {
        isAlive = false;
        message = "You have gone over. You lose!";
    }
    console.log(message);
}
