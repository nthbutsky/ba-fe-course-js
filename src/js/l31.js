// TASK 1
// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

const tsk1Btn = document.querySelector('#l31-tsk1-btn');

tsk1Btn.addEventListener('click', runl31Tsk1, { once: true });

function runl31Tsk1() {
  const container = document.querySelector('.main__l31-container');
  const div = document.createElement('div');
  const text = document.createTextNode(
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dolorem voluptatibus nobis fugit vitae delectus molestias eaque temporibus non id impedit eum quo autem sequi, neque quae unde! Obcaecati, beatae.',
  );

  container.append(div);
  div.append(text);
  div.classList.add('content');
  div.setAttribute(
    'style',
    'margin: 20px auto; width: 500px; font-size: 1.5rem; color: hsl(44, 100%, 69%);',
  );

  document.body.addEventListener('keydown', event => {
    if ((event.code === 'KeyE' || event.code === 'Comma') && event.ctrlKey) {
      event.preventDefault();
      const element = document.querySelector('.content');
      if (event.code === 'KeyE' && element.nodeName === 'DIV') {
        const newElement = document.createElement('textarea');
        newElement.setAttribute('cols', 60);
        newElement.setAttribute('rows', 10);
        newElement.setAttribute('style', 'display: block; margin: 40px auto;');
        newElement.className = 'content';
        newElement.textContent = element.textContent;
        element.replaceWith(newElement);
      } else if (event.code === 'Comma' && element.nodeName === 'TEXTAREA') {
        const newElement = document.createElement('div');
        newElement.setAttribute(
          'style',
          'margin: 20px auto; width: 500px; font-size: 1.5rem; color:  hsl(9, 100%, 67%);',
        );
        newElement.className = 'content';
        newElement.textContent = element.value;
        element.replaceWith(newElement);
      }
    }
  });
}

//TASK 2
// Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.

const tsk2Btn = document.querySelector('#l31-tsk2-btn');

tsk2Btn.addEventListener('click', runl31Tsk2, { once: true });

function runl31Tsk2() {
  const container = document.querySelector('.main__l31-container');

  const tableDiv = document.createElement('div');
  tableDiv.setAttribute('id', 'tableDiv');
  tableDiv.setAttribute('style', 'margin-top: 25px');
  tableDiv.className = 'tableDiv';

  const tableTag = document.createElement('table');
  tableTag.setAttribute('id', 'table');
  tableTag.className = 'table table_sort';

  tableDiv.append(tableTag);
  container.append(tableDiv);

  class Employee {
    constructor(name, position, department, remuneration) {
      this.name = name;
      this.position = position;
      this.department = department;
      this.remuneration = remuneration;
    }
  }

  const bankEmpArray = [
    new Employee('Ruslan Ku', 'Dev', 'Top', 1e6),
    new Employee('Igor Chief', 'Cool', 'Main', 1e5),
    new Employee('Igor Chef', 'Middle', 'Nah', 1e5),
    new Employee('Spongebob Squarepants', 'Yeap', 'Deep', 1e9),
    new Employee('Patrick Star', 'Rock', 'Deep', 1e8),
  ];
  class bankEmpTable {
    constructor(array) {
      this.bankEmpArray = array;
    }
    getHtml() {
      const table = document.getElementById('table');
      const array = this.bankEmpArray;
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
      const head = document.createElement('tr');
      head.setAttribute('style', 'font-size: 1.3rem; color: hsl(9, 100%, 67%)');
      const th1 = document.createElement('th');
      th1.textContent = 'Name';
      const th2 = document.createElement('th');
      th2.textContent = 'Position';
      const th3 = document.createElement('th');
      th3.textContent = 'Department';
      const th4 = document.createElement('th');
      th4.textContent = 'Remuneration';
      table.append(thead);
      head.append(th1);
      head.append(th2);
      head.append(th3);
      head.append(th4);
      thead.append(head);
      table.append(tbody);
      for (let i in array) {
        let tr = document.createElement('tr');
        tbody.append(tr);
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

  const getSort = ({ target }) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);
    const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
    const comparator = (index, order) => (a, b) =>
      order *
      collator.compare(
        a.children[index].innerHTML,
        b.children[index].innerHTML,
      );

    for (const tBody of target.closest('table').tBodies)
      tBody.append(...[...tBody.rows].sort(comparator(index, order)));

    for (const cell of target.parentNode.cells)
      cell.classList.toggle('sorted', cell === target);
  };

  document
    .querySelectorAll('.table_sort thead')
    .forEach(tableTH =>
      tableTH.addEventListener('click', () => getSort(event)),
    );
}

//TASK 3
// Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.

const tsk3Btn = document.querySelector('#l31-tsk3-btn');

tsk3Btn.addEventListener('click', runl31Tsk3, { once: true });

function runl31Tsk3() {
  const container = document.querySelector('.main__l31-container');
  const div = document.createElement('div');
  const resizer = document.createElement('div');
  const text = document.createTextNode(
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dolorem voluptatibus nobis fugit vitae delectus molestias eaque temporibus non id impedit eum quo autem sequi, neque quae unde! Obcaecati, beatae.',
  );

  container.append(div);
  div.append(resizer);
  div.append(text);
  div.classList.add('content');
  resizer.classList.add('resizer');
  div.setAttribute(
    'style',
    'margin: 20px auto; width: 500px; font-size: 1.5rem; color: hsl(44, 100%, 69%); border: 2px solid hsl(9, 100%, 67%)',
  );

  const initResize = e => {
    e.preventDefault;
    window.addEventListener('mousemove', startResize);
    window.addEventListener('mouseup', stopResize);
  };

  const startResize = e => {
    div.style.width = e.clientX - div.offsetLeft + 'px';
    div.style.height = e.clientY - div.offsetTop + 'px';
  };
  const stopResize = e => {
    window.removeEventListener('mousemove', startResize);
    window.removeEventListener('mouseup', stopResize);
  };

  resizer.addEventListener('mousedown', initResize);
}
