const firstCard = getRandomCard(2, 11);
const secondCard = getRandomCard(2, 11);
let sum = firstCard + secondCard;
console.log(firstCard);
console.log(secondCard);
console.log(sum);
checkCards();
function getRandomCard(min, max) {
    const floatRandom = Math.random();
    const difference = max - min;
    const random = Math.round(difference * floatRandom);
    const randomWithinRange = random + min;
    return randomWithinRange;
}

function checkCards() {
    if (sum < 21) {
        console.log("Would you like to draw another card?");
    } else if (sum === 21) {
        console.log("You have blackjack! You win!");
    } else {
        console.log("You have gone over. You lose!");
    }
}