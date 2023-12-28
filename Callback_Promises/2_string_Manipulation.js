// //Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.

function manipulation (inputString, callback){
    const manipulated = inputString.toUpperCase();

    callback(manipulated);
}

function logString(manipulated){
    console.log(`Manipulated String is: ${manipulated}`);
}

manipulation("I love my India", logString);

//Manipulated String is: I LOVE MY INDIA