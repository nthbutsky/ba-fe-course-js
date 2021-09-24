// TASK 1
// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

const tsk1Btn = document.querySelector('#l25-tsk1-btn');

tsk1Btn.addEventListener('click', runL25Tsk1);

function runL25Tsk1() {
  let firstNumb = +prompt('Enter first number!', 'First number');
  let secondNumb = +prompt('Enter second number!', 'Second number');
  let sum = 0;
  const firstNumbVar = firstNumb;

  while (firstNumb <= secondNumb) {
    sum += firstNumb;
    firstNumb++;
  }
  alert(
    `The sum of all numbers beetween ${firstNumbVar} and ${secondNumb} is ${sum}`,
  );
}

//TASK 2
// Запросить 2 числа и найти только наибольший общий делитель.

const tsk2Btn = document.querySelector('#l25-tsk2-btn');

tsk2Btn.addEventListener('click', runL25Tsk2);

function runL25Tsk2() {
  let numb1 = +prompt('Enter first number!', 'First number');
  let numb2 = +prompt('Enter second number!', 'Second number');

  while (numb2) {
    let temp = numb2;
    numb2 = numb1 % numb2;
    numb1 = temp;
  }

  alert(`GCD is ${numb1}`);
}

// //second variant

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

const tsk3Btn = document.querySelector('#l25-tsk3-btn');

tsk3Btn.addEventListener('click', runL25Tsk3);

function runL25Tsk3() {
  let numb = +prompt('Enter number!', 'Number');
  let temp = numb;

  console.log(`All devisors of ${numb} are:`);
  while (numb > 0) {
    if (temp % numb === 0) {
      console.log(numb);
    }
    numb--;
  }
  alert('Open Console to see the result!');
}

//TASK 4
//Определить количество цифр в введенном числе.

const tsk4Btn = document.querySelector('#l25-tsk4-btn');

tsk4Btn.addEventListener('click', runL25Tsk4);

function runL25Tsk4() {
  let numb = prompt('Enter number!', 'Number');
  let counter = 0;

  for (let i = 0; i < numb.length; i++) {
    counter++;
  }
  alert(`The number you entered consists of ${counter} symbols`);
}

//TASK 5
//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

const tsk5Btn = document.querySelector('#l25-tsk5-btn');

tsk5Btn.addEventListener('click', runL25Tsk5);

function runL25Tsk5() {
  let numbPos = 0;
  let numbNeg = 0;
  let numbZero = 0;
  let numbEven = 0;
  let numbOdd = 0;

  for (let i = 0; i < 10; i++) {
    let numb = prompt(
      'Please enter 10 numbers, but only one at a time!',
      'One number at a time!',
    );
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
  alert(
    `You have entered ${numbPos} positive numbs; ${numbNeg} negative numbs; ${numbZero} zeros; ${numbEven} even numbs; ${numbOdd} odd numbs`,
  );
}

//TASK 6
//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

const tsk6Btn = document.querySelector('#l25-tsk6-btn');

tsk6Btn.addEventListener('click', runL25Tsk6);

function runL25Tsk6() {
  let result;
  do {
    const firstNumb = +prompt('Enter first number');
    const operator = prompt('Enter an operator (+, -, * or /)');
    const secondNumb = +prompt('Enter second number');
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
  } while (confirm(`The result is: ${result}. Do you want to try more?`));
}

//TASK 7
//Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

const tsk7Btn = document.querySelector('#l25-tsk7-btn');

tsk7Btn.addEventListener('click', runL25Tsk7);

function runL25Tsk7() {
  let numb = prompt('Enter a number!');
  let shift = +prompt('Enter a shift number!');

  numb = numb.slice(shift, numb.length) + numb.slice(0, shift);

  alert(`The result is: ${numb}`);
}

//TASK 8
//Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

const tsk8Btn = document.querySelector('#l25-tsk8-btn');

tsk8Btn.addEventListener('click', runL25Tsk8);

function runL25Tsk8() {
  let mon = 'Monday';
  let tue = 'Tuesday';
  let wed = 'Wednesday';
  let thu = 'Thursday';
  let fri = 'Friday';
  let sat = 'Saturday';
  let sun = 'Sunday';

  let weekDayNow = new Date().toString().slice(0, 3);

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

  while (confirm(`Today is ${weekDayNow}, do you want to see next day?`)) {
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
}

//TASK 9
//Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

const tsk9Btn = document.querySelector('#l25-tsk9-btn');

tsk9Btn.addEventListener('click', runL25Tsk9);

function runL25Tsk9() {
  document.write(
    '<main style="display: flex; justify-content:center; align-items: center; flex-wrap: wrap; height: 100%; font-family: arial; font-size: 1.2rem;">',
  );

  document.write('<aside style="width: 40px; text-align: center;">');
  document.write(' ' + '<br>');

  for (let i = 2; i <= 9; i++) {
    document.write(i + '<br>');
  }
  document.write('</aside>');

  for (let k = 2; k <= 9; k++) {
    document.write('<div style="width: 40px; text-align: center;">');
    document.write(k + '<br>');

    for (let j = 2; j <= 9; j++) {
      document.write(j * k + '<br>');
    }
    document.write('</div>');
  }
  document.write('</main>');
}

//TASK 10
//Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

const tsk10Btn = document.querySelector('#l25-tsk10-btn');

tsk10Btn.addEventListener('click', runL25Tsk10);

function runL25Tsk10() {
  alert('Please think of a random number between 0-100, when ready press Ok!');
  let minNumb = 0;
  let maxNumb = 100;
  let numb = maxNumb / 2;
  let guess;

  do {
    guess = prompt(
      `Is your number ${numb}? Enter = if so, if not, enter < for bigger or > for smaller`,
    );
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
