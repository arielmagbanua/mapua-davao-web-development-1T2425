document.addEventListener("DOMContentLoaded", () => {
  // select the elements
  const demoDiv = document.querySelector("div.demo");
  const changeColorButton = document.querySelector("button.change-bg");
  const changeTextColorButton = document.querySelector("button.change-text");
  const changeClassButton = document.querySelector("button.change-class");

  // register event listeners
  changeColorButton.addEventListener("click", () => {
    // change the background color
    demoDiv.style.backgroundColor = "#00FFFF";
  });
  changeTextColorButton.addEventListener("click", () => {
    // change text color
    demoDiv.style.color = "#FF0000";
  });
  changeClassButton.addEventListener("click", () => {
    demoDiv.classList.add("my-class");
    demoDiv.classList.remove("existing");
  });
});
