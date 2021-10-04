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

/***/ "./js/l27.js":
/*!*******************!*\
  !*** ./js/l27.js ***!
  \*******************/
/***/ (function() {

// TASK 1
//Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом: Функция для вывода на экран информации об автомобиле; Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
var tsk1Btn = document.querySelector('#l27-tsk1-btn');
tsk1Btn.addEventListener('click', runL27Tsk1);

function runL27Tsk1() {
  var vehicle = {
    manufacturer: 'Porsche',
    model: '911 Turbo',
    produced: '2020',
    averageSpeed: '100'
  };
  console.log(showVehicleInfo());
  console.log(calcTime() + ' hours');
  alert('Open Console to see the result');

  function showVehicleInfo() {
    for (var key in vehicle) {
      console.log(key + ': ' + vehicle[key]);
    }
  }

  function calcTime() {
    var distance = prompt('Enter the distance in km', 'e.g. 100');
    var time = distance / vehicle.averageSpeed;
    var pitStop = time / 4;
    return Math.ceil(time + pitStop);
  }
} //TASK 2
//Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: Функция сложения 2-х объектов-дробей; Функция вычитания 2-х объектов-дробей; Функция умножения 2-х объектов-дробей; Функция деления 2-х объектов-дробей; Функция сокращения объекта-дроби.


var tsk2Btn = document.querySelector('#l27-tsk2-btn');
tsk2Btn.addEventListener('click', runL27Tsk2);

function runL27Tsk2() {
  var fraction1 = {
    numerator: '',
    denominator: ''
  };
  var fraction2 = {
    numerator: '',
    denominator: ''
  };
  fraction1.numerator = prompt('Enter a numerator of the first fraction');
  fraction1.denominator = prompt('Enter a denominator of the first fraction');
  fraction2.numerator = prompt('Enter a numerator of the second fraction');
  fraction2.denominator = prompt('Enter a denominator of the second fraction');

  var gcd = function gcd(a, b) {
    if (a == 0) {
      return b;
    }

    return gcd(b % a, a);
  };

  function addFractions(obj1, obj2) {
    var numResult = obj1.numerator * obj2.denominator + obj2.numerator * obj1.denominator;
    var denomResult = (obj1.denominator * obj2.denominator + obj2.denominator * obj1.denominator) / 2;
    var gcdResult = gcd(numResult, denomResult);
    numResult = numResult / gcdResult;
    denomResult = denomResult / gcdResult;
    return numResult + '/' + denomResult;
  }

  function subtractFractions(obj1, obj2) {
    var numResult = obj1.numerator * obj2.denominator - obj2.numerator * obj1.denominator;
    var denomResult = (obj1.denominator * obj2.denominator + obj2.denominator * obj1.denominator) / 2;
    var gcdResult = gcd(numResult, denomResult);
    numResult = numResult / gcdResult;
    denomResult = denomResult / gcdResult;
    return numResult + '/' + denomResult;
  }

  function multiplyFractions(obj1, obj2) {
    var numResult = obj1.numerator * obj2.numerator;
    var denomResult = obj1.denominator * obj2.denominator;
    var gcdResult = gcd(numResult, denomResult);
    numResult = numResult / gcdResult;
    denomResult = denomResult / gcdResult;
    return numResult + '/' + denomResult;
  }

  function divideFractions(obj1, obj2) {
    var numResult = obj1.numerator * obj2.denominator;
    var denomResult = obj2.numerator * obj1.denominator;
    var gcdResult = gcd(numResult, denomResult);
    numResult = numResult / gcdResult;
    denomResult = denomResult / gcdResult;
    return numResult + '/' + denomResult;
  }

  var addition = addFractions(fraction1, fraction2);
  var subtraction = subtractFractions(fraction1, fraction2);
  var multiplication = multiplyFractions(fraction1, fraction2);
  var division = divideFractions(fraction1, fraction2);
  alert("".concat(fraction1.numerator, "/").concat(fraction1.denominator, " + ").concat(fraction2.numerator, "/").concat(fraction2.denominator, " = ").concat(addition));
  alert("".concat(fraction1.numerator, "/").concat(fraction1.denominator, " - ").concat(fraction2.numerator, "/").concat(fraction2.denominator, " = ").concat(subtraction));
  alert("".concat(fraction1.numerator, "/").concat(fraction1.denominator, " * ").concat(fraction2.numerator, "/").concat(fraction2.denominator, " = ").concat(multiplication));
  alert("".concat(fraction1.numerator, "/").concat(fraction1.denominator, " / ").concat(fraction2.numerator, "/").concat(fraction2.denominator, " = ").concat(division));
} //TASK 3
//Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: Функция вывода времени на экран; Функция изменения времени на переданное количество секунд; Функция изменения времени на переданное количество минут; Функция изменения времени на переданное количество часов. Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».


var tsk3Btn = document.querySelector('#l27-tsk3-btn');
tsk3Btn.addEventListener('click', runL27Tsk3);

function runL27Tsk3() {
  var time = {
    h: '',
    m: '',
    s: ''
  };
  showTime();
  changeTimeWithSeconds();
  changeTimeWithMinutes();
  changeTimeWithHours();

  function formatHoursOutput(h) {
    if (h >= 24) {
      h = '0' + (h - 24);
    }

    if (h <= 9) {
      h = '0' + h;
    }

    return h;
  }

  function formatMinutesOutput(m) {
    if (m >= 60) {
      m = '0' + (m - 60);
    }

    if (m <= 9) {
      m = '0' + m;
    }

    return m;
  }

  function formatSecondsOutput(s) {
    if (s >= 60) {
      s = '0' + (s - 60);
    }

    if (s <= 9) {
      s = '0' + s;
    }

    return s;
  }

  function showTime() {
    time.h = new Date().getHours();
    time.m = new Date().getMinutes();
    time.s = new Date().getSeconds();
    var h = time.h;
    var m = time.m;
    var s = time.s;
    h = formatHoursOutput(h);
    m = formatMinutesOutput(m);
    s = formatSecondsOutput(s);
    alert("Now is ".concat(h, ":").concat(m, ":").concat(s));
  }

  function changeTimeWithSeconds() {
    var timeshift = +prompt('Enter a number of seconds to shift time');
    var h = time.h * 3600;
    var m = time.m * 60;
    var s = time.s;
    var timeNowInSeconds = h + m + s;
    var timeResult = timeNowInSeconds + timeshift;
    h = Math.floor(timeResult / 3600);
    m = Math.floor(timeResult / 60) % 60;
    s = Math.floor(timeResult - m * 60) % 60;
    h = formatHoursOutput(h);
    m = formatMinutesOutput(m);
    s = formatSecondsOutput(s);
    alert("Time is changed for: ".concat(h, ":").concat(m, ":").concat(s));
  }

  function changeTimeWithMinutes() {
    var timeshift = +prompt('Enter a number of minutes to shift time');
    var h = time.h * 60;
    var m = time.m;
    var s = time.s / 60;
    var timeNowInMinutes = h + m + s;
    var timeResult = timeNowInMinutes + timeshift;
    h = Math.floor(timeResult / 60);
    m = Math.floor(timeResult % 60);
    s = Math.floor(timeResult * 60) % 60;
    h = formatHoursOutput(h);
    m = formatMinutesOutput(m);
    s = formatSecondsOutput(s);
    alert("Time is changed for: ".concat(h, ":").concat(m, ":").concat(s));
  }

  function changeTimeWithHours() {
    var timeshift = +prompt('Enter a number of hours to shift time');
    var h = time.h;
    var m = time.m;
    var s = time.s;
    var timeNowInHours = h;
    var timeResult = timeNowInHours + timeshift;
    h = timeResult;
    h = formatHoursOutput(h);
    m = formatMinutesOutput(m);
    s = formatSecondsOutput(s);
    alert("Time is changed for: ".concat(h, ":").concat(m, ":").concat(s));
  }
}

/***/ }),

/***/ "./js/l28.js":
/*!*******************!*\
  !*** ./js/l28.js ***!
  \*******************/
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// TASK 1
//Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
var tsk1Btn = document.querySelector('#l28-tsk1-btn');
tsk1Btn.addEventListener('click', runL28Tsk1);

function runL28Tsk1() {
  var shoppingList = [{
    name: 'laptop',
    quantity: 1,
    purchased: true
  }, {
    name: 'monitor',
    quantity: 3,
    purchased: false
  }, {
    name: 'Ext. SSD',
    quantity: 2,
    purchased: true
  }, {
    name: 'I/O devices',
    quantity: 1,
    purchased: false
  }];
  showShoppingList();
  addShoppingListItem();
  showShoppingList();
  var name = prompt('Please add purchased item');
  markItemAsPurchased(name);
  alert('Open Console to see the output');

  function showShoppingList() {
    var itemsToBuyArray = shoppingList.filter(function (item) {
      return item.purchased == false;
    });
    var purchasedItemsArray = shoppingList.filter(function (item) {
      return item.purchased == true;
    });
    var fullShoppingListArray = itemsToBuyArray.concat(purchasedItemsArray);
    console.log('----------> shopping list <----------');

    var _iterator = _createForOfIteratorHelper(fullShoppingListArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (item.purchased == true) {
          console.log(item.name + ': ' + item.quantity + ' - DONE!');
        } else {
          console.log(item.name + ': ' + item.quantity + ' - TO BUY');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  function updateShoppingList(item) {
    var itemInList = shoppingList.find(function (e) {
      return e.name === item.name;
    });

    if (itemInList !== undefined) {
      itemInList.quantity += item.quantity;
    } else {
      shoppingList.push(item);
    }
  }

  function addShoppingListItem() {
    var newShoppingListItem = {};
    newShoppingListItem.name = prompt('Enter a name of an item you wanna add to the shopping list:');
    newShoppingListItem.quantity = +prompt('Enter the quantity of the item:');
    var isPurchased = prompt('Is it purchased already? (yes/no)');

    if (isPurchased === 'yes') {
      newShoppingListItem.purchased = true;
    } else {
      newShoppingListItem.purchased = false;
    }

    updateShoppingList(newShoppingListItem);
  }

  function markItemAsPurchased(name) {
    var itemInList = shoppingList.find(function (e) {
      return e.name === name;
    });

    if (itemInList !== undefined) {
      itemInList.purchased = true;
      showShoppingList();
    } else {
      console.log('Are you sure you have added this item before?');
    }
  }
} //TASK 2
//Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.


var tsk2Btn = document.querySelector('#l28-tsk2-btn');
tsk2Btn.addEventListener('click', runL28Tsk2);

function runL28Tsk2() {
  var invoice = [];

  do {
    addItemsToInvoice();
  } while (confirm('Wanna add one more?'));

  printInvoice();

  function addItemsToInvoice() {
    var invoiceItem = {};
    invoiceItem.name = prompt('Enter a name of an item you wanna add to the invoice:');
    invoiceItem.quantity = +prompt('Enter the quantity of the item:');
    invoiceItem.price = +prompt('Enter the price of the item:');
    invoiceItem.price = calcItemPrice(invoiceItem.quantity, invoiceItem.price);
    invoice.push(invoiceItem);
  }

  function printInvoice() {
    for (var _i = 0, _invoice = invoice; _i < _invoice.length; _i++) {
      var item = _invoice[_i];

      if (item.name === null) {
        console.log('No items to put on the invoice');
      } else {
        console.log('ITEM: ' + item.name + ' ---> QYT: ' + item.quantity + ' ---> PRICE: ' + item.price);
      }
    }

    calcTotalSum();
    showMostExpensiveItem();
    calcAverageCost();
  }

  function calcItemPrice(q, p) {
    p = p * q;
    return p;
  }

  function calcTotalSum() {
    var pricesArray = [];

    for (var _i2 = 0, _invoice2 = invoice; _i2 < _invoice2.length; _i2++) {
      var item = _invoice2[_i2];
      pricesArray.push(item.price);
    }

    var totalSum = pricesArray.reduce(function (sum, current) {
      return sum + current;
    });
    console.log('---------- TOTAL SUM IS: ' + totalSum + ' ----------'); // способа которай учытэля показал для подсчёта суммы
    // let sum = 0;
    // invoice.forEach(function (e) {
    //   sum += e.price;
    // });
  }

  function showMostExpensiveItem() {
    invoice.sort(function (a, b) {
      return a.price > b.price ? 1 : -1;
    });
    var mostExpensiveItem = invoice[invoice.length - 1];
    var mostExpensiveName = mostExpensiveItem.name;
    var mostExpensivePrice = mostExpensiveItem.price;
    console.log('---> Most expensive is: ' + mostExpensiveName + ' (' + mostExpensivePrice + ')');
  }

  function calcAverageCost() {
    var totalSum = 0;
    var itemsNumber = 0;
    var averageCost = 0;
    invoice.forEach(function (e) {
      totalSum += e.price;
    });
    itemsNumber = invoice.length;
    averageCost = totalSum / itemsNumber;
    console.log('---> Average cost of an item is: ' + averageCost);
  }
} //TASK 3
//Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.


var tsk3Btn = document.querySelector('#l28-tsk3-btn');
tsk3Btn.addEventListener('click', runL28Tsk3);

function runL28Tsk3() {
  var cssStyles = [{
    name: 'color',
    value: '#000'
  }, {
    name: 'font-size',
    value: '3rem'
  }, {
    name: 'text-align',
    value: 'center'
  }, {
    name: 'font-family',
    value: 'Verdana'
  }, {
    name: 'text-weight',
    value: 'regular'
  }, {
    name: 'text-transform',
    value: 'uppercase'
  }];
  var enteredText = prompt('Enter any text you wanna display');
  outputEnteredText(enteredText, cssStyles);

  function outputEnteredText(text, styles) {
    var stylesString = styles.map(function (e) {
      return "".concat(e.name, ": ").concat(e.value);
    });
    document.write("<p style=\"".concat(stylesString.join(';'), "\">").concat(text, "</p>"));
  } // const outputEnteredText = (text, styles) => {
  //   document.write(
  //     `<p style="${styles
  //       .map(s => `${s.name}:${s.value}`)
  //       .join(';')}">${text}</p>`,
  //   );
  // };

} //TASK 4
//Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).


var tsk4Btn = document.querySelector('#l28-tsk4-btn');
tsk4Btn.addEventListener('click', runL28Tsk4);

function runL28Tsk4() {
  var academyClassrooms = [{
    name: 'black',
    seats: 20,
    dept: 'linguistics'
  }, {
    name: 'white',
    seats: 15,
    dept: 'math'
  }, {
    name: 'red',
    seats: 10,
    dept: 'physics'
  }, {
    name: 'blue',
    seats: 15,
    dept: 'linguistics'
  }, {
    name: 'yellow',
    seats: 10,
    dept: 'math'
  }, {
    name: 'orange',
    seats: 20,
    dept: 'physics'
  }];
  showAllClassrooms();
  showFilteredClassrooms();
  searchForClassroom();
  sortClassroomsAccordingSeats();
  sortClassroomsAccordingNames();

  function showAllClassrooms() {
    console.log('All classrooms available:');
    academyClassrooms.forEach(function (e) {
      console.log("Classroom: ".concat(e.name.toUpperCase(), " --- Number of seats: ").concat(e.seats, " --- Department: ").concat(e.dept.toUpperCase()));
    });
    console.log('--- --- --- --- ---');
  }

  function showFilteredClassrooms() {
    var chosenClassroom = prompt('Choose the department you want to see the classrooms alocated for, enter "1" for Linguistics, "2" for Math, "3" for Physics');

    switch (chosenClassroom) {
      case '1':
        chosenClassroom = 'linguistics';
        break;

      case '2':
        chosenClassroom = 'math';
        break;

      case '3':
        chosenClassroom = 'physics';
        break;
    }

    var filteredRooms = academyClassrooms.filter(function (room) {
      return room.dept == chosenClassroom;
    });
    console.log("Classroom alocated for ".concat(chosenClassroom.toUpperCase(), " department:"));
    filteredRooms.forEach(function (e) {
      console.log("".concat(e.name.toUpperCase(), " with max seat ").concat(e.seats));
    });
    console.log('--- --- --- --- ---');
  }

  function searchForClassroom() {
    var group = {};
    group.name = prompt('Enter a name for your group');
    group.numb = +prompt('Enter the number of people');
    var dept = prompt('Choose the department, enter "1" for Linguistics, "2" for Math, "3" for Physics');

    switch (dept) {
      case '1':
        group.dept = 'linguistics';
        break;

      case '2':
        group.dept = 'math';
        break;

      case '3':
        group.dept = 'physics';
        break;
    }

    console.log("The group ".concat(group.name.toUpperCase(), " fits here:"));
    academyClassrooms.forEach(function (e) {
      if (e.seats >= group.numb && e.dept == group.dept) {
        console.log("".concat(e.name.toUpperCase(), " classroom for ").concat(e.dept, " department (max ").concat(e.seats, " seats)"));
      }
    });
    alert('Open Console to see the output');
    console.log('--- --- --- --- ---');
  }

  function sortClassroomsAccordingSeats() {
    var sortedClassrooms = academyClassrooms.sort(function (a, b) {
      return a.seats > b.seats ? 1 : -1;
    });
    console.log('All classrooms sorted according to max seats number:');
    sortedClassrooms.forEach(function (e) {
      console.log("Classroom: ".concat(e.name.toUpperCase(), " --- Number of seats: ").concat(e.seats, " --- Department: ").concat(e.dept.toUpperCase()));
    });
    console.log('--- --- --- --- ---');
  }

  function sortClassroomsAccordingNames() {
    var sortedClassrooms = academyClassrooms.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    console.log('All classrooms sorted according to their names:');
    sortedClassrooms.forEach(function (e) {
      console.log("Classroom: ".concat(e.name.toUpperCase(), " --- Number of seats: ").concat(e.seats, " --- Department: ").concat(e.dept.toUpperCase()));
    });
    console.log('--- --- --- --- ---');
  }
}

/***/ }),

/***/ "./js/l29.js":
/*!*******************!*\
  !*** ./js/l29.js ***!
  \*******************/
/***/ (function() {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TASK 1
//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.
var tsk1Btn = document.querySelector('#l29-tsk1-btn');
tsk1Btn.addEventListener('click', runL29Tsk1);

function runL29Tsk1() {
  var Circle = /*#__PURE__*/function () {
    function Circle(value) {
      _classCallCheck(this, Circle);

      this.radius = value;
    }

    _createClass(Circle, [{
      key: "circleRadius",
      get: function get() {
        return this.radius;
      },
      set: function set(value) {
        this.radius = value;
      }
    }, {
      key: "circleDiameter",
      get: function get() {
        return this.diameter;
      }
    }, {
      key: "calcCircleArea",
      value: function calcCircleArea() {
        var a = Math.PI * Math.sqrt(this.radius);
        return a;
      }
    }, {
      key: "calcCircleCircumference",
      value: function calcCircleCircumference() {
        var c = 2 * Math.PI * this.radius;
        return c;
      }
    }]);

    return Circle;
  }();

  var newCircle = new Circle(3);
  console.log('Initially created object with passed radius property:');
  console.log(newCircle);
  newCircle.radius = 4;
  console.log('Passed a new value of a radius with setter:');
  console.log(newCircle);
  newCircle.diameter = Math.sqrt(newCircle.radius);
  console.log('Passed a new property of a diameter with setter:');
  console.log(newCircle);
  console.log('Circle area (after new radius passed) is: ' + newCircle.calcCircleArea().toFixed(1));
  console.log('Circle circumference (after new radius passed) is: ' + newCircle.calcCircleCircumference().toFixed(1));
} //TASK 2
//Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.


var tsk2Btn = document.querySelector('#l29-tsk2-btn');
tsk2Btn.addEventListener('click', runL29Tsk2);

function runL29Tsk2() {
  var Marker = /*#__PURE__*/function () {
    function Marker(color, inkLevel) {
      _classCallCheck(this, Marker);

      this.color = color;
      this.inkLevel = inkLevel;
    }

    _createClass(Marker, [{
      key: "highlight",
      value: function highlight(text) {
        var newDiv = document.createElement('div');
        var elContainer = document.querySelector('.main__l29-container').appendChild(newDiv);

        for (var i = 0; i < text.length; i++) {
          if (this.inkLevel != 0) {
            if (text[i] == ' ') {
              this.inkLevel += 0.5;
            }

            newDiv.innerHTML += text[i];
            newDiv.style.color = this.color;
            newDiv.style.marginTop = '25px';
            newDiv.style.fontSize = '1.5rem';
            this.inkLevel -= 0.5;
          } else {
            newDiv.innerHTML = 'Marker is empty';
            newDiv.style.color = 'hsl(9, 100%, 67%)';
            newDiv.style.marginTop = '25px';
            newDiv.style.fontSize = '1.5rem';
          }
        }
      }
    }]);

    return Marker;
  }();

  var RechargedMarker = /*#__PURE__*/function (_Marker) {
    _inherits(RechargedMarker, _Marker);

    var _super = _createSuper(RechargedMarker);

    function RechargedMarker() {
      _classCallCheck(this, RechargedMarker);

      return _super.apply(this, arguments);
    }

    _createClass(RechargedMarker, [{
      key: "recharge",
      value: function recharge(inkLevel) {
        if (inkLevel > 100) {
          inkLevel = 100;
        } else {
          this.inkLevel += inkLevel;
        }
      }
    }]);

    return RechargedMarker;
  }(Marker);

  var marker1 = new Marker('hsl(44, 100%, 69%)', 100);
  var marker2 = new RechargedMarker('hsl(44, 100%, 69%)', 50);
  marker2.recharge(0);
  var input = '“The proper function of man is to live, not to exist. I shall not waste my days in trying to prolong them. I shall use my time.” ― Jack London';
  marker1.highlight(input);
  marker2.highlight(input);
  console.log(marker1);
  console.log(marker2);
} //TASK 3
//Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().


var tsk3Btn = document.querySelector('#l29-tsk3-btn');
tsk3Btn.addEventListener('click', runL29Tsk3);

function runL29Tsk3() {
  var container = document.querySelector('.main__l29-container');
  var tableDiv = document.createElement('div');
  tableDiv.setAttribute('id', 'tableDiv');
  tableDiv.setAttribute('style', 'margin-top: 25px');
  tableDiv.className = 'tableDiv';
  var tableTag = document.createElement('table');
  tableTag.setAttribute('id', 'table');
  tableTag.className = 'table';
  tableDiv.append(tableTag);
  container.append(tableDiv);

  var Employee = function Employee(name, position, department) {
    _classCallCheck(this, Employee);

    this.name = name;
    this.position = position;
    this.department = department;
  };

  var bankEmpArray = [new Employee('Ruslan Ku', 'Dev', 'Top'), new Employee('Igor Chief', 'Cool', 'Main'), new Employee('Igor Chef', 'Middle', 'Nah'), new Employee('Spongebob Squarepants', 'Yeap', 'Deep'), new Employee('Patrick Star', 'Rock', 'Deep')];

  var bankEmpTable = /*#__PURE__*/function () {
    function bankEmpTable(array) {
      _classCallCheck(this, bankEmpTable);

      this.bankEmpArray = array;
    }

    _createClass(bankEmpTable, [{
      key: "getHtml",
      value: function getHtml() {
        var table = document.getElementById('table');
        var array = this.bankEmpArray;
        var head = document.createElement('tr');
        head.setAttribute('style', 'font-size: 1.3rem; color: hsl(9, 100%, 67%)');
        var th1 = document.createElement('th');
        th1.textContent = 'Name';
        var th2 = document.createElement('th');
        th2.textContent = 'Position';
        var th3 = document.createElement('th');
        th3.textContent = 'Department';
        head.append(th1);
        head.append(th2);
        head.append(th3);
        table.append(head);

        for (var i in array) {
          var tr = document.createElement('tr');
          table.append(tr);

          for (var j in array[i]) {
            var td = document.createElement('td');
            td.textContent = array[i][j];
            tr.append(td);
            td.setAttribute('style', 'font-size: 1.3rem; color: hsl(44, 100%, 69%)');
          }
        }

        table.setAttribute('border', '5');
        table.setAttribute('bordercolor', 'white');
        table.setAttribute('width', '50%');
        table.setAttribute('style', 'margin: auto; ');
      }
    }]);

    return bankEmpTable;
  }();

  var empTable = new bankEmpTable(bankEmpArray);
  empTable.getHtml();
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
/* harmony import */ var _js_l27_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/l27.js */ "./js/l27.js");
/* harmony import */ var _js_l27_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_l27_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_l28_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/l28.js */ "./js/l28.js");
/* harmony import */ var _js_l28_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_l28_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_l29_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/l29.js */ "./js/l29.js");
/* harmony import */ var _js_l29_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_l29_js__WEBPACK_IMPORTED_MODULE_6__);








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