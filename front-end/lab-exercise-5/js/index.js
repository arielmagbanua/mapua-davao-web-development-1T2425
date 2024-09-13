document.addEventListener("DOMContentLoaded", () => {
  // select the radio inputs
  const lightRadioButton = document.getElementById("light-mode");
  const darkRadioButton = document.getElementById("dark-mode");

  // select all elements
  const header = document.getElementsByTagName("header")[0];
  const nav = document.getElementsByTagName('nav')[0];
  const body = document.getElementsByTagName("body")[0];
  const panels = document.querySelectorAll(".panel");
  const footer = document.getElementsByTagName("footer")[0];

  lightRadioButton.addEventListener("change", (event) => {
    // remove dark style for header
    header.classList.remove("dark");

    nav.classList.remove("dark");

    // remove dark style for body
    body.classList.remove("dark");

    // remove all dark style for panels
    for (let panel of panels) {
      panel.classList.remove("dark");
    }

    footer.classList.remove("dark");
  });

  darkRadioButton.addEventListener("change", (event) => {
    // apply dark style for header
    header.classList.add("dark");

    nav.classList.add("dark");

    // apply dark style for body
    body.classList.add("dark");

    // apply all dark styles for panels
    for (let panel of panels) {
      panel.classList.add("dark");
    }

    footer.classList.add("dark");
  });
});
