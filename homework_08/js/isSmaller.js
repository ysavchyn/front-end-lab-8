let isSmaller = (firstValue, secondValue) => {
  if(firstValue == secondValue) {
    return false;
  } else {
    return !(isBigger(firstValue, secondValue));
  }
}
