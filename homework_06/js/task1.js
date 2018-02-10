let a = parseFloat(prompt("Enter side \"a\" of triangle:")),
    b = parseFloat(prompt("Enter side \"b\" of triangle:")),
    c = parseFloat(prompt("Enter side \"c\" of triangle:")),
    type = "";

if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Incorrect data");
} else {
    if (!(a + b > c && a + c > b && b + c > a)) {
        console.log("Triangle does not exist");
    } else {
        let square = calcSquare(a, b, c);
        if ((a * a + b * b == c * c) || (a * a + c * c == b * b) || (c * c + b * b == a * a)) {
            type = " right ";
        } else if (a == b && b == c && a == c) {
            type = " equilateral ";
        } else if (a == b || b == c || a == c) {
            type += " isosceles ";
        } else {
            type = " scalene ";
        }
        if (parseInt(square) != square) {
            console.log("Type of triangle is" + type + "triangle and square is " + square.toFixed(2));
        } else {
            console.log("Type of triangle is" + type + "triangle and square is " + Math.round(square));
        }
    }
}

function calcSquare(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}