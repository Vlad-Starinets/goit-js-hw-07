const btnRenderEl = document.querySelector(' [data-action="render"]')
const btnDestroyEl = document.querySelector(' [data-action="destroy"]')
const inputEl = document.querySelector('.input')
const boxSize = 30;
const boxesEl = document.querySelector('#boxes')


const getRandomColor = () => Math.ceil(Math.random() * 255);

const genereteRgb = () => {
    return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
  };

  const generateBoxSize = (n) => boxSize + (n - 1) * 10;

  const createBoxMarkup = (n) => {
    const color = genereteRgb();
    const markup = `<div style="background-color: ${color}; width: ${generateBoxSize(
      n
    )}px; height: ${generateBoxSize(n)}px" >${n}</div>`;
    return markup;
  };

  const addBoxesToContainer = (n) => {
    let boxesMarkup = "";
    for (let i = 1; i <= n; i++) {
      boxesMarkup += createBoxMarkup(i);
    }
    boxesEl.insertAdjacentHTML("beforeend", boxesMarkup);
  };

  const handleCreateBoxes = () => {
    boxesEl.innerHTML = "";
    const boxQuntity = inputEl.value;
    addBoxesToContainer(boxQuntity);
  };

  const handleBoxDestroy = () => {
    boxesEl.innerHTML = "";
    inputEl.value = 0;
  };

  btnRenderEl.addEventListener("click", handleCreateBoxes);
  btnDestroyEl.addEventListener("click", handleBoxDestroy);




//   const refs = {
//     body: document.body,
//     input: document.createElement("input"),
//     btnCreate: document.createElement("button"),
//     btnDestroy: document.createElement("button"),
//     parentBox: document.createElement("div"),
//   };
//   const baseBoxSize = 30;
//   const addBaseElToDom = () => {
//     refs.body.prepend(
//       refs.input,
//       refs.btnCreate,
//       refs.btnDestroy,
//       refs.parentBox
//     );
//     refs.input.type = "number";
//     refs.input.min = 0;
//     refs.btnCreate.type = "button";
//     refs.btnCreate.textContent = "Создать";
//     refs.btnDestroy.type = "button";
//     refs.btnDestroy.textContent = "Очистить";
//   };
//   // генирурует номер цвета
//   const getRandomColor = () => Math.ceil(Math.random() * 255);
//   //создает цвет
//   const genereteRgb = () => {
//     return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
//   };
//   // генерирует размер бокса
//   const generateBoxSize = (n) => baseBoxSize + (n - 1) * 10;
//   // создает разметку бокса
//   const createBoxMarkup = (n) => {
//     const color = genereteRgb();
//     const markup = `<div style="background-color: ${color}; width: ${generateBoxSize(
//       n
//     )}px; height: ${generateBoxSize(n)}px" >${n}</div>`;
//     return markup;
//   };
//   //добавляет боксы в контейнер
//   const addBoxesToContainer = (n) => {
//     let boxesMarkup = "";
//     for (let i = 1; i <= n; i++) {
//       boxesMarkup += createBoxMarkup(i);
//     }
//     refs.parentBox.insertAdjacentHTML("beforeend", boxesMarkup);
//   };
//   // обработчик создания боксов
//   const handleCreateBoxes = () => {
//     refs.parentBox.innerHTML = "";
//     const boxQuntity = refs.input.value;
//     addBoxesToContainer(boxQuntity);
//   };
//   // обработчик очистки боксов
//   const handleBoxDestroy = () => {
//     refs.parentBox.innerHTML = "";
//     refs.input.value = 0;
//   };
//   addBaseElToDom();
//   refs.btnCreate.addEventListener("click", handleCreateBoxes);
//   refs.btnDestroy.addEventListener("click", handleBoxDestroy);