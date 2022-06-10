// Business Logic

function rangedArrayBuilder(endPointNumber) {
  rangedArray = [];
  for (let i = 0; i <= endPointNumber; i++) {
    rangedArray.push(i);
  }
  return rangedArray;
}

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
  const humanLegibleResponse = '"' + array.toString().replace(/,/g, ' ') + '"';
  return humanLegibleResponse;
}

// UI Logic

function userResponder(response, totalElements) {
  if (totalElements > 200) {
    $('#mr-robogers-response').text(response).show('blind', 5000);
  } else {
    $('#mr-robogers-response').text(response).show('blind', 2000);
  }
}

$(document).ready(function () {
  $('form').submit(function () {
    event.preventDefault();

    $('.closing-cursor').remove();
    $('#mr-robogers-response').hide();

    const providedNumber = parseInt($('#prompt-number').val());

    rangedArrayBuilder(providedNumber);

    numberToPhraseSubstitutor(rangedArray);

    userResponder(
      humanLegibilityTransformer(responseArray),
      responseArray.length
    );

    $('#response-container').append(
      `<p class="cursor-pipe closing-cursor terminal-text">|</p>`
    );
  });
});
