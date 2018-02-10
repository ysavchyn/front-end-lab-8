let number = Number(prompt("Enter natural number from 1 to 20:")),
    pyramideBlock = "[~]",
    pyramideResult = "",
    blockCountInRow = -1,
    indent = 0;
if (number <= 0 || number > 20 || !Number.isInteger(number)) {
    console.log("Incorrect number! Reload page");
} else {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j < number - indent; j++) {
            pyramideResult += "   ";
        }
        pyramideResult += pyramideBlock.repeat(blockCountInRow += 2) + "\n";
        indent++;
    }
    console.log(pyramideResult);
}