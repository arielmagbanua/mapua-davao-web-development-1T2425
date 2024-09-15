const windowLocation = document.getElementById("window-location");
const historyPush = document.getElementById("history-push");
const historyBack = document.getElementById("history-back");
const historyForward = document.getElementById("history-forward");
const page1Button = document.getElementById("page1");
const page2Button = document.getElementById("page2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

console.log(window.location.pathname);

windowLocation.addEventListener("click", () => {
  // get the current path
  const currentPath = window.location.pathname;
  const newPath = currentPath.endsWith("/")
    ? `${currentPath}page1`
    : `${currentPath}/page1`;

  // navigate to new page
  window.location = newPath;
});

historyPush.addEventListener("click", () => {
  // get the current path
  const currentPath = window.location.pathname;
  const newPath = currentPath.endsWith("/")
    ? `${currentPath}page1`
    : `${currentPath}/page1`;

  // navigate to new page
  history.pushState({}, "", newPath);
});

historyBack.addEventListener("click", () => {
  history.back();
});

historyForward.addEventListener("click", () => {
  history.forward();
});

window.addEventListener("new-page", () => {
  // get the page based on the path
  const pathArray = window.location.pathname.split("/");
  const currentPage = pathArray[pathArray.length - 1];

  switch (currentPage) {
    case "page1":
      div1.classList.remove("hidden");
      div2.classList.add("hidden");
      break;
    case "page2":
      div1.classList.add("hidden");
      div2.classList.remove("hidden");
      break;
  }
});

page1Button.addEventListener("click", () => {
  // get the current path
  const currentPath = window.location.pathname.split("/");
  currentPath[currentPath.length - 1] = "page1";
  // navigate to new page
  history.pushState({}, "", currentPath.join("/"));

  const newPageEvent = new Event("new-page");
  window.dispatchEvent(newPageEvent);
});

page2Button.addEventListener("click", () => {
  // get the current path
  const currentPath = window.location.pathname.split("/");
  currentPath[currentPath.length - 1] = "page2";
  // navigate to new page
  history.pushState({}, "", currentPath.join("/"));

  const newPageEvent = new Event("new-page");
  window.dispatchEvent(newPageEvent);
});

window.addEventListener("popstate", (e) => {
  const newPageEvent = new Event("new-page");
  window.dispatchEvent(newPageEvent);
});
