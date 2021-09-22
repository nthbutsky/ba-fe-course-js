// TASK 1

const tsk1Btn = document.querySelector('#l24-tsk1-btn');

tsk1Btn.addEventListener('click', runL24Tsk1);

function runL24Tsk1() {
  const userAge = prompt(
    'Bro/Sis, how much vintage are you?',
    'Please enter your age!',
  );

  if (userAge > 0 && userAge < 12) {
    alert("You're too small, come some time later, kiddo!");
  } else if (userAge >= 12 && userAge < 18) {
    alert('Almost, teeny, not so long left!');
  } else if (userAge >= 18 && userAge < 60) {
    alert("Whatever, you're adult, do what you wanna do!");
  } else if (userAge >= 60 && userAge <= 90) {
    alert('You did your best grayhead, now put your ass in rest!');
  } else if (userAge > 90 && userAge <= 122) {
    alert('Wow, nice try, almost hit the world record!');
  } else {
    alert('Nope, give your real age!');
  }
}

// second variant

// switch (userAge2) {
//   case userAge2 > 0 && userAge2 < 12:
//     alert("You're too small, come some time later, kiddo!");
//     break;
//   case userAge2 >= 12 && userAge2 < 18:
//     alert('Almost, teeny, not so long left!');
//     break;
//   case userAge2 >= 18 && userAge2 < 60:
//     alert("Whatever, you're adult, do what you wanna do!");
//     break;
//   case userAge2 >= 60 && userAge2 <= 90:
//     alert('You did your best grayhead, now put your ass in rest!');
//     break;
//   case userAge2 > 90 && userAge2 <= 122:
//     alert('Wow, nice try, almost hit the world record!');
//     break;
//   default:
//     alert('Nope, give your real age!');
// }

// third variant

// const message =
//   userAge3 > 0 && userAge3 < 12
//     ? "You're too small, come some time later, kiddo!"
//     : userAge3 >= 12 && userAge3 < 18
//     ? 'Almost, teeny, not so long left!'
//     : userAge3 >= 18 && userAge3 < 60
//     ? "Whatever, you're adult, do what you wanna do!"
//     : userAge3 >= 60 && userAge3 <= 90
//     ? 'You did your best grayhead, now put your ass in rest!'
//     : userAge3 > 90 && userAge3 <= 122
//     ? 'Wow, nice try, almost hit the world record!'
//     : 'Nope, give your real age!';

// TASK 2

const tsk2Btn = document.querySelector('#l24-tsk2-btn');

tsk2Btn.addEventListener('click', runL24Tsk2);

function runL24Tsk2() {
  let digit = +prompt(
    'What number are you interested in?',
    'Please enter a number 0-9',
  );

  switch (digit) {
    case (digit = 0):
      alert('Symbol is )');
      break;
    case (digit = 1):
      alert('Symbol is !');
      break;
    case (digit = 2):
      alert('Symbol is @');
      break;
    case (digit = 3):
      alert('Symbol is #');
      break;
    case (digit = 4):
      alert('Symbol is $');
      break;
    case (digit = 5):
      alert('Symbol is %');
      break;
    case (digit = 6):
      alert('Symbol is ^');
      break;
    case (digit = 7):
      alert('Symbol is &');
      break;
    case (digit = 8):
      alert('Symbol is *');
      break;
    case (digit = 9):
      alert('Symbol is 9');
      break;
    default:
      alert('Nope, enter a number 0-9!');
  }
}

// TASK 3

const tsk3Btn = document.querySelector('#l24-tsk3-btn');

tsk3Btn.addEventListener('click', runL24Tsk3);

function runL24Tsk3() {
  const threeDigitNumb = +prompt('Please enter 3-digit-number', 'xxx');
  const digit1 = parseInt(threeDigitNumb / 100);
  const digit2 = parseInt((threeDigitNumb / 10) % 10);
  const digit3 = parseInt(threeDigitNumb % 10);

  if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3) {
    alert('There is a match!');
  } else {
    alert('No match');
  }
}

// TASK 4

const tsk4Btn = document.querySelector('#l24-tsk4-btn');

tsk4Btn.addEventListener('click', runL24Tsk4);

function runL24Tsk4() {
  const isLeapYear = prompt('Enter a year', 'xxxx');

  if (isLeapYear % 400 == 0 || (isLeapYear % 4 == 0 && isLeapYear % 100 != 0)) {
    alert(`${isLeapYear} is a leap year`);
  } else {
    alert(`${isLeapYear} is not a leap year`);
  }
}

// TASK 5

const tsk5Btn = document.querySelector('#l24-tsk5-btn');

tsk5Btn.addEventListener('click', runL24Tsk5);

function runL24Tsk5() {
  const fiveDigitNumb = +prompt('Give us 5-digit-number!', 'xxxxx');

  const digit_1 = parseInt(fiveDigitNumb / 10000);
  const digit_2 = parseInt((fiveDigitNumb / 1000) % 10);
  const digit_3 = parseInt((fiveDigitNumb / 100) % 10);
  const digit_4 = parseInt((fiveDigitNumb / 10) % 10);
  const digit_5 = parseInt(fiveDigitNumb % 10);

  if (digit_1 === digit_5 && digit_2 === digit_4) {
    alert(`${fiveDigitNumb} is a palindrome`);
  } else {
    alert(`${fiveDigitNumb} is NOT a palindrome`);
  }
}

// TASK 6

const tsk6Btn = document.querySelector('#l24-tsk6-btn');

tsk6Btn.addEventListener('click', runL24Tsk6);

function runL24Tsk6() {
  const currencyToChange = +prompt(
    'Enter integer sum in USD you want to convert',
    '0',
  );
  const currencyToChoose = prompt(
    'Enter corresponding number for the currency USD to be converted into: EUR = 1, UAH = 2, PLN = 3',
  );
  switch (currencyToChoose) {
    case '1':
      alert(currencyToChange * 0.85 + ' ' + 'EUR');
      break;
    case '2':
      alert(currencyToChange * 26.75 + ' ' + 'UAH');
      break;
    case '3':
      alert(currencyToChange * 3.9 + ' ' + 'PLN');
      break;
    default:
      alert('Please enter 1, 2 or 3 to choose between currencies!');
  }
}

// TASK 7

const tsk7Btn = document.querySelector('#l24-tsk7-btn');

tsk7Btn.addEventListener('click', runL24Tsk7);

function runL24Tsk7() {
  const totalSum = +prompt('Enter the sum of your purchase');
  const discount_3 = totalSum - (totalSum * 0.03).toFixed(1);
  const discount_5 = totalSum - (totalSum * 0.05).toFixed(1);
  const discount_7 = totalSum - (totalSum * 0.07).toFixed(1);

  if (totalSum >= 200 && totalSum < 300) {
    alert(`The sum after the discount is ${discount_3}`);
  } else if (totalSum >= 300 && totalSum < 500) {
    alert(`The sum after the discount is ${discount_5}`);
  } else if (totalSum >= 500) {
    alert(`The sum after the discount is ${discount_7}`);
  } else {
    alert('No discount this time');
  }
}

// //second variant

// switch (true) {
//   case totalSum >= 200 && totalSum < 300:
//     alert(`The sum after the discount is ${discount_3}`);
//     break;
//   case totalSum >= 300 && totalSum < 500:
//     alert(`The sum after the discount is ${discount_5}`);
//     break;
//   case totalSum >= 500:
//     alert(`The sum after the discount is ${discount_7}`);
//     break;
//   default:
//     alert('No discount this time');
// }

// TASK 8

const tsk8Btn = document.querySelector('#l24-tsk8-btn');

tsk8Btn.addEventListener('click', runL24Tsk8);

function runL24Tsk8() {
  const circlePerimeter = +prompt('Enter a circle perimeter');
  const squarePerimeter = +prompt('Enter a square perimeter');
  const pi = Math.PI;
  const circleRadius = circlePerimeter / (2 * pi);
  const circleDiameter = circleRadius * 2;
  const squareSide = squarePerimeter / 4;

  if (circleDiameter <= squareSide) {
    alert('This circle gonna fit');
  } else {
    alert('Nope, too big');
  }
}

// TASK 9

const tsk9Btn = document.querySelector('#l24-tsk9-btn');

tsk9Btn.addEventListener('click', runL24Tsk9);

function runL24Tsk9() {
  const firstQuestion = prompt('red, yellow or green?');
  const secondQuestion = prompt('left, center or right?');
  const thirdQuestion = prompt('yes, maybe or no?');

  let totalScore = 0;

  if (firstQuestion === 'yellow') {
    totalScore += 2;
  }

  if (secondQuestion === 'center') {
    totalScore += 2;
  }

  if (thirdQuestion === 'maybe') {
    totalScore += 2;
  }

  alert(`Your total score is ${totalScore}`);
}

// TASK 10

const tsk10Btn = document.querySelector('#l24-tsk10-btn');

tsk10Btn.addEventListener('click', runL24Tsk10);

function runL24Tsk10() {
  let dateEntered = prompt('Enter a date: xx/xx/xxxx', 'xx/xx/xxxx');
  dateEntered = dateEntered.split('/');
  let dateNew = new Date(dateEntered[2], dateEntered[1] - 1, dateEntered[0]);
  dateNew.setDate(dateNew.getDate() + 1);
  alert(`Next day is ${dateNew}`);
}
