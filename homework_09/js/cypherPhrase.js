function cypherPhrase(mapObject, string) {
    let letterArrayTransformed = getTransformedArray(string.split(""), function (letter) {
        return mapObject[letter] || letter;
    });
    return letterArrayTransformed.join("");
}