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
            inputNumber = prompt("Enter a number from " + minOfInterval + " to " + maxOfInterval + ":" + "\nAttempts left: " + attempts + "\nTotal prize: " + totalPrize + "$" + "\nPossible prize on current attempt: " + currentAttemptPrize + "$");
            if (inputNumber == randomNumber && (inputNumber.trim() != "")) {
                totalPrize += currentAttemptPrize;
                continueGame = confirm("Continue a game?");
                if (continueGame) {
                    maxOfInterval *= 2;
                    maxAttemptPrize *= 3;
                    break;
                }
            }
            if (!continueGame || attempts == 1) {
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
            } else {
                currentAttemptPrize = parseInt(currentAttemptPrize / 2);
                continue;
            }
        }
    }
} else {
    console.log("You did not become a millionaire!");
}