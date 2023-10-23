let switchButton = document.querySelector("#switchButtons");

switchButton.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("isDark");
  element.classList.toggle("isLight");
});
