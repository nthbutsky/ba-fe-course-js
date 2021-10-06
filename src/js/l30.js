// TASK 1
// Создать страницу, которая выводит нумерованный список песен:

// var playList = [
// {
//  author: "LED ZEPPELIN",
//  song:"STAIRWAY TO HEAVEN"
// },
// {
//  author: "QUEEN",
//  song:"BOHEMIAN RHAPSODY"
// },
// {
//  author: "LYNYRD SKYNYRD",
//  song:"FREE BIRD"
// },
// {
//  author: "DEEP PURPLE",
//  song:"SMOKE ON THE WATER"
// },
// {
//  author: "JIMI HENDRIX",
//  song:"ALL ALONG THE WATCHTOWER"
// },
// {
//  author: "AC/DC",
//  song:"BACK IN BLACK"
// },
// {
//  author: "QUEEN",
//  song:"WE WILL ROCK YOU"
// },
// {
//  author: "METALLICA",
//  song:"ENTER SANDMAN"
// }
// ];

const tsk1Btn = document.querySelector('#l30-tsk1-btn');

tsk1Btn.addEventListener('click', runl30Tsk1);

function runl30Tsk1() {
  const playlist = [
    {
      author: 'LED ZEPPELIN',
      song: 'STAIRWAY TO HEAVEN',
    },
    {
      author: 'QUEEN',
      song: 'BOHEMIAN RHAPSODY',
    },
    {
      author: 'LYNYRD SKYNYRD',
      song: 'FREE BIRD',
    },
    {
      author: 'DEEP PURPLE',
      song: 'SMOKE ON THE WATER',
    },
    {
      author: 'JIMI HENDRIX',
      song: 'ALL ALONG THE WATCHTOWER',
    },
    {
      author: 'AC/DC',
      song: 'BACK IN BLACK',
    },
    {
      author: 'QUEEN',
      song: 'WE WILL ROCK YOU',
    },
    {
      author: 'METALLICA',
      song: 'ENTER SANDMAN',
    },
  ];

  document.write(
    '<main style="display: flex; justify-content:center; align-items: center; flex-wrap: wrap; height: 100%; font-family: arial; font-size: 1.2rem;"></main>',
  );
  const main = document.querySelector('main');
  const ul = document.createElement('ul');
  main.append(ul);
  for (let item in playlist) {
    const li = document.createElement('li');
    li.append(playlist[item].author);
    li.append(' - ');
    li.append(playlist[item].song);
    ul.append(li);
  }
  ul.setAttribute('style', 'list-style-type: none');
}

//TASK 2
// Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

const tsk2Btn = document.querySelector('#l30-tsk2-btn');

tsk2Btn.addEventListener('click', runl30Tsk2);

function runl30Tsk2() {
  document.write(
    '<main style="display: flex; justify-content:center; align-items: center; flex-wrap: wrap; height: 100%; font-family: arial; font-size: 1.2rem;"></main>',
  );
  const body = document.querySelector('body');
  body.setAttribute('style', 'margin: 0;');
  const main = document.querySelector('main');
  const openBtn = document.createElement('button');
  const openBtnText = document.createTextNode('OPEN');
  openBtn.append(openBtnText);
  openBtn.setAttribute(
    'style',
    'outline: none; width: 250px; height: 150px; border: none; border-radius: 40px; cursor: pointer; font-size: 3rem; background-color: hsl(154, 4%, 32%); color: white;',
  );
  main.append(openBtn);
  openBtn.addEventListener('click', () => {
    const modal = document.createElement('div');
    const closeBtn = document.createElement('button');
    const closeBtnText = document.createTextNode('CLOSE');
    closeBtn.append(closeBtnText);
    closeBtn.setAttribute(
      'style',
      'outline: none; width: 250px; height: 150px; border: none; border-radius: 40px; cursor: pointer; font-size: 3rem',
    );
    modal.append(closeBtn);
    modal.setAttribute(
      'style',
      'display: flex; justify-content:center; align-items: center; height: 100%; width: 100%; background-color: hsl(154, 4%, 32%);',
    );
    main.append(modal);
    openBtn.hidden = true;
    closeBtn.addEventListener('click', () => {
      modal.remove();
      openBtn.hidden = false;
    });
  });
}
//TASK 3
// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

const tsk3Btn = document.querySelector('#l30-tsk3-btn');

tsk3Btn.addEventListener('click', runl30Tsk3);

function runl30Tsk3() {
  document.write(
    '<main style="display: flex; justify-content:center; align-items: center; flex-direction: column; height: 100%; font-family: arial; font-size: 1.2rem; background-color: hsl(154, 4%, 32%);"></main>',
  );
  const body = document.querySelector('body');
  body.setAttribute('style', 'margin: 0;');
  const main = document.querySelector('main');
  const lightsContainer = document.createElement('div');
  const redLight = document.createElement('div');
  const yellowLight = document.createElement('div');
  const greenLight = document.createElement('div');
  const btn = document.createElement('button');
  const btnText = document.createTextNode('BTN');
  btn.append(btnText);
  main.append(lightsContainer);
  lightsContainer.setAttribute(
    'style',
    'width: 150px; height: 300px; background-color: white; border-radius: 20px; margin: 50px; display: flex;flex-direction: column; align-items: center; justify-content: center;',
  );
  lightsContainer.append(redLight);
  redLight.setAttribute(
    'style',
    'width: 75px; height: 75px; border: 5px solid hsl(154, 4%, 32%); border-radius: 100%; background-color: black; transition: background 500ms;',
  );
  lightsContainer.append(yellowLight);
  yellowLight.setAttribute(
    'style',
    'width: 75px; height: 75px; border: 5px solid hsl(154, 4%, 32%); border-radius: 100%; background-color: black; transition: background 500ms;',
  );
  lightsContainer.append(greenLight);
  greenLight.setAttribute(
    'style',
    'width: 75px; height: 75px; border: 5px solid hsl(154, 4%, 32%); border-radius: 100%; background-color: black; transition: background 500ms;',
  );
  main.append(btn);
  btn.setAttribute(
    'style',
    'width: 75px; height: 75px; border: none; border-radius: 100%; background-color: white; font-size: 1.5rem; font-weight: bold; cursor: pointer; color: hsl(154, 4%, 32%)',
  );

  btn.addEventListener('click', switchAll);

  function clearLights() {
    redLight.style.backgroundColor = 'black';
    yellowLight.style.backgroundColor = 'black';
    greenLight.style.backgroundColor = 'black';
  }

  let clickTimes = 0;

  function switchAll() {
    clickTimes++;

    switch (clickTimes) {
      case 1:
        clearLights();
        redLight.style.backgroundColor = 'red';
        break;
      case 2:
        clearLights();
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = 'orange';
        break;
      case 3:
        clearLights();
        greenLight.style.backgroundColor = 'green';
        break;
      case 4:
        clearLights();
        yellowLight.style.backgroundColor = 'orange';
        break;
      case 5:
        clearLights();
        redLight.style.backgroundColor = 'red';
        break;
      case 6:
        redLight.style.backgroundColor = 'black';
        yellowLight.style.backgroundColor = 'black';
        greenLight.style.backgroundColor = 'black';

        clickTimes = 0;
        break;
    }
  }
}
