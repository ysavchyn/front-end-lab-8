let number = Number(prompt("Enter natural number from 1 to 20:"));
let pyramideBlock = "[~]";
let pyramideResult = "";
let blockCountInRow = -1;
let indent = 0;

if (number <= 0 || number > 20 || !Number.isInteger(number)) {
    console.log("Incorrect number! Reload page");
} else {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= (number - 1 - indent); j++) {
            pyramideResult += "   ";
        }
        blockCountInRow += 2;
        pyramideResult += pyramideBlock.repeat(blockCountInRow);
        indent++;
        console.log(pyramideResult + "\n");
        pyramideResult = "";
    }
}