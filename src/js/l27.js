// TASK 1
//Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом: Функция для вывода на экран информации об автомобиле; Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

const tsk1Btn = document.querySelector('#l27-tsk1-btn');

tsk1Btn.addEventListener('click', runL27Tsk1);

function runL27Tsk1() {
  const vehicle = {
    manufacturer: 'Porsche',
    model: '911 Turbo',
    produced: '2020',
    averageSpeed: '100',
  };

  console.log(showVehicleInfo());
  console.log(calcTime() + ' hours');

  alert('Open Console to see the result');

  function showVehicleInfo() {
    for (let key in vehicle) {
      console.log(key + ': ' + vehicle[key]);
    }
  }

  function calcTime() {
    const distance = prompt('Enter the distance in km', 'e.g. 100');
    const time = distance / vehicle.averageSpeed;
    const pitStop = time / 4;

    return Math.ceil(time + pitStop);
  }
}

//TASK 2
//Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: Функция сложения 2-х объектов-дробей; Функция вычитания 2-х объектов-дробей; Функция умножения 2-х объектов-дробей; Функция деления 2-х объектов-дробей; Функция сокращения объекта-дроби.

const tsk2Btn = document.querySelector('#l27-tsk2-btn');

tsk2Btn.addEventListener('click', runL27Tsk2);

function runL27Tsk2() {
  const fraction1 = {
    numerator: '',
    denominator: '',
  };

  const fraction2 = {
    numerator: '',
    denominator: '',
  };

  fraction1.numerator = prompt('Enter a numerator of the first fraction');
  fraction1.denominator = prompt('Enter a denominator of the first fraction');
  fraction2.numerator = prompt('Enter a numerator of the second fraction');
  fraction2.denominator = prompt('Enter a denominator of the second fraction');

  const gcd = (a, b) => {
    if (a == 0) {
      return b;
    }
    return gcd(b % a, a);
  };

  function addFractions(obj1, obj2) {
    let numResult =
      obj1.numerator * obj2.denominator + obj2.numerator * obj1.denominator;
    let denomResult =
      (obj1.denominator * obj2.denominator +
        obj2.denominator * obj1.denominator) /
      2;
    let gcdResult = gcd(numResult, denomResult);
    numResult = numResult / gcdResult;
    denomResult = denomResult / gcdResult;
    return numResult + '/' + denomResult;
  }

  function subtractFractions(obj1, obj2) {
    let numResult =
      obj1.numerator * obj2.denominator - obj2.numerator * obj1.denominator;
    let denomResult =
      (obj1.denominator * obj2.denominator +
        obj2.denominator * obj1.denominator) /
      2;
    let gcdResult = gcd(numResult, denomResult);
    numResult = numResult / gcdResult;
    denomResult = denomResult / gcdResult;
    return numResult + '/' + denomResult;
  }

  function multiplyFractions(obj1, obj2) {
    let numResult = obj1.numerator * obj2.numerator;
    let denomResult = obj1.denominator * obj2.denominator;
    let gcdResult = gcd(numResult, denomResult);
    numResult = numResult / gcdResult;
    denomResult = denomResult / gcdResult;
    return numResult + '/' + denomResult;
  }

  function divideFractions(obj1, obj2) {
    let numResult = obj1.numerator * obj2.denominator;
    let denomResult = obj2.numerator * obj1.denominator;
    let gcdResult = gcd(numResult, denomResult);
    numResult = numResult / gcdResult;
    denomResult = denomResult / gcdResult;
    return numResult + '/' + denomResult;
  }

  let addition = addFractions(fraction1, fraction2);
  let subtraction = subtractFractions(fraction1, fraction2);
  let multiplication = multiplyFractions(fraction1, fraction2);
  let division = divideFractions(fraction1, fraction2);

  alert(
    `${fraction1.numerator}/${fraction1.denominator} + ${fraction2.numerator}/${fraction2.denominator} = ${addition}`,
  );
  alert(
    `${fraction1.numerator}/${fraction1.denominator} - ${fraction2.numerator}/${fraction2.denominator} = ${subtraction}`,
  );
  alert(
    `${fraction1.numerator}/${fraction1.denominator} * ${fraction2.numerator}/${fraction2.denominator} = ${multiplication}`,
  );
  alert(
    `${fraction1.numerator}/${fraction1.denominator} / ${fraction2.numerator}/${fraction2.denominator} = ${division}`,
  );
}

//TASK 3
//Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: Функция вывода времени на экран; Функция изменения времени на переданное количество секунд; Функция изменения времени на переданное количество минут; Функция изменения времени на переданное количество часов. Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

const tsk3Btn = document.querySelector('#l27-tsk3-btn');

tsk3Btn.addEventListener('click', runL27Tsk3);

function runL27Tsk3() {
  const time = {
    h: '',
    m: '',
    s: '',
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

    let h = time.h;
    let m = time.m;
    let s = time.s;

    h = formatHoursOutput(h);
    m = formatMinutesOutput(m);
    s = formatSecondsOutput(s);

    alert(`Now is ${h}:${m}:${s}`);
  }

  function changeTimeWithSeconds() {
    const timeshift = +prompt('Enter a number of seconds to shift time');

    let h = time.h * 3600;
    let m = time.m * 60;
    let s = time.s;
    const timeNowInSeconds = h + m + s;
    const timeResult = timeNowInSeconds + timeshift;

    h = Math.floor(timeResult / 3600);
    m = Math.floor(timeResult / 60) % 60;
    s = Math.floor(timeResult - m * 60) % 60;

    h = formatHoursOutput(h);
    m = formatMinutesOutput(m);
    s = formatSecondsOutput(s);

    alert(`Time is changed for: ${h}:${m}:${s}`);
  }

  function changeTimeWithMinutes() {
    const timeshift = +prompt('Enter a number of minutes to shift time');

    let h = time.h * 60;
    let m = time.m;
    let s = time.s / 60;
    const timeNowInMinutes = h + m + s;
    const timeResult = timeNowInMinutes + timeshift;

    h = Math.floor(timeResult / 60);
    m = Math.floor(timeResult % 60);
    s = Math.floor(timeResult * 60) % 60;

    h = formatHoursOutput(h);
    m = formatMinutesOutput(m);
    s = formatSecondsOutput(s);

    alert(`Time is changed for: ${h}:${m}:${s}`);
  }

  function changeTimeWithHours() {
    const timeshift = +prompt('Enter a number of hours to shift time');

    let h = time.h;
    let m = time.m;
    let s = time.s;

    const timeNowInHours = h;
    const timeResult = timeNowInHours + timeshift;

    h = timeResult;

    h = formatHoursOutput(h);
    m = formatMinutesOutput(m);
    s = formatSecondsOutput(s);

    alert(`Time is changed for: ${h}:${m}:${s}`);
  }
}
