
const emailInput = document.getElementById('email');
const emailCheck = document.getElementById('email-check');
const passwordContainer = document.getElementById('password-container');
const passwordInput = document.getElementById('password');
const ageContainer = document.getElementById('age-container');
const ageInput = document.getElementById('age');
const genderContainer = document.getElementById('gender-container');
const genderInput = document.getElementById('gender');
const addressContainer = document.getElementById('address-container');
const addressInput = document.getElementById('address');
const phoneContainer = document.getElementById('phone-container');
const phoneInput = document.getElementById('phone');
const continueBtn = document.getElementById('continue');
const submittedData = document.getElementById('submitted-data');


const displayEmail = document.getElementById('display-email');
const displayPassword = document.getElementById('display-password');
const displayAge = document.getElementById('display-age');
const displayGender = document.getElementById('display-gender');
const displayAddress = document.getElementById('display-address');
const displayPhone = document.getElementById('display-phone');


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


emailInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const emailValue = emailInput.value;

    
        if (emailPattern.test(emailValue)) {
            emailCheck.style.display = 'inline';
            emailInput.setAttribute('disabled', 'true');
            passwordContainer.style.display = 'block';
        } else {
            alert("Please enter a valid email address.");
        }
    }
});


passwordInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const passwordValue = passwordInput.value;
        if (passwordValue.trim() !== "") {
            passwordInput.setAttribute('disabled', 'true');
            ageContainer.style.display = 'block'; 
        }
    }
});


ageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const ageValue = ageInput.value;
        if (ageValue > 0) {
            ageInput.setAttribute('disabled', 'true');
            genderContainer.style.display = 'block';
        }
    }
});


genderInput.addEventListener('change', function() {
    if (genderInput.value) {
        genderInput.setAttribute('disabled', 'true');
        addressContainer.style.display = 'block'; 
    }
});

addressInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const addressValue = addressInput.value;
        if (addressValue.trim() !== "") {
            addressInput.setAttribute('disabled', 'true');
            phoneContainer.style.display = 'block'; 
        }
    }
});

phoneInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const phoneValue = phoneInput.value;
        if (phoneValue.trim() !== "") {
            phoneInput.setAttribute('disabled', 'true');
            continueBtn.style.display = 'block'; 
        }
    }
});


continueBtn.addEventListener('click', function() {
    
    displayEmail.textContent = emailInput.value;
    displayPassword.textContent = passwordInput.value;
    displayAge.textContent = ageInput.value;
    displayGender.textContent = genderInput.value;
    displayAddress.textContent = addressInput.value;
    displayPhone.textContent = phoneInput.value;

    submittedData.style.display = 'block';
});
