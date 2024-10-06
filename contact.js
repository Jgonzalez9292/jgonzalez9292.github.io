//validates form input
const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('click', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(userNameValue === '') {
        setError(userName, 'A name is required');
    } else {
        setSuccess(userName);
    }

    if(emailValue === '') {
        setError(email, 'An email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'A valid email address must be provided')
    } else {
        setSuccess(email);
    }

    if(messageValue === '') {
        setError(message, 'A message is required');
    } else {
        setSuccess(message);
    }
}
