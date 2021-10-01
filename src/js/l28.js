// TASK 1
//Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

const tsk1Btn = document.querySelector('#l28-tsk1-btn');

tsk1Btn.addEventListener('click', runL28Tsk1);

function runL28Tsk1() {
  const shoppingList = [
    {
      name: 'laptop',
      quantity: 1,
      purchased: true,
    },
    {
      name: 'monitor',
      quantity: 3,
      purchased: false,
    },
    {
      name: 'Ext. SSD',
      quantity: 2,
      purchased: true,
    },
    {
      name: 'I/O devices',
      quantity: 1,
      purchased: false,
    },
  ];

  showShoppingList();
  addShoppingListItem();
  showShoppingList();

  const name = prompt('Please add purchased item');

  markItemAsPurchased(name);

  alert('Open Console to see the output');

  function showShoppingList() {
    const itemsToBuyArray = shoppingList.filter(
      item => item.purchased == false,
    );

    const purchasedItemsArray = shoppingList.filter(
      item => item.purchased == true,
    );

    const fullShoppingListArray = itemsToBuyArray.concat(purchasedItemsArray);
    console.log('----------> shopping list <----------');

    for (let item of fullShoppingListArray) {
      if (item.purchased == true) {
        console.log(item.name + ': ' + item.quantity + ' - DONE!');
      } else {
        console.log(item.name + ': ' + item.quantity + ' - TO BUY');
      }
    }
  }

  function updateShoppingList(item) {
    const itemInList = shoppingList.find(e => e.name === item.name);

    if (itemInList !== undefined) {
      itemInList.quantity += item.quantity;
    } else {
      shoppingList.push(item);
    }
  }

  function addShoppingListItem() {
    const newShoppingListItem = {};
    newShoppingListItem.name = prompt(
      'Enter a name of an item you wanna add to the shopping list:',
    );
    newShoppingListItem.quantity = +prompt('Enter the quantity of the item:');
    const isPurchased = prompt('Is it purchased already? (yes/no)');
    if (isPurchased === 'yes') {
      newShoppingListItem.purchased = true;
    } else {
      newShoppingListItem.purchased = false;
    }

    updateShoppingList(newShoppingListItem);
  }

  function markItemAsPurchased(name) {
    const itemInList = shoppingList.find(e => e.name === name);

    if (itemInList !== undefined) {
      itemInList.purchased = true;
      showShoppingList();
    } else {
      console.log('Are you sure you have added this item before?');
    }
  }
}

//TASK 2
//Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

const tsk2Btn = document.querySelector('#l28-tsk2-btn');

tsk2Btn.addEventListener('click', runL28Tsk2);

function runL28Tsk2() {
  const invoice = [];

  do {
    addItemsToInvoice();
  } while (confirm('Wanna add one more?'));

  printInvoice();

  function addItemsToInvoice() {
    const invoiceItem = {};

    invoiceItem.name = prompt(
      'Enter a name of an item you wanna add to the invoice:',
    );
    invoiceItem.quantity = +prompt('Enter the quantity of the item:');
    invoiceItem.price = +prompt('Enter the price of the item:');

    invoiceItem.price = calcItemPrice(invoiceItem.quantity, invoiceItem.price);

    invoice.push(invoiceItem);
  }

  function printInvoice() {
    for (let item of invoice) {
      if (item.name === null) {
        console.log('No items to put on the invoice');
      } else {
        console.log(
          'ITEM: ' +
            item.name +
            ' ---> QYT: ' +
            item.quantity +
            ' ---> PRICE: ' +
            item.price,
        );
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
    const pricesArray = [];
    for (let item of invoice) {
      pricesArray.push(item.price);
    }

    const totalSum = pricesArray.reduce((sum, current) => sum + current);
    console.log('---------- TOTAL SUM IS: ' + totalSum + ' ----------');

    // способа которай учытэля показал для подсчёта суммы
    // let sum = 0;
    // invoice.forEach(function (e) {
    //   sum += e.price;
    // });
  }

  function showMostExpensiveItem() {
    invoice.sort((a, b) => (a.price > b.price ? 1 : -1));
    const mostExpensiveItem = invoice[invoice.length - 1];
    const mostExpensiveName = mostExpensiveItem.name;
    const mostExpensivePrice = mostExpensiveItem.price;

    console.log(
      '---> Most expensive is: ' +
        mostExpensiveName +
        ' (' +
        mostExpensivePrice +
        ')',
    );
  }

  function calcAverageCost() {
    let totalSum = 0;
    let itemsNumber = 0;
    let averageCost = 0;
    invoice.forEach(e => {
      totalSum += e.price;
    });
    itemsNumber = invoice.length;
    averageCost = totalSum / itemsNumber;

    console.log('---> Average cost of an item is: ' + averageCost);
  }
}

//TASK 3
//Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

const tsk3Btn = document.querySelector('#l28-tsk3-btn');

tsk3Btn.addEventListener('click', runL28Tsk3);

function runL28Tsk3() {
  const cssStyles = [
    {
      name: 'color',
      value: '#000',
    },
    {
      name: 'font-size',
      value: '3rem',
    },
    {
      name: 'text-align',
      value: 'center',
    },
    {
      name: 'font-family',
      value: 'Verdana',
    },
    {
      name: 'text-weight',
      value: 'regular',
    },
    {
      name: 'text-transform',
      value: 'uppercase',
    },
  ];

  const enteredText = prompt('Enter any text you wanna display');

  outputEnteredText(enteredText, cssStyles);

  function outputEnteredText(text, styles) {
    const stylesString = styles.map(e => {
      return `${e.name}: ${e.value}`;
    });

    document.write(`<p style="${stylesString.join(';')}">${text}</p>`);
  }

  // const outputEnteredText = (text, styles) => {
  //   document.write(
  //     `<p style="${styles
  //       .map(s => `${s.name}:${s.value}`)
  //       .join(';')}">${text}</p>`,
  //   );
  // };
}

//TASK 4
//Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

const tsk4Btn = document.querySelector('#l28-tsk4-btn');

tsk4Btn.addEventListener('click', runL28Tsk4);

function runL28Tsk4() {
  const academyClassrooms = [
    {
      name: 'black',
      seats: 20,
      dept: 'linguistics',
    },
    {
      name: 'white',
      seats: 15,
      dept: 'math',
    },
    {
      name: 'red',
      seats: 10,
      dept: 'physics',
    },
    {
      name: 'blue',
      seats: 15,
      dept: 'linguistics',
    },
    {
      name: 'yellow',
      seats: 10,
      dept: 'math',
    },
    {
      name: 'orange',
      seats: 20,
      dept: 'physics',
    },
  ];

  showAllClassrooms();
  showFilteredClassrooms();
  searchForClassroom();
  sortClassroomsAccordingSeats();
  sortClassroomsAccordingNames();

  function showAllClassrooms() {
    console.log('All classrooms available:');

    academyClassrooms.forEach(e => {
      console.log(
        `Classroom: ${e.name.toUpperCase()} --- Number of seats: ${
          e.seats
        } --- Department: ${e.dept.toUpperCase()}`,
      );
    });
    console.log('--- --- --- --- ---');
  }

  function showFilteredClassrooms() {
    let chosenClassroom = prompt(
      'Choose the department you want to see the classrooms alocated for, enter "1" for Linguistics, "2" for Math, "3" for Physics',
    );

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

    const filteredRooms = academyClassrooms.filter(
      room => room.dept == chosenClassroom,
    );

    console.log(
      `Classroom alocated for ${chosenClassroom.toUpperCase()} department:`,
    );
    filteredRooms.forEach(e => {
      console.log(`${e.name.toUpperCase()} with max seat ${e.seats}`);
    });

    console.log('--- --- --- --- ---');
  }

  function searchForClassroom() {
    const group = {};
    group.name = prompt('Enter a name for your group');
    group.numb = +prompt('Enter the number of people');
    const dept = prompt(
      'Choose the department, enter "1" for Linguistics, "2" for Math, "3" for Physics',
    );

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

    console.log(`The group ${group.name.toUpperCase()} fits here:`);
    academyClassrooms.forEach(e => {
      if (e.seats >= group.numb && e.dept == group.dept) {
        console.log(
          `${e.name.toUpperCase()} classroom for ${e.dept} department (max ${
            e.seats
          } seats)`,
        );
      }
    });
    alert('Open Console to see the output');
    console.log('--- --- --- --- ---');
  }

  function sortClassroomsAccordingSeats() {
    const sortedClassrooms = academyClassrooms.sort((a, b) =>
      a.seats > b.seats ? 1 : -1,
    );

    console.log('All classrooms sorted according to max seats number:');

    sortedClassrooms.forEach(e => {
      console.log(
        `Classroom: ${e.name.toUpperCase()} --- Number of seats: ${
          e.seats
        } --- Department: ${e.dept.toUpperCase()}`,
      );
    });
    console.log('--- --- --- --- ---');
  }

  function sortClassroomsAccordingNames() {
    const sortedClassrooms = academyClassrooms.sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    console.log('All classrooms sorted according to their names:');

    sortedClassrooms.forEach(e => {
      console.log(
        `Classroom: ${e.name.toUpperCase()} --- Number of seats: ${
          e.seats
        } --- Department: ${e.dept.toUpperCase()}`,
      );
    });
    console.log('--- --- --- --- ---');
  }
}
