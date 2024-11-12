let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const feedback = document.getElementById("feedback");
    const guess = Number(guessInput.value);
    attempts++;

    if (guess === randomNumber) {
        feedback.textContent = `Gefeliciteerd! Je hebt het juiste getal ${randomNumber} geraden in ${attempts} beurten!`;
        feedback.style.color = "green";
    } else if (guess < randomNumber) {
        feedback.textContent = "Hoger!";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Lager!";
        feedback.style.color = "orange";
    }

    guessInput.value = "";
    guessInput.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("feedback").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}
