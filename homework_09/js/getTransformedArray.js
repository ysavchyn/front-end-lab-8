function getTransformedArray(valueArray, someFunction) {
    let newArray = [];
    forEach(valueArray, function (value) {
        newArray.push(someFunction(value));
    });
    return newArray;
}