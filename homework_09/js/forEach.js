function forEach(valueArray, someFunction) {
    for (var i = 0; i < valueArray.length; i++) {
        someFunction(valueArray[i]);
    }
}