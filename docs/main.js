/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/l24.js":
/*!*******************!*\
  !*** ./js/l24.js ***!
  \*******************/
/***/ (function() {

// TASK 1
var tsk1Btn = document.querySelector('#l24-tsk1-btn');
tsk1Btn.addEventListener('click', runL24Tsk1);

function runL24Tsk1() {
  var userAge = prompt('Bro/Sis, how much vintage are you?', 'Please enter your age!');

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
} // second variant
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


var tsk2Btn = document.querySelector('#l24-tsk2-btn');
tsk2Btn.addEventListener('click', runL24Tsk2);

function runL24Tsk2() {
  var digit = +prompt('What number are you interested in?', 'Please enter a number 0-9');

  switch (digit) {
    case digit = 0:
      alert('Symbol is )');
      break;

    case digit = 1:
      alert('Symbol is !');
      break;

    case digit = 2:
      alert('Symbol is @');
      break;

    case digit = 3:
      alert('Symbol is #');
      break;

    case digit = 4:
      alert('Symbol is $');
      break;

    case digit = 5:
      alert('Symbol is %');
      break;

    case digit = 6:
      alert('Symbol is ^');
      break;

    case digit = 7:
      alert('Symbol is &');
      break;

    case digit = 8:
      alert('Symbol is *');
      break;

    case digit = 9:
      alert('Symbol is 9');
      break;

    default:
      alert('Nope, enter a number 0-9!');
  }
} // TASK 3


var tsk3Btn = document.querySelector('#l24-tsk3-btn');
tsk3Btn.addEventListener('click', runL24Tsk3);

function runL24Tsk3() {
  var threeDigitNumb = +prompt('Please enter 3-digit-number', 'xxx');
  var digit1 = parseInt(threeDigitNumb / 100);
  var digit2 = parseInt(threeDigitNumb / 10 % 10);
  var digit3 = parseInt(threeDigitNumb % 10);

  if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3) {
    alert('There is a match!');
  } else {
    alert('No match');
  }
} // TASK 4


var tsk4Btn = document.querySelector('#l24-tsk4-btn');
tsk4Btn.addEventListener('click', runL24Tsk4);

function runL24Tsk4() {
  var isLeapYear = prompt('Enter a year', 'xxxx');

  if (isLeapYear % 400 == 0 || isLeapYear % 4 == 0 && isLeapYear % 100 != 0) {
    alert("".concat(isLeapYear, " is a leap year"));
  } else {
    alert("".concat(isLeapYear, " is not a leap year"));
  }
} // TASK 5


var tsk5Btn = document.querySelector('#l24-tsk5-btn');
tsk5Btn.addEventListener('click', runL24Tsk5);

function runL24Tsk5() {
  var fiveDigitNumb = +prompt('Give us 5-digit-number!', 'xxxxx');
  var digit_1 = parseInt(fiveDigitNumb / 10000);
  var digit_2 = parseInt(fiveDigitNumb / 1000 % 10);
  var digit_3 = parseInt(fiveDigitNumb / 100 % 10);
  var digit_4 = parseInt(fiveDigitNumb / 10 % 10);
  var digit_5 = parseInt(fiveDigitNumb % 10);

  if (digit_1 === digit_5 && digit_2 === digit_4) {
    alert("".concat(fiveDigitNumb, " is a palindrome"));
  } else {
    alert("".concat(fiveDigitNumb, " is NOT a palindrome"));
  }
} // TASK 6


var tsk6Btn = document.querySelector('#l24-tsk6-btn');
tsk6Btn.addEventListener('click', runL24Tsk6);

function runL24Tsk6() {
  var currencyToChange = +prompt('Enter integer sum in USD you want to convert', '0');
  var currencyToChoose = prompt('Enter corresponding number for the currency USD to be converted into: EUR = 1, UAH = 2, PLN = 3');

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
} // TASK 7


var tsk7Btn = document.querySelector('#l24-tsk7-btn');
tsk7Btn.addEventListener('click', runL24Tsk7);

function runL24Tsk7() {
  var totalSum = +prompt('Enter the sum of your purchase');
  var discount_3 = totalSum - (totalSum * 0.03).toFixed(1);
  var discount_5 = totalSum - (totalSum * 0.05).toFixed(1);
  var discount_7 = totalSum - (totalSum * 0.07).toFixed(1);

  if (totalSum >= 200 && totalSum < 300) {
    alert("The sum after the discount is ".concat(discount_3));
  } else if (totalSum >= 300 && totalSum < 500) {
    alert("The sum after the discount is ".concat(discount_5));
  } else if (totalSum >= 500) {
    alert("The sum after the discount is ".concat(discount_7));
  } else {
    alert('No discount this time');
  }
} // //second variant
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


var tsk8Btn = document.querySelector('#l24-tsk8-btn');
tsk8Btn.addEventListener('click', runL24Tsk8);

function runL24Tsk8() {
  var circlePerimeter = +prompt('Enter a circle perimeter');
  var squarePerimeter = +prompt('Enter a square perimeter');
  var pi = Math.PI;
  var circleRadius = circlePerimeter / (2 * pi);
  var circleDiameter = circleRadius * 2;
  var squareSide = squarePerimeter / 4;

  if (circleDiameter <= squareSide) {
    alert('This circle gonna fit');
  } else {
    alert('Nope, too big');
  }
} // TASK 9


var tsk9Btn = document.querySelector('#l24-tsk9-btn');
tsk9Btn.addEventListener('click', runL24Tsk9);

function runL24Tsk9() {
  var firstQuestion = prompt('red, yellow or green?');
  var secondQuestion = prompt('left, center or right?');
  var thirdQuestion = prompt('yes, maybe or no?');
  var totalScore = 0;

  if (firstQuestion === 'yellow') {
    totalScore += 2;
  }

  if (secondQuestion === 'center') {
    totalScore += 2;
  }

  if (thirdQuestion === 'maybe') {
    totalScore += 2;
  }

  alert("Your total score is ".concat(totalScore));
} // TASK 10


var tsk10Btn = document.querySelector('#l24-tsk10-btn');
tsk10Btn.addEventListener('click', runL24Tsk10);

function runL24Tsk10() {
  var dateEntered = prompt('Enter a date: xx/xx/xxxx', 'xx/xx/xxxx');
  dateEntered = dateEntered.split('/');
  var dateNew = new Date(dateEntered[2], dateEntered[1] - 1, dateEntered[0]);
  dateNew.setDate(dateNew.getDate() + 1);
  alert("Next day is ".concat(dateNew));
}

/***/ }),

/***/ "./js/l25.js":
/*!*******************!*\
  !*** ./js/l25.js ***!
  \*******************/
/***/ (function() {

// TASK 1
// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
var tsk1Btn = document.querySelector('#l25-tsk1-btn');
tsk1Btn.addEventListener('click', runL25Tsk1);

function runL25Tsk1() {
  var firstNumb = +prompt('Enter first number!', 'First number');
  var secondNumb = +prompt('Enter second number!', 'Second number');
  var sum = 0;
  var firstNumbVar = firstNumb;

  while (firstNumb <= secondNumb) {
    sum += firstNumb;
    firstNumb++;
  }

  alert("The sum of all numbers beetween ".concat(firstNumbVar, " and ").concat(secondNumb, " is ").concat(sum));
} //TASK 2
// Запросить 2 числа и найти только наибольший общий делитель.


var tsk2Btn = document.querySelector('#l25-tsk2-btn');
tsk2Btn.addEventListener('click', runL25Tsk2);

function runL25Tsk2() {
  var numb1 = +prompt('Enter first number!', 'First number');
  var numb2 = +prompt('Enter second number!', 'Second number');

  while (numb2) {
    var temp = numb2;
    numb2 = numb1 % numb2;
    numb1 = temp;
  }

  alert("GCD is ".concat(numb1));
} // //second variant
// alert('Enter two numbers to find the greatest common divisor (GCD)');
// let numb1 = prompt('First number');
// let numb2 = prompt('Second number');
// const gcd = (numb1, numb2) => {
//   while (numb1 != numb2) {
//     if (numb1 > numb2) {
//       numb1 = numb1 - numb2;
//     } else {
//       numb2 = numb2 - numb1;
//     }
//   }
//   return numb2;
// };
// alert('GCD of ' + numb1 + ' & ' + numb2 + ' is: ' + gcd(numb1, numb2));
// //third variant
// alert('Enter two numbers to find the greatest common divisor (GCD)');
// let numb1 = prompt('First number');
// let numb2 = prompt('Second number');
// const gcd = (numb1, numb2) => {
//   if (numb2 === 0) {
//     return numb1;
//   }
//   return gcd(numb2, numb1 % numb2);
// };
// alert('GCD of ' + numb1 + ' & ' + numb2 + ' is: ' + gcd(numb1, numb2));
//TASK 3
//Запросить у пользователя число и вывести все делители этого числа.


var tsk3Btn = document.querySelector('#l25-tsk3-btn');
tsk3Btn.addEventListener('click', runL25Tsk3);

function runL25Tsk3() {
  var numb = +prompt('Enter number!', 'Number');
  var temp = numb;
  console.log("All devisors of ".concat(numb, " are:"));

  while (numb > 0) {
    if (temp % numb === 0) {
      console.log(numb);
    }

    numb--;
  }

  alert('Open Console to see the result!');
} //TASK 4
//Определить количество цифр в введенном числе.


var tsk4Btn = document.querySelector('#l25-tsk4-btn');
tsk4Btn.addEventListener('click', runL25Tsk4);

function runL25Tsk4() {
  var numb = prompt('Enter number!', 'Number');
  var counter = 0;

  for (var i = 0; i < numb.length; i++) {
    counter++;
  }

  alert("The number you entered consists of ".concat(counter, " symbols"));
} //TASK 5
//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.


var tsk5Btn = document.querySelector('#l25-tsk5-btn');
tsk5Btn.addEventListener('click', runL25Tsk5);

function runL25Tsk5() {
  var numbPos = 0;
  var numbNeg = 0;
  var numbZero = 0;
  var numbEven = 0;
  var numbOdd = 0;

  for (var i = 0; i < 10; i++) {
    var numb = prompt('Please enter 10 numbers, but only one at a time!', 'One number at a time!');

    if (numb > 0) {
      numbPos++;
    } else if (numb < 0) {
      numbNeg++;
    } else {
      numbZero++;
    }

    if (numb % 2 == 0) {
      numbEven++;
    } else {
      numbOdd++;
    }
  }

  alert("You have entered ".concat(numbPos, " positive numbs; ").concat(numbNeg, " negative numbs; ").concat(numbZero, " zeros; ").concat(numbEven, " even numbs; ").concat(numbOdd, " odd numbs"));
} //TASK 6
//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.


var tsk6Btn = document.querySelector('#l25-tsk6-btn');
tsk6Btn.addEventListener('click', runL25Tsk6);

function runL25Tsk6() {
  var result;

  do {
    var firstNumb = +prompt('Enter first number');
    var operator = prompt('Enter an operator (+, -, * or /)');
    var secondNumb = +prompt('Enter second number');

    if (operator === '+') {
      result = firstNumb + secondNumb;
    } else if (operator === '-') {
      result = firstNumb - secondNumb;
    } else if (operator === '*') {
      result = firstNumb * secondNumb;
    } else if (operator === '/') {
      result = firstNumb / secondNumb;
    } else {
      alert('You entered wrong operator!');
    }
  } while (confirm("The result is: ".concat(result, ". Do you want to try more?")));
} //TASK 7
//Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).


var tsk7Btn = document.querySelector('#l25-tsk7-btn');
tsk7Btn.addEventListener('click', runL25Tsk7);

function runL25Tsk7() {
  var numb = prompt('Enter a number!');
  var shift = +prompt('Enter a shift number!');
  numb = numb.slice(shift, numb.length) + numb.slice(0, shift);
  alert("The result is: ".concat(numb));
} //TASK 8
//Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.


var tsk8Btn = document.querySelector('#l25-tsk8-btn');
tsk8Btn.addEventListener('click', runL25Tsk8);

function runL25Tsk8() {
  var mon = 'Monday';
  var tue = 'Tuesday';
  var wed = 'Wednesday';
  var thu = 'Thursday';
  var fri = 'Friday';
  var sat = 'Saturday';
  var sun = 'Sunday';
  var weekDayNow = new Date().toString().slice(0, 3);

  if (weekDayNow == 'Mon') {
    weekDayNow = mon;
  } else if (weekDayNow == 'Tue') {
    weekDayNow = tue;
  } else if (weekDayNow == 'Wed') {
    weekDayNow = wed;
  } else if (weekDayNow == 'Thu') {
    weekDayNow = thu;
  } else if (weekDayNow == 'Fri') {
    weekDayNow = fri;
  } else if (weekDayNow == 'Sat') {
    weekDayNow = sat;
  } else if (weekDayNow == 'Sun') {
    weekDayNow = sun;
  }

  while (confirm("Today is ".concat(weekDayNow, ", do you want to see next day?"))) {
    switch (weekDayNow) {
      case 'Monday':
        weekDayNow = tue;
        break;

      case 'Tuesday':
        weekDayNow = wed;
        break;

      case 'Wednesday':
        weekDayNow = thu;
        break;

      case 'Thursday':
        weekDayNow = fri;
        break;

      case 'Friday':
        weekDayNow = sat;
        break;

      case 'Saturday':
        weekDayNow = sun;
        break;

      case 'Sunday':
        weekDayNow = mon;
        break;
    }
  }
} //TASK 9
//Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.


var tsk9Btn = document.querySelector('#l25-tsk9-btn');
tsk9Btn.addEventListener('click', runL25Tsk9);

function runL25Tsk9() {
  document.write('<main style="display: flex; justify-content:center; align-items: center; flex-wrap: wrap; height: 100%; font-family: arial; font-size: 1.2rem;">');
  document.write('<aside style="width: 40px; text-align: center;">');
  document.write(' ' + '<br>');

  for (var i = 2; i <= 9; i++) {
    document.write(i + '<br>');
  }

  document.write('</aside>');

  for (var k = 2; k <= 9; k++) {
    document.write('<div style="width: 40px; text-align: center;">');
    document.write(k + '<br>');

    for (var j = 2; j <= 9; j++) {
      document.write(j * k + '<br>');
    }

    document.write('</div>');
  }

  document.write('</main>');
} //TASK 10
//Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.


var tsk10Btn = document.querySelector('#l25-tsk10-btn');
tsk10Btn.addEventListener('click', runL25Tsk10);

function runL25Tsk10() {
  alert('Please think of a random number between 0-100, when ready press Ok!');
  var minNumb = 0;
  var maxNumb = 100;
  var numb = maxNumb / 2;
  var guess;

  do {
    guess = prompt("Is your number ".concat(numb, "? Enter = if so, if not, enter < for bigger or > for smaller"));

    if (guess === '=') {
      alert('Wohoo!');
    } else if (guess === '<') {
      minNumb = numb + 1;
      numb = parseInt(minNumb + (maxNumb - minNumb) / 2);
    } else if (guess === '>') {
      maxNumb = numb - 1;
      numb = parseInt(minNumb + (maxNumb - minNumb) / 2);
    }
  } while (guess === '<' || guess === '>');
}

/***/ }),

/***/ "./js/l26.js":
/*!*******************!*\
  !*** ./js/l26.js ***!
  \*******************/
/***/ (function() {

// TASK 1
//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
var tsk1Btn = document.querySelector('#l26-tsk1-btn');
tsk1Btn.addEventListener('click', runL26Tsk1);

function runL26Tsk1() {
  var firstNumb = prompt('Enter first number');
  var secondNumb = prompt('Enter second number');
  alert(result(firstNumb, secondNumb));
}

function result(x, y) {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
} // function expression
// let result = function(x, y) {
//   if (x < y) {
//     return -1;
//   } else if (x > y) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// arrow function
// let result = (x, y) => {
//   if (x < y) {
//     return -1;
//   } else if (x > y) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
//TASK 2
//Написать функцию, которая вычисляет факториал переданного ей числа.


var tsk2Btn = document.querySelector('#l26-tsk2-btn');
tsk2Btn.addEventListener('click', runL26Tsk2);

function runL26Tsk2() {
  var numb = prompt('Enter a number');
  alert(factorial(numb));
}

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
} //TASK 3
//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.


var tsk3Btn = document.querySelector('#l26-tsk3-btn');
tsk3Btn.addEventListener('click', runL26Tsk3);

function runL26Tsk3() {
  var numb1 = prompt('Enter first number');
  var numb2 = prompt('Enter second number');
  var numb3 = prompt('Enter third number');
  alert(concatNumb(numb1, numb2, numb3));
}

function concatNumb(a, b, c) {
  return a + b + c;
} //TASK 4
//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


var tsk4Btn = document.querySelector('#l26-tsk4-btn');
tsk4Btn.addEventListener('click', runL26Tsk4);

function runL26Tsk4() {
  showCalcOutput();
}

function showCalcOutput() {
  var length = +prompt('Enter the length of a rectangle');
  var width = +prompt('Enter the width (leave blank in case of a square');

  if (width === 0) {
    alert("Area of the square is: ".concat(calcArea(length, width)));
  } else {
    alert("Area of the rectangle is: ".concat(calcArea(length, width)));
  }
}

function calcArea(a, b) {
  if (b === 0) {
    return a * a;
  } else {
    return a * b;
  }
} //TASK 5
//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.


var tsk5Btn = document.querySelector('#l26-tsk5-btn');
tsk5Btn.addEventListener('click', runL26Tsk5);

function runL26Tsk5() {
  var numb = +prompt("Let's check whether the number is a perfect one");
  checkPerfectNumb(numb);
  alert("Open Console to see the output");
}

function checkPerfectNumb(x) {
  var sum = 0;

  for (var i = 1; i < x; i++) {
    if (x % i == 0) {
      sum += i;
    }
  }

  if (sum == x) {
    console.log("".concat(x, " is a perfect number"));
  } else {
    console.log("".concat(x, " is not a perfect number"));
  }
} //TASK 6
//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.


var tsk6Btn = document.querySelector('#l26-tsk6-btn');
tsk6Btn.addEventListener('click', runL26Tsk6);

function runL26Tsk6() {
  rangeBegin = +prompt('Enter the beginning number for the range to find perfect numbers');
  rangeEnd = +prompt('Enter the ending number for the range to find perfect numbers');
  checkPerfectNumbInRange(rangeBegin, rangeEnd);
}

function checkPerfectNumbInRange(a, b) {
  for (var j = a; j <= b; j++) {
    var sum = 0;

    for (var i = 1; i < j; i++) {
      if (j % i == 0) {
        sum += i;
      }
    }

    if (sum == j) {
      console.log(j);
    }
  }

  alert("Open Console to see all perfect numbers between ".concat(rangeBegin, " and ").concat(rangeEnd));
} //TASK 7
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.


var tsk7Btn = document.querySelector('#l26-tsk7-btn');
tsk7Btn.addEventListener('click', runL26Tsk7);

function runL26Tsk7() {
  var h = prompt('Enter hours');
  var m = prompt('Enter minutes');
  var s = prompt('Enter seconds');

  if (h.length == 1) {
    h = '0' + h;
  }

  if (m == '') {
    m = '00';
  }

  if (s == '') {
    s = '00';
  }

  alert("".concat(h, ":").concat(m, ":").concat(s));
} //TASK 8
//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.


var tsk8Btn = document.querySelector('#l26-tsk8-btn');
tsk8Btn.addEventListener('click', runL26Tsk8);

function runL26Tsk8() {
  var h = +prompt('Enter hours');
  var m = +prompt('Enter minutes');
  var s = +prompt('Enter seconds');
  calcTimeInSecs(h, m, s);
  showCalcTimeInSec();

  function calcTimeInSecs(a, b, c) {
    a = a * 3600;
    b = b * 60;
    return a + b + c;
  }

  function showCalcTimeInSec() {
    alert("".concat(h, "h:").concat(m, "m:").concat(s, "s is ").concat(calcTimeInSecs(h, m, s), " seconds"));
  }
} //TASK 9
//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».


var tsk9Btn = document.querySelector('#l26-tsk9-btn');
tsk9Btn.addEventListener('click', runL26Tsk9);

function runL26Tsk9() {
  var sec = +prompt('Enter seconds');
  calcTimeInFull(sec);
  showTimeInFull();

  function calcTimeInFull(time) {
    var h = Math.floor(time / 60 / 60);
    var m = Math.floor(time / 60) % 60;
    var s = Math.floor(time - m * 60) % 60;
    return "".concat(h, "h:").concat(m, "m:").concat(s, "s");
  }

  function showTimeInFull() {
    alert("".concat(sec, " seconds are ").concat(calcTimeInFull(sec)));
  }
} //TASK 10
//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»


var tsk10Btn = document.querySelector('#l26-tsk10-btn');
tsk10Btn.addEventListener('click', runL26Tsk10);

function runL26Tsk10() {
  var h1 = +prompt('Enter hours');
  var m1 = +prompt('Enter minutes');
  var s1 = +prompt('Enter seconds');
  var h2 = +prompt('Enter hours');
  var m2 = +prompt('Enter minutes');
  var s2 = +prompt('Enter seconds');
  showTimeDiff(h1, m1, s1, h2, m2, s2);

  function showTimeDiff(a, b, c, d, e, f) {
    a = a * 3600;
    b = b * 60;
    var time1 = a + b + c;
    d = d * 3600;
    e = e * 60;
    var time2 = d + e + f;
    var timeDiffInSec = time2 - time1;
    var h = Math.floor(timeDiffInSec / 60 / 60);
    var m = Math.floor(timeDiffInSec / 60) % 60;
    var s = Math.floor(timeDiffInSec - m * 60) % 60;
    alert("The difference is ".concat(h, "h:").concat(m, "m:").concat(s, "s"));
  }
}

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _js_l24_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/l24.js */ "./js/l24.js");
/* harmony import */ var _js_l24_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_l24_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_l25_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/l25.js */ "./js/l25.js");
/* harmony import */ var _js_l25_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_l25_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_l26_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/l26.js */ "./js/l26.js");
/* harmony import */ var _js_l26_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_l26_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map