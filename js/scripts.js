// UI Logic

function userResponder(response) {
  $('#mr-robogers-response').text(response);
}

// Business Logic

function rangedArrayBuilder(endPointNumber) {
  rangedArray = [];
  for (let i = 0; i <= endPointNumber; i++) {
    rangedArray.push(i);
  }
  return rangedArray;
}

// rangedArrayBuilder(15);

// console.log(rangedArray);

function numberToPhraseSubstitutor(numbersArray) {
  responseArray = [];
  numbersArray.forEach(function (element) {
    if (element.toString().includes(3)) {
      element = "Won't you be my neighbor?";
      responseArray.push(element);
    } else if (element.toString().includes(2)) {
      element = 'Boop!';
      responseArray.push(element);
    } else if (element.toString().includes(1)) {
      element = 'Beep!';
      responseArray.push(element);
    } else {
      responseArray.push(element);
    }
  });
  return responseArray;
}

function humanLegibilityTransformer(array) {
  array.toString();
  return array;
}

// numberToPhraseSubstitutor(rangedArray);

$(document).ready(function () {
  $('form').submit(function () {
    event.preventDefault();
    console.log('Form submitted');
    const providedNumber = parseInt($('#prompt-number').val());
    // console.log(providedNumber);

    rangedArrayBuilder(providedNumber);

    numberToPhraseSubstitutor(rangedArray);
    // console.log(responseArray);

    userResponder(humanLegibilityTransformer(responseArray));
  });
});
