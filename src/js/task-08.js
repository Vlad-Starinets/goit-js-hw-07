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




