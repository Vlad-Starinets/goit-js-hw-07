const inputSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputSizeEl.addEventListener('input', inputChange)
inputSizeEl.max = 50
inputSizeEl.min = 10


function inputChange(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px'
}

