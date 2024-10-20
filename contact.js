console.log('node server.js');
//used to toggle the navigation bar off and on
function toggleNav() {
    var nav = document.getElementById("navbar");
    var navButton = document.getElementById("navButton")
    if (nav.style.display === "none") {
        navButton.style.display = "none";
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

//form elements
const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

//form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    validateInputs(); // Validate inputs before sending

    // Only send the form data if all inputs are valid
    // Length is set to 3, because there are 3 empty <div> elements throwing errors
    if (document.querySelectorAll('.error').length === 3) {
        const formData = new FormData(this); // Get form data
        const formDataEntries = new URLSearchParams();
        for (let [key, value] of formData.entries()) {
            formDataEntries.append(key, value);
        }
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded',},
            body: formDataEntries.toString(),
        })
        .then(response => response.text())
        .then(data => {
            console.log('Response Data:',data); // Log response for debugging
            alert(data); // Optionally alert the user
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending message. Please try again later.');
        });
    }
    else {
        alert("Server Connection Failed. Please try again later.");
        console.log('Form validation failed. Not sending data to server.');}
});

// sets an error if an element is blank or email is invalid
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//sets a success for successful entries
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//validates that the content is a real email address
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//validates if inputs are null or not
const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (userNameValue === '') {
        setError(userName, 'A name is required');
    } else {
        setSuccess(userName);

    }

    if (emailValue === '') {
        setError(email, 'An email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'A valid email address must be provided');
    } else {
        setSuccess(email);
    }

    if (messageValue === '') {
        setError(message, 'A message is required');
    } else {
        setSuccess(message);
    }
}
