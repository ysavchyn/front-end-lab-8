let getClosestToZero = (...arrayOfValues) => {
  let closestToZeroValue, temp = Math.abs(arrayOfValues[0]), position = 0;
  for (let i = 1; i < arrayOfValues.length; i++) {
    if (Math.abs(arrayOfValues[i]) < temp) {
      temp = Math.abs(arrayOfValues[i]);
      position = i;
    }
  }
  closestToZeroValue = arrayOfValues[position];
  return closestToZeroValue;
}
