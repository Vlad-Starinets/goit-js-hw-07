const elements = {
input: document.querySelector('#name-input'),
output: document.querySelector('#name-output'),
};

elements.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    if (elements.input.value === "") {
        elements.output.textContent = 'незнакомец';
    }
    else {
    elements.output.textContent = event.currentTarget.value;
}
};
