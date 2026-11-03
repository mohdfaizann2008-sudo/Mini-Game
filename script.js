let secretValue = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let inputField = document.querySelector(".inputBox");
let result = document.querySelector(".result");
let attemptText = document.querySelector(".attempt");
let range = document.querySelector(".range");
let tryText = document.querySelector(".try");

function check() {
    let userGuess = Number(inputField.value);

    if (inputField.value === "") {
        result.textContent = `Please enter a value`;
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        result.textContent = `Please enter a value from 1 to 100`;
        return;
    }

    attempts++;

    if (userGuess === secretValue) {
        result.textContent = `The ${userGuess} is correct!`;
        attemptText.textContent = `You tried ${attempts} Times`;
        range.textContent = `The value is ${secretValue}`;
        tryText.textContent = `You won! Play again?`;

        inputField.disabled = true;
        document.querySelector(".submit").textContent = "Play Again";
        document.querySelector(".submit").onclick = resetGame;
    }
    else if (userGuess > secretValue) {
        result.textContent = `The ${userGuess} was TOO HIGH`;
        attemptText.textContent = `You tried ${attempts} Times`;
        range.textContent = `Try smaller than ${userGuess}`;
    }
    else {
        result.textContent = `The ${userGuess} was TOO LOW`;
        attemptText.textContent = `You tried ${attempts} Times`;
        range.textContent = `Try bigger than ${userGuess}`;
    }

    inputField.value = "";
    inputField.focus();
}

function resetGame() {
    secretValue = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    inputField.disabled = false;
    inputField.value = "";
    result.textContent = `RESULT : Start Guessing!`;
    attemptText.textContent = `ATTEMPTS : 0`;
    range.textContent = `RANGE : 1 - 100`;
    tryText.textContent = `Try to find the secret number!`;
    document.querySelector(".submit").textContent = "Submit Guess";
    document.querySelector(".submit").onclick = check;
}