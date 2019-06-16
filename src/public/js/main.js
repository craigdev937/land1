// Signup
const signupModal = document.querySelector(".signup-form__wrapper");
const signupBtn = document.querySelector(".signup__btn");

// Login
const loginModal = document.querySelector(".login-form__wrapper");
const loginBtn = document.querySelector(".login__btn");

// Close button
const signupX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");

// Show/Hide
const formContainer = document.querySelector(".form__container");

signupBtn.addEventListener("click", () => {
    signupModal.classList.add("display");
    formContainer.classList.add("disable");
});

loginBtn.addEventListener("click", () => {
    loginModal.classList.add("display");
    formContainer.classList.add("disable");
});

signupX.addEventListener("click", () => {
    signupModal.classList.remove("display");
    formContainer.classList.remove("disable");
});

loginX.addEventListener("click", () => {
    loginModal.classList.remove("display");
    formContainer.classList.remove("disable");
});


