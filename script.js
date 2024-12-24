let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Get a random number between 1 - 10
function generateTarget() {
    randomNumber = Math.random() * 10;
    return Math.floor(randomNumber);
}
//Testing the GenerateTarget Function
console.log(generateTarget());

//Compare the secret number, Computer Number and the human entered number and pick a winner
function compareGuesses(userGuess,computerGuess,secretNumber) {
    //Subtract the guesses from the secret number to tell which one is closer, use Math.abs to return only absolute values
    let userDistance = Math.abs(secretNumber - userGuess);
    let computerDistance = Math.abs(secretNumber - computerGuess);
    // Start comparing the two values. Return true for user win, return false for computer win and if they tie return true for user win
    if (userDistance < computerDistance) {
        return true
    }
    else if (computerDistance < userDistance) {
        return false
    } else if ( userDistance === computerDistance) {
        return true
    } else {
        return 'Error'
    }
};
// Check who won and update the score
function updateScore(winner) {
    if (winner === 'human') {
        humanScore = humanScore + 1
    } else if (winner === 'computer'){
        computerScore = computerScore + 1
    } else {
        return 'Wrong Value!!'
    }
};

function advanceRound() {
    currentRoundNumber = currentRoundNumber + 1
}