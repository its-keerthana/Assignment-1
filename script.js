// carousel part starts here
let currentSlide = 0;

function moveSlide(direction){
const carouselInner = document.querySelector('.carousel-inner');
const totalSlides = document.querySelectorAll('.carousel-item').length;
currentSlide += direction;

if(currentSlide < 0) {
currentSlide = totalSlides -1;
}else if(currentSlide >= totalSlides) { 
    currentSlide = 0;
}

const movePercentage = currentSlide*-100;
carouselInner.style.transform =`translateX(${movePercentage}%)`;
}
setInterval(()=>{
moveSlide(1);
},5000);
//carousel parts ends here

// registarion form parts starts here

RegForm = document.getElementById('form').addEventListener('submit', function (e) {
     e.preventDefault();

const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value; 
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;

// Get message elements by their specific IDs

const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const conPasswordError = document.getElementById('conPasswordError');
const formSuccess = document.getElementById('formSuccess');

// Clear previous messages

nameError.innerHTML = "";
phoneError.innerHTML = "";
emailError.innerHTML = "";
passwordError.innerHTML = "";
conPasswordError.innerHTML = "";
formSuccess.innerHTML = "";

// Validation flags

let isValid = true;

// Name validation

if(name.trim()==="") {
nameError.innerHTML = 'Name is required.';
nameError.classList.add('error');
isValid = false;
}
if (phone.trim()==="") {
phoneError.innerHTML = 'Phone Number is required.';
phoneError.classList.add('error');
isValid = false;
}

// Email validation (simple pattern)

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(email===""){
emailError.innerHTML = 'Please enter an email address.';
emailError.classList.add('error');
isValid = false;
}

else if (!emailPattern.test(email)) {
emailError.innerHTML = 'Please enter a valid email address.';
emailError.classList.add('error');
isValid - false;
}

// Password validation (at least 6 characters)
if (password.length < 6) {
    passwordError.innerHTML = 'Password must be at least 6 characters long.';
    isValid = false;
}

passwordError.classList.add('error');

// Confirm Password validation

if (password !== confirmPassword) {
conPasswordError.innerHTML = 'Passwords do not match.';
conPasswordError.classList.add('error');
isValid = false;
}

// If the form is valid, display the success message

if (isValid) {

formSuccess.innerHTML = "Registration successful!";
formSuccess.classList.add('success');
let regData = {
name: name, email: email, phone: phone
};

localStorage.setItem('regData', JSON.stringify(regData));
document.getElementById('form').reset();
}

});