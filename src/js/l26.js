// TASK 1
//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

const tsk1Btn = document.querySelector('#l26-tsk1-btn');

tsk1Btn.addEventListener('click', runL26Tsk1);

function runL26Tsk1() {
  const firstNumb = prompt('Enter first number');
  const secondNumb = prompt('Enter second number');

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
}
// function expression
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

const tsk2Btn = document.querySelector('#l26-tsk2-btn');

tsk2Btn.addEventListener('click', runL26Tsk2);

function runL26Tsk2() {
  const numb = prompt('Enter a number');

  alert(factorial(numb));
}

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

//TASK 3
//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

const tsk3Btn = document.querySelector('#l26-tsk3-btn');

tsk3Btn.addEventListener('click', runL26Tsk3);

function runL26Tsk3() {
  const numb1 = prompt('Enter first number');
  const numb2 = prompt('Enter second number');
  const numb3 = prompt('Enter third number');

  alert(concatNumb(numb1, numb2, numb3));
}

function concatNumb(a, b, c) {
  return a + b + c;
}

//TASK 4
//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

const tsk4Btn = document.querySelector('#l26-tsk4-btn');

tsk4Btn.addEventListener('click', runL26Tsk4);

function runL26Tsk4() {
  showCalcOutput();
}

function showCalcOutput() {
  const length = +prompt('Enter the length of a rectangle');
  const width = +prompt('Enter the width (leave blank in case of a square');
  if (width === 0) {
    alert(`Area of the square is: ${calcArea(length, width)}`);
  } else {
    alert(`Area of the rectangle is: ${calcArea(length, width)}`);
  }
}

function calcArea(a, b) {
  if (b === 0) {
    return a * a;
  } else {
    return a * b;
  }
}

//TASK 5
//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

const tsk5Btn = document.querySelector('#l26-tsk5-btn');

tsk5Btn.addEventListener('click', runL26Tsk5);

function runL26Tsk5() {
  const numb = +prompt(`Let's check whether the number is a perfect one`);
  checkPerfectNumb(numb);
  alert(`Open Console to see the output`);
}

function checkPerfectNumb(x) {
  let sum = 0;
  for (let i = 1; i < x; i++) {
    if (x % i == 0) {
      sum += i;
    }
  }
  if (sum == x) {
    console.log(`${x} is a perfect number`);
  } else {
    console.log(`${x} is not a perfect number`);
  }
}

//TASK 6
//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

const tsk6Btn = document.querySelector('#l26-tsk6-btn');

tsk6Btn.addEventListener('click', runL26Tsk6);

function runL26Tsk6() {
  rangeBegin = +prompt(
    'Enter the beginning number for the range to find perfect numbers',
  );
  rangeEnd = +prompt(
    'Enter the ending number for the range to find perfect numbers',
  );

  checkPerfectNumbInRange(rangeBegin, rangeEnd);
}

function checkPerfectNumbInRange(a, b) {
  for (let j = a; j <= b; j++) {
    let sum = 0;
    for (let i = 1; i < j; i++) {
      if (j % i == 0) {
        sum += i;
      }
    }
    if (sum == j) {
      console.log(j);
    }
  }

  alert(
    `Open Console to see all perfect numbers between ${rangeBegin} and ${rangeEnd}`,
  );
}

//TASK 7
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

const tsk7Btn = document.querySelector('#l26-tsk7-btn');

tsk7Btn.addEventListener('click', runL26Tsk7);

function runL26Tsk7() {
  let h = prompt('Enter hours');
  let m = prompt('Enter minutes');
  let s = prompt('Enter seconds');

  if (h.length == 1) {
    h = '0' + h;
  }
  if (m == '') {
    m = '00';
  }
  if (s == '') {
    s = '00';
  }

  alert(`${h}:${m}:${s}`);
}

//TASK 8
//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

const tsk8Btn = document.querySelector('#l26-tsk8-btn');

tsk8Btn.addEventListener('click', runL26Tsk8);

function runL26Tsk8() {
  const h = +prompt('Enter hours');
  const m = +prompt('Enter minutes');
  const s = +prompt('Enter seconds');

  calcTimeInSecs(h, m, s);
  showCalcTimeInSec();

  function calcTimeInSecs(a, b, c) {
    a = a * 3600;
    b = b * 60;
    return a + b + c;
  }

  function showCalcTimeInSec() {
    alert(`${h}h:${m}m:${s}s is ${calcTimeInSecs(h, m, s)} seconds`);
  }
}

//TASK 9
//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

const tsk9Btn = document.querySelector('#l26-tsk9-btn');

tsk9Btn.addEventListener('click', runL26Tsk9);

function runL26Tsk9() {
  let sec = +prompt('Enter seconds');

  calcTimeInFull(sec);
  showTimeInFull();

  function calcTimeInFull(time) {
    let h = Math.floor(time / 60 / 60);
    let m = Math.floor(time / 60) % 60;
    let s = Math.floor(time - m * 60) % 60;
    return `${h}h:${m}m:${s}s`;
  }

  function showTimeInFull() {
    alert(`${sec} seconds are ${calcTimeInFull(sec)}`);
  }
}

//TASK 10
//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

const tsk10Btn = document.querySelector('#l26-tsk10-btn');

tsk10Btn.addEventListener('click', runL26Tsk10);

function runL26Tsk10() {
  const h1 = +prompt('Enter hours');
  const m1 = +prompt('Enter minutes');
  const s1 = +prompt('Enter seconds');
  const h2 = +prompt('Enter hours');
  const m2 = +prompt('Enter minutes');
  const s2 = +prompt('Enter seconds');

  showTimeDiff(h1, m1, s1, h2, m2, s2);

  function showTimeDiff(a, b, c, d, e, f) {
    a = a * 3600;
    b = b * 60;
    let time1 = a + b + c;
    d = d * 3600;
    e = e * 60;
    let time2 = d + e + f;

    let timeDiffInSec = time2 - time1;

    let h = Math.floor(timeDiffInSec / 60 / 60);
    let m = Math.floor(timeDiffInSec / 60) % 60;
    let s = Math.floor(timeDiffInSec - m * 60) % 60;

    alert(`The difference is ${h}h:${m}m:${s}s`);
  }
}
