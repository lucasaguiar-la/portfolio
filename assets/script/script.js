// Tema claro e escuro
function switchTheme() {
  document.body.classList.toggle("isLight");
  document.body.classList.toggle("isDark");
}
document
  .getElementById("switchThemeBtn")
  .addEventListener("click", switchTheme);

// Menu lateral
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".navMenu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Menu fixo
window.addEventListener("scroll", function () {
  let headerNav = document.querySelector("header");

  if (window.scrollY > 0) {
    headerNav.classList.add(
      "fixed-header",
      "fixed-header-transition",
      "fixed-header-background"
    );
  } else {
    headerNav.classList.remove("fixed-header-background");
  }
});

// Escrita dinâmica
const title = document.querySelector("#typing");

function typing(element) {
  const textArray = element.innerText.split("");
  element.innerText = "";
  textArray.forEach((letter, i) => {
    setTimeout(() => (element.innerText += letter), 75 * i);
    setInterval(() => {
      typing(title);
    }, 4000);
  });
}
typing(title);
