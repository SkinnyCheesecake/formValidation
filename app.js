const nameField = document.querySelector('#nameField');
const emailField = document.querySelector('#emailField');
const phoneField = document.querySelector('#phoneField');
const passField = document.querySelector('#passField');
const formField = document.querySelector('.form__hero');
const submitButton = document.createElement("input");

const errorAlert = document.createElement('p');
const successAlert = document.createElement('p');

const formData = {
    nameField: '',
    emailField: '',
    phoneField: '',
    passField: ''
}

// name field
nameField.classList.add('input');

// email field
emailField.classList.add('input');

// phone field
phoneField.classList.add('input');

// password field
passField.classList.add('input');

//submit button
submitButton.type = "submit";
submitButton.value = "Submit query!";
submitButton.classList.add('button');

// alerts
errorAlert.classList.add('error__alert');
errorAlert.textContent = "Please fill each field with the required information";

successAlert.classList.add('success__alert');
successAlert.textContent = "Your form has been submitted succesfully";

// APPENDING INPUTS AND BUTTON TO THE FORM FIELD
formField.appendChild(submitButton);

// Reading the information inside the inputs
nameField.addEventListener('input', inputDebugger);
emailField.addEventListener('input', inputDebugger);
phoneField.addEventListener('input', inputDebugger);
passField.addEventListener('input', inputDebugger);
submitButton.addEventListener('click', submitDebugger);


 function inputDebugger ( e ) {
    // console.log(formData);
    formData[e.target.id] = e.target.value
}

function submitDebugger ( e ) {
    const {nameField, emailField, phoneField, passField} = formData;
    e.preventDefault();
    if(nameField === ''|| emailField === ''|| phoneField === ''|| passField === ''){
        console.log('Please fill each field as required');
        formField.appendChild(errorAlert);
        setTimeout(() => {
            errorAlert.remove();
        }, 3000);
    } else {
        e.preventDefault();
        console.log("Submitting form");
        setTimeout(() => {
            console.log('Form submitted correctly! \nYour data:');
            console.log(formData);
            formField.appendChild(successAlert);
            setTimeout(() => {
                successAlert.remove();
            }, 5000);
        }, 1000);
    }

    }