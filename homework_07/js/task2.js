let startGame = confirm("Do you want to play a game?");
let continueGame = true;
let randomNumber = 0,
    minOfInterval = 0,
    maxOfInterval = 5,
    inputNumber = null,
    totalPrize = 0,
    currentAttemptPrize = 0,
    maxStartAttemptPrize = 10;

playGame();

function playGame() {
    while (continueGame) {
        currentAttemptPrize = parseInt(maxStartAttemptPrize);
        if (startGame) {
            randomNumber = getRandomNumber(minOfInterval, maxOfInterval);
            
            //console.log(randomNumber); // For debug
            
            for (let attempts = 3; attempts > 0; attempts--) {
                if (attempts < 3) {
                    currentAttemptPrize = parseInt(currentAttemptPrize / 2);
                }
                inputNumber = prompt("Enter a number from " + minOfInterval + " to " + maxOfInterval + ":" + "\nAttempts left: " + attempts + "\nTotal prize: " + totalPrize + "$" + "\nPossible prize on current attempt: " + currentAttemptPrize + "$");
                if (inputNumber == null) {
                    return;
                }
                if (inputNumber == randomNumber) {
                    if (attempts == 3) {
                        totalPrize += currentAttemptPrize;
                    }
                    if (attempts == 2) {
                        totalPrize += currentAttemptPrize;
                    }
                    if (attempts == 1) {
                        totalPrize += currentAttemptPrize;
                    }
                    continueGame = confirm("Continue a game?");
                    if (continueGame) {
                        maxOfInterval *= 2;
                        maxStartAttemptPrize *= 3;
                        break;
                    } else {
                        continueGameFunc();
                        break;
                    }
                } else if (attempts == 1 && inputNumber != randomNumber) {
                    continueGameFunc();
                    break;
                }
            }
        } else {
            console.log("You did not become a millionaire!");
            return;
        }
    }
}

function getRandomNumber(minOfInterval, maxOfInterval) {
    let randomNumber = minOfInterval + Math.random() * (maxOfInterval + 1 - minOfInterval);
    return Math.floor(randomNumber);
}

function continueGameFunc() {
    continueGame = confirm("Thank you for a game. Your prize is: " + totalPrize + "$\nPlay again ?");
    if (continueGame) {
        totalPrize = 0;
        maxOfInterval = 5;
        maxStartAttemptPrize = 10;
    } else {
        return;
    }
}