// get the form reference and inputs
const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the default behavior of the form

    // TODO: validate the inputs here
  });
});
