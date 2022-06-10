function rangedArrayBuilder(endPointNumber) {
  rangedArray = [];
  for (let i = 0; i <= endPointNumber; i++) {
    rangedArray.push(i);
  }
  return rangedArray;
}

rangedArrayBuilder(15);

console.log(rangedArray);

function numberToPhraseSubstitutor(numbersArray) {
  responseArray = [];
  numbersArray.forEach(function (element, index) {
    if (element.toString().includes(1)) {
      element = 'Beep!';
      responseArray.push(element);
    } else {
      responseArray.push(element);
    }
  });
  return responseArray;
}
numberToPhraseSubstitutor(rangedArray);
