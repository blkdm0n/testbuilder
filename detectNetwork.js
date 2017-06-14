// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //input:  credit card number as a string
  //output:  name of credit card

  //1.  slice the first two digits of the entered string
  //2.  if (the first two digits are 38 or 39 Discover || 34 or 74 Amex)
  //3.  discover length = 14 ; amex = 15

  var preFixOneDigit = Number(cardNumber.slice(0,1));
  var preFixTwoDigit = Number(cardNumber.slice(0,2));
  var preFixThreeDigit = Number(cardNumber.slice(0,3));
  var preFixFourDigit = Number(cardNumber.slice(0,4));
  var preFixSixDigit = Number(cardNumber.slice(0,6));
  var cardLength = cardNumber.length;
  var cardDetected = ''

  

  if ((preFixTwoDigit >= 38 && preFixTwoDigit <= 39) && cardLength === 14) {
  	cardDetected = "Diner's Club";
  }

  if ((preFixTwoDigit === 34 || preFixTwoDigit ===37) && cardLength === 15) {
  	cardDetected = "American Express";
  }

  if ((preFixTwoDigit >= 51 && preFixTwoDigit <=55) && cardLength === 16) {
  	cardDetected = "MasterCard";
  }

  if (preFixOneDigit === 4 && (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
  	cardDetected = "Visa";
  } 

  if ((preFixTwoDigit === 65 || (preFixThreeDigit >= 644 && preFixThreeDigit <= 649) || preFixFourDigit === 6011) && (cardLength === 16 || cardLength === 19)) {
  	cardDetected = "Discover";
  }

  if ((preFixFourDigit === 5018 || preFixFourDigit === 5020 || preFixFourDigit === 5038 || preFixFourDigit === 6304) && (cardLength >= 12 && cardLength <= 19)) {
  	cardDetected = "Maestro";
  } 

  if ((preFixThreeDigit >= 624 && preFixThreeDigit <= 626) && (cardLength === 16 || cardLength === 17 || cardLength === 18 || cardLength === 19)) {
    cardDetected = "China UnionPay";
  }

  if ((preFixFourDigit >= 6282 && preFixFourDigit <= 6288) && (cardLength === 16 || cardLength === 17 || cardLength === 18 || cardLength === 19)) {
    cardDetected = "China UnionPay";
  }

  if ((preFixSixDigit >= 622126 && preFixSixDigit <= 622925) && (cardLength === 16 || cardLength === 17 || cardLength === 18 || cardLength === 19)) {
    cardDetected = "China UnionPay";
  }

  if ((preFixFourDigit === 4903 || preFixFourDigit === 4905 || preFixFourDigit === 4911 ||  preFixFourDigit === 4936 || preFixFourDigit === 6333 || preFixFourDigit === 6759) || (preFixSixDigit === 564182 || preFixSixDigit === 633110) && (cardLength === 16 || cardLength === 18 || cardLength === 19)) {
    cardDetected = 'Switch';
  }

  return cardDetected;
};

  


