// TASK 1
//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

const tsk1Btn = document.querySelector('#l29-tsk1-btn');

tsk1Btn.addEventListener('click', runL29Tsk1);

function runL29Tsk1() {
  class Circle {
    constructor(value) {
      this.radius = value;
    }

    get circleRadius() {
      return this.radius;
    }

    set circleRadius(value) {
      this.radius = value;
    }

    get circleDiameter() {
      return this.diameter;
    }

    calcCircleArea() {
      const a = Math.PI * Math.sqrt(this.radius);
      return a;
    }

    calcCircleCircumference() {
      const c = 2 * Math.PI * this.radius;
      return c;
    }
  }

  let newCircle = new Circle(3);
  console.log('Initially created object with passed radius property:');
  console.log(newCircle);
  newCircle.radius = 4;
  console.log('Passed a new value of a radius with setter:');
  console.log(newCircle);
  newCircle.diameter = Math.sqrt(newCircle.radius);
  console.log('Passed a new property of a diameter with setter:');
  console.log(newCircle);
  console.log(
    'Circle area (after new radius passed) is: ' +
      newCircle.calcCircleArea().toFixed(1),
  );
  console.log(
    'Circle circumference (after new radius passed) is: ' +
      newCircle.calcCircleCircumference().toFixed(1),
  );
}

//TASK 2
//Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов.

const tsk2Btn = document.querySelector('#l29-tsk2-btn');

tsk2Btn.addEventListener('click', runL29Tsk2);

function runL29Tsk2() {
  class Marker {
    constructor(color, inkLevel) {
      this.color = color;
      this.inkLevel = inkLevel;
    }

    highlight(text) {
      const newDiv = document.createElement('div');
      const elContainer = document
        .querySelector('.main__l29-container')
        .appendChild(newDiv);
      for (let i = 0; i < text.length; i++) {
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
  }

  class RechargedMarker extends Marker {
    recharge(inkLevel) {
      if (inkLevel > 100) {
        inkLevel = 100;
      } else {
        this.inkLevel += inkLevel;
      }
    }
  }

  const marker1 = new Marker('hsl(44, 100%, 69%)', 100);
  const marker2 = new RechargedMarker('hsl(44, 100%, 69%)', 50);

  marker2.recharge(0);

  const input =
    '“The proper function of man is to live, not to exist. I shall not waste my days in trying to prolong them. I shall use my time.” ― Jack London';

  marker1.highlight(input);
  marker2.highlight(input);
  console.log(marker1);
  console.log(marker2);
}

//TASK 3
//Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

const tsk3Btn = document.querySelector('#l29-tsk3-btn');

tsk3Btn.addEventListener('click', runL29Tsk3);

function runL29Tsk3() {
  const container = document.querySelector('.main__l29-container');

  const tableDiv = document.createElement('div');
  tableDiv.setAttribute('id', 'tableDiv');
  tableDiv.setAttribute('style', 'margin-top: 25px');
  tableDiv.className = 'tableDiv';

  const tableTag = document.createElement('table');
  tableTag.setAttribute('id', 'table');
  tableTag.className = 'table';

  tableDiv.append(tableTag);
  container.append(tableDiv);

  class Employee {
    constructor(name, position, department) {
      this.name = name;
      this.position = position;
      this.department = department;
    }
  }

  const bankEmpArray = [
    new Employee('Ruslan Ku', 'Dev', 'Top'),
    new Employee('Igor Chief', 'Cool', 'Main'),
    new Employee('Igor Chef', 'Middle', 'Nah'),
    new Employee('Spongebob Squarepants', 'Yeap', 'Deep'),
    new Employee('Patrick Star', 'Rock', 'Deep'),
  ];
  class bankEmpTable {
    constructor(array) {
      this.bankEmpArray = array;
    }
    getHtml() {
      const table = document.getElementById('table');
      const array = this.bankEmpArray;
      const head = document.createElement('tr');
      head.setAttribute('style', 'font-size: 1.3rem; color: hsl(9, 100%, 67%)');
      const th1 = document.createElement('th');
      th1.textContent = 'Name';
      const th2 = document.createElement('th');
      th2.textContent = 'Position';
      const th3 = document.createElement('th');
      th3.textContent = 'Department';
      head.append(th1);
      head.append(th2);
      head.append(th3);
      table.append(head);
      for (let i in array) {
        let tr = document.createElement('tr');
        table.append(tr);
        for (let j in array[i]) {
          let td = document.createElement('td');
          td.textContent = array[i][j];
          tr.append(td);
          td.setAttribute(
            'style',
            'font-size: 1.3rem; color: hsl(44, 100%, 69%)',
          );
        }
      }
      table.setAttribute('border', '5');
      table.setAttribute('bordercolor', 'white');
      table.setAttribute('width', '50%');
      table.setAttribute('style', 'margin: auto; ');
    }
  }
  const empTable = new bankEmpTable(bankEmpArray);
  empTable.getHtml();
}
