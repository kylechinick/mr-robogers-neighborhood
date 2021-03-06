# MR. ROBOGER'S NEIGHBORHOOD

_Author_: Kyle Chinick

## Summary

This app generates responses to user input via a series of numbers and 3 specific phrases.

## Technologies

- HTML
- CSS / Bootstrap
- JavaScript / jQuery

## Description

This application takes a user provided number and returns each number from 0 to the user's number while also switching out numbers containing a 1, 2, or 3 with a unique phrase specific to each of the three substitute-triggers.

- The number 1 should be replaced with the string "Beep!"
- The number 2 should be replaced with the string "Boop!"
- The number 3 should be replaced with the string "Won't you be my neighbor?"

When multiple substitute-triggers are present in the same number a priority ranking system is used to return a single subsition string. The substitution priorites from most to least important are: 3, then 2, and finally 1.

For example, submitting 321 to the app should return 321 as the phrase "Won't you be my neighbor?" (in addition to the other numbers that preceed it).

## Setup/Installation

1. Clone this repository to your desktop by executing `git clone https://github.com/kylechinick/mr-robogers-neighborhood.git` in your preferred terminal application.
2. Execute `git remote -v` in the terminal to view existing remotes and verify successful cloning to your local machine.
3. Navigate to the top level of the project directory.
4. Open the index.html file in your browser.

## Known bugs

N/A

## Tests

### Describe: rangedArrayBuilder()

#### Test #1

- Test: "It should return an array of numbers from 0 to the argued number"
- Code: `rangedArrayBuilder(15);`
- Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

### Describe: numberToPhraseSubstitutor()

#### Test #1

- Test: "It should loop through each element in an array and swap all elements with a 3 to the string 'Won't you be my neighbor?'"
- Code: `numberToPhraseSubstitutor(rangedArray);`
- Expected Output: [0, 1, 2, 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Won't you be my neighbor?', 14, 15]

#### Test #2

- Test: "It should loop through each element in an array and swap all elements that do not have a 3, but do contain a 2, to the string 'Boop!'"
- Code: `numberToPhraseSubstitutor(rangedArray);`
- Expected Output: [0, 1, 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 10, 11, 'Boop!', 'Won't you be my neighbor?', 14, 15]

#### Test #3

- Test: "It should loop through each element in an array and swap all elements that do not have a 3 or a 2, but do contain a 1, to the string 'Beep!'"
- Code: `numberToPhraseSubstitutor(rangedArray);`
- Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?', 'Beep!', 'Beep!']

### Describe: humanLegibilityTransformer()

#### Test #1

- Test: "It should return a string version of the array it is called on"
- Code: `humanLegibilityTransformer([0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5]);`
- Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5"

#### Test #2

- Test: "It should replace all commas with a space"
- Code: `humanLegibilityTransformer([0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5]);`
- Expected Output: "0 Beep! Boop! Won't you be my neighbor? 4 5"
