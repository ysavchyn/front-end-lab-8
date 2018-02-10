let startGame = confirm("Do you want to play a game?"),
    continueGame = true,
    minOfInterval = 0,
    maxOfInterval = 5,
    inputNumber,
    totalPrize = 0,
    currentAttemptPrize = 0,
    maxAttemptPrize = 10;

if (startGame) {
    while (continueGame) {
        currentAttemptPrize = parseInt(maxAttemptPrize);
        let randomNumber = Math.floor(minOfInterval + Math.random() * (maxOfInterval + 1 - minOfInterval));
        
        //console.log(randomNumber); // For debug
        
        for (let attempts = 3; attempts > 0; attempts--) {
            if (attempts < 3) {
                currentAttemptPrize = parseInt(currentAttemptPrize / 2);
            }
            inputNumber = prompt("Enter a number from " + minOfInterval + " to " + maxOfInterval + ":" + "\nAttempts left: " + attempts + "\nTotal prize: " + totalPrize + "$" + "\nPossible prize on current attempt: " + currentAttemptPrize + "$");
            if (inputNumber == null) {
                continueGame = confirm("Thank you for a game. Your prize is: " + totalPrize + "$\nPlay again ?");
                if (continueGame) {
                    totalPrize = 0;
                    maxOfInterval = 5;
                    maxAttemptPrize = 10;
                    break;
                } else {
                    continueGame = false;
                    break;
                }
            }
            if ((/^\s+$/.test(inputNumber) || inputNumber.trim() == "") && attempts > 1) {
                continue;
            } else if ((/^\s+$/.test(inputNumber) || inputNumber.trim() == "") && attempts == 1) {
                continueGame = confirm("Thank you for a game. Your prize is: " + totalPrize + "$\nPlay again ?");
                if (continueGame) {
                    totalPrize = 0;
                    maxOfInterval = 5;
                    maxAttemptPrize = 10;
                    break;
                } else {
                    continueGame = false;
                    break;
                }
            }
            if (inputNumber == randomNumber) {
                if (attempts >= 1) {
                    totalPrize += currentAttemptPrize;
                }
                continueGame = confirm("Continue a game?");
                if (continueGame) {
                    maxOfInterval *= 2;
                    maxAttemptPrize *= 3;
                    break;
                } else {
                    continueGame = confirm("Thank you for a game. Your prize is: " + totalPrize + "$\nPlay again ?");
                    if (continueGame) {
                        totalPrize = 0;
                        maxOfInterval = 5;
                        maxAttemptPrize = 10;
                        break;
                    } else {
                        continueGame = false;
                        break;
                    }
                }
            } else if (attempts == 1 && inputNumber != randomNumber) {
                continueGame = confirm("Thank you for a game. Your prize is: " + totalPrize + "$\nPlay again ?");
                if (continueGame) {
                    totalPrize = 0;
                    maxOfInterval = 5;
                    maxAttemptPrize = 10;
                    break;
                } else {
                    continueGame = false;
                    break;
                }
            }
        }
    }
} else {
    console.log("You did not become a millionaire!");
}