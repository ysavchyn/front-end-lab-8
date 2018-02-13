let getMin = (...arrayOfValues) => {
  let minValue = arrayOfValues[0];
  for (let i = 1; i < arrayOfValues.length; i++) {
    if(arrayOfValues[i] < minValue) {
      minValue = arrayOfValues[i];
    }
  }
  return minValue;
}
