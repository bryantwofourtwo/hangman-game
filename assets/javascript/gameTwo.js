
// Global Variables ------------------------------------------------------
// Arrays and Variables for holding data
var wordOptions = ["javascript", "web", "developer", "internet", "server", "database", "programmer", 
				"browser", "pantaloons"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 8;

// Functions--------------------------------------------------------------
// Start Game
function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	// Reset at end of game
	guessesLeft = 8;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Populate Blanks and Successes
	for (var i=0; i<numBlanks; i++) {
		blanksAndSuccesses.push(" ");
	}

	// Change HTML to reflect conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	// Testing
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
	// Check if letter exists in code

	var isLetterinWord = false;
	for (var i = 0; i < numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterinWord = true;

		}
	}

	// Check where in word letter exists and populate blanksAndSuccess Array
	if(isLetterinWord) {
		for (var i = 0; i < numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	// Letter wasn't found
	else {
		wrongLetters.push(letter);
		guessesLeft --
	}
}
function roundComplete() {
	console.log(console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft));

	// Update the HTML to reflect status
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("  ");
	// Check if user won
	if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount ++;
		alert("You won!");
	}
	//Update win counter
	document.getElementById("winCounter").innerHTML = winCount;
	startGame();

	// Check if user lost
	else if(guessesLeft == 0){
		lossCount ++;
		alert("You lost");
		document.getElementById("lossCounter").innerHTML = lossCount;
		startGame();
	}
}
// Main Processes---------------------------------------------------------
// Starts game and resets
startGame();

// Capture keystrokes
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keycode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	// Testing
	console.log(letterGuessed);

}



