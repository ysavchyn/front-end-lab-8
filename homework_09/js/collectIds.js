function collectIds(moviesArray) {
    let idArray = [],
        filterMoviesArray = [];
    filterMoviesArray = getFilteredArray(moviesArray, predicateFunctionForMovies);
    idArray = getTransformedArray(filterMoviesArray, function (value) {
        return value.id
    });
    return idArray;
}

function predicateFunctionForMovies(moviesArray) {
    return moviesArray.rating > 3.0;
}