const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputChange);

const changeEl = (prev, next, node) => {
    node.classList.remove(prev)
    node.classList.add(next)
}

function onInputChange(event) {
    const InputLength = event.currentTarget.value.length
    const dataLength = event.currentTarget.attributes["data-length"].nodeValue
    InputLength === Number(dataLength) ?
    changeEl('invalid', 'valid', inputEl) :
    changeEl('valid', 'invalid', inputEl)
}


