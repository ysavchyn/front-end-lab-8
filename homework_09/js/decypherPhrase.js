function decypherPhrase(mapObject, string) {
    return cypherPhrase(reverseKeyValue(mapObject), string);
}

function reverseKeyValue(mapObject) {
    let reverseMapObject = {};
    for (let key in mapObject) {
        reverseMapObject[mapObject[key]] = key;
    }
    return reverseMapObject;
}