let isSmaller = (firstValue, secondValue) => {
  let isBigger  = (firstValue, secondValue) => {return firstValue > secondValue;}
  if(firstValue == secondValue) {
    return false;
  } else {
    return !(isBigger(firstValue, secondValue));
  }
}
