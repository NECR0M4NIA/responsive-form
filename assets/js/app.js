// DOM //
const $contactForm = document.querySelector('#contact-form')
const $errorMessages = document.querySelector('.error-message')

// INPUTS //
const $nameInput = document.querySelector('#name');
const $lastNameInput = document.querySelector('#lastname');
const $emailInput = document.querySelector('#email');
const $passwordInput = document.querySelector('#password');

let inputs = [$nameInput, $lastNameInput, $emailInput, $passwordInput]

document.addEventListener('DOMContentLoaded', function(e) {
    $nameInput.focus()
})

$contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    inputs.forEach((input) => {
        if (input.value.length === 0) {
            console.log("Il n'y a rien")

            if (input === $nameInput) {
                document.getElementById('name').classList.add("input-error")
                document.querySelector('.name-error-message').classList.remove("error-message")
            } else if (input === $lastNameInput) {
                document.getElementById('lastname').classList.add("input-error")
                document.querySelector('.last-name-error-message').classList.remove("error-message")
            } else if (input === $emailInput) {
                document.getElementById('email').classList.add("input-error")
                document.querySelector('.email-error-message').classList.remove("error-message")
            } else if (input === $passwordInput) {
                document.getElementById('password').classList.add("input-error")
                document.querySelector('.password-error-message').classList.remove("error-message")
            }

        } else {
            console.log("Il y a quelque chose")

            if (input === $nameInput) {
                document.getElementById('name').classList.remove("input-error")
                document.querySelector('.name-error-message').classList.add("error-message")
            } else if (input === $lastNameInput) {
                document.getElementById('lastname').classList.remove("input-error")
                document.querySelector('.last-name-error-message').classList.add("error-message")
            } else if (input === $emailInput) {
                document.getElementById('email').classList.remove("input-error")
                document.querySelector('.email-error-message').classList.add("error-message")
            } else if (input === $passwordInput) {
                document.getElementById('password').classList.remove("input-error")
                document.querySelector('.password-error-message').classList.add("error-message")
            }
        }
    })
})