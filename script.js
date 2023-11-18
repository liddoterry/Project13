// Function to toggle between light and dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Get the dark mode toggle button element
const darkModeToggle = document.getElementById('darkModeToggle');

// Add a click event listener to the button
darkModeToggle.addEventListener('click', toggleDarkMode);


// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

 /*contact form JS */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.getElementById("submit-button");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            form.style.display = "none";
            successMessage.innerText = "Form submitted successfully!";
            successMessage.style.display = "block";
            form.classList.add("success-form"); // Apply the success styling
        }
    });

    function validateForm() {
        let valid = true;

        if (nameInput.validity.valueMissing) {
            valid = false;
            nameInput.classList.add("error");
            document.getElementById("name-error").textContent = "Please enter your name.";
        } else {
            nameInput.classList.remove("error");
            document.getElementById("name-error").textContent = "";
        }

        if (emailInput.validity.valueMissing || !isEmailValid(emailInput.value)) {
            valid = false;
            emailInput.classList.add("error");
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
        } else {
            emailInput.classList.remove("error");
            document.getElementById("email-error").textContent = "";
        }

        if (messageInput.validity.valueMissing) {
            valid = false;
            messageInput.classList.add("error");
            document.getElementById("message-error").textContent = "Please enter a message.";
        } else {
            messageInput.classList.remove("error");
            document.getElementById("message-error").textContent = "";
        }

        submitButton.disabled = !valid;
        return valid;
    }

    function isEmailValid(email) {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailPattern.test(email);
    }

    nameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    messageInput.addEventListener("input", validateForm);
});

//-Trivia-//

$(document).ready(function() {
    $('.option').on('click', function() {

        var isCorrect = $(this).data('answer') === true;

        $('.option').removeAttr('disabled');

        $('.option').css('background-color', '');

        if (isCorrect) {
            $(this).css('background-color', 'green');
            $('.feedback').text('Correct!').css('color', 'green');
        } else {
            $(this).css('background-color', 'red');
            $('.feedback').text('Incorrect. The correct answer is: ' + $('.option[data-answer=true]').text()).css('color', 'red');
        }
    });
});