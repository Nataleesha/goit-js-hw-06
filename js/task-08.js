const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = {};

    for (let element of formEl.elements) {
        if (element.tagName.toLowerCase() === 'input') {
            if (element.value.length === 0) {
                alert('Please fill in the field');
                return;
            }
            formData[element.name] = element.value;
        }
    }

    console.log(formData);

    formEl.reset();
}
