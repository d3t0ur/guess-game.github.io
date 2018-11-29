var theAns = Math.floor((Math.random() * 10) + 1);

var theGuess = Number(prompt("Try to guess the number."));
while (theGuess !== theAns) {
    if (theGuess > theAns) {
        theGuess = Number(prompt("Your guess was higher. Try again."))
    } else if (theGuess < theAns) {
        theGuess = Number(prompt("Your guess was lower. Try again."))
    } else if (theGuess === theAns) { alert("You guessed correctly.") }
}