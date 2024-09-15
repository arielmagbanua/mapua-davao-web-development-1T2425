// get the form reference and inputs
const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// get the reference of all label errors
const emailErrorLabel = document.querySelector("label.email-error-label");
const passwordErrorLabel = document.querySelector("label.password-error-label");

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the default behavior of the form

    // get the email and password input
    const email = emailInput.value;
    const password = passwordInput.value;

    // validate email
    if (!email) {
      emailErrorLabel.innerHTML = "Email is required";
      emailErrorLabel.classList.remove("hidden");
      emailInput.classList.add("error");
      return; // return immediately email is valid
    } else if (email && !validateEmail(email)) {
      emailErrorLabel.innerHTML =
        "Invalid email address, please provide a correct email";
      emailErrorLabel.classList.remove("hidden");
      emailInput.classList.add("error");
      return;
    } else {
      emailErrorLabel.classList.add("hidden");
      emailInput.classList.remove("error");
    }

    if (!password) {
      passwordErrorLabel.innerHTML = "Password is required";
      passwordErrorLabel.classList.remove("hidden");
      passwordInput.classList.add("error");
      return;
    } else if (password && password.length < 8) {
      passwordErrorLabel.innerHTML = "Password is too short";
      passwordErrorLabel.classList.remove("hidden");
      passwordInput.classList.add("error");
      return;
    } else {
      passwordErrorLabel.classList.add("hidden");
      passwordInput.classList.remove("error");
    }

    // TODO: we will submit data to server
    console.log("submitting email and passwrod...");
  });
});

// objects
const myObject = {
  foo: "bar",
  bar: true,
  func1: function () {
    return this.foo;
  },
  func2: () => {
    console.log(this);
    return this.foo;
  },
};
