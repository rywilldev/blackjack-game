const firstCard = getRandomCard(2, 11);
const secondCard = getRandomCard(2, 11);
let cards = [firstCard, secondCard]; // cards array
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let newCardEl = document.querySelector("#newcard-el");


function getRandomCard(min, max) {
    const floatRandom = Math.random();
    const difference = max - min;
    const random = Math.round(difference * floatRandom);
    const randomWithinRange = random + min;
    return randomWithinRange;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " / " + cards[1];
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Would you like to draw another card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "You have blackjack! You win!";
    } else {
        isAlive = false;
        message = "You have gone over. You lose!";
    }
    messageEl.textContent = message;
}

function getNewCard() {
    const newCard = getRandomCard(2, 11);
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
    renderGame();
}
