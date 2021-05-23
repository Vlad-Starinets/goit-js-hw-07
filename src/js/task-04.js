
const addValue = document.querySelector('[data-action="increment"]');
const removeValue = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0

function onClickButtonDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
}

function onClickButtonIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
}

removeValue.addEventListener('click', onClickButtonDecrement);
addValue.addEventListener('click', onClickButtonIncrement);
