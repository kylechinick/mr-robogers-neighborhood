function rangedArrayBuilder(endPointNumber) {
  rangedArray = [];
  for (let i = 0; i <= endPointNumber; i++) {
    rangedArray.push(i);
  }
  return rangedArray;
}

rangedArrayBuilder(15);
