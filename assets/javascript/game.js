//create variables: an array of the alphabet, wins, loses, chances, and playerChoices array for storing guessed letters
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var chances = 9;
var playerChoices = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function(event) {
    //Link to content on the page
    var displayedWins = document.getElementById("wins");
    var displayedLosses = document.getElementById("losses");
    var displayedChances = document.getElementById("chances");
    var displayedGuesses = document.getElementById("lettersGuessed");

    //get the pressed key
    var playerGuess = event.key;

    //console.log(computerGuess);

    //check to make sure the guess is a letter, and hasn't been guessed yet
    if (computerChoices.indexOf(playerGuess) != -1 && playerChoices.indexOf(playerGuess) == -1){
        //if it's the computer's letter you win!
        if (playerGuess === computerGuess){
            //reset the computer guess to something new, along with player guesses, and chances and increase wins
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            wins++;
            playerChoices = [];
            chances = 9;
            displayedWins.textContent = wins;
            displayedGuesses.textContent = playerChoices;
            displayedChances.textContent = chances;
        }
        //otherwise lower number of chances
        else{
            chances--;
            //if the player still has more chances, add their guess to the array of choices and update the page
            if (chances > 0){
                playerChoices.push(playerGuess);
                displayedGuesses.textContent = playerChoices;
                displayedChances.textContent = chances;
            }
            //otherwise reset the computer guess, increase losses, and reset player choices and chances and update the page
            else{
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                losses++;
                playerChoices = [];
                chances = 9;
                displayedLosses.textContent = losses;
                displayedGuesses.textContent = playerChoices;
                displayedChances.textContent = chances;
            }
        }
    }

}