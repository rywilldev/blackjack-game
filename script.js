const firstCard = getRandomCard();
const secondCard = getRandomCard();
let cards = [firstCard, secondCard]; // cards array
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let newCardEl = document.querySelector("#newcard-el");


function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
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
    const newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
    renderGame();
}
