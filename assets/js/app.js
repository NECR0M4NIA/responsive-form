// DOM //
const $contactForm = document.querySelector('#contact-form')
const $errorMessages = document.querySelector('.error-message')

// INPUTS //
const $nameInput = document.querySelector('#name');
const $lastNameInput = document.querySelector('#lastname');
const $emailInput = document.querySelector('#email');
const $passwordInput = document.querySelector('#password');

let inputs = [$nameInput, $lastNameInput, $emailInput, $passwordInput]

$contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let error = false;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.parentElement.classList.add('error');
            error = true;
            
            if (input === $nameInput) {
                document.querySelector('.name-error-message').style.display = 'block';
            } else if (input === $lastNameInput) {
                document.querySelector('.last-name-error-message').style.display = 'block';
            } else if (input === $passwordInput) {
                document.querySelector('.password-error-message').style.display = 'block';
            }
        } else {
            input.parentElement.classList.remove('error');
            
            if (input === $nameInput) {
                document.querySelector('.name-error-message').style.display = 'none';
            } else if (input === $lastNameInput) {
                document.querySelector('.last-name-error-message').style.display = 'none';
            } else if (input === $passwordInput) {
                document.querySelector('.password-error-message').style.display = 'none';
            }
        }
        
        if (input === $emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                input.parentElement.classList.add('error');
                document.querySelector('.email-error-message').style.display = 'block';
                error = true;
            } else {
                input.parentElement.classList.remove('error');
                document.querySelector('.email-error-message').style.display = 'none';
            }
        }
    });
})