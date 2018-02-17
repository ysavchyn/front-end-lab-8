function getFilteredArray(valueArray, somePredicateFunction) {
    let newFilteredArray = [];
    forEach(valueArray, function (value) {
        if (somePredicateFunction(value)) {
            newFilteredArray.push(value);
        }
    });
    return newFilteredArray;
}