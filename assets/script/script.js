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
const titleElement = document.getElementById("typing-effect");
const text = " Olá, mundo!";
let index = 0;

const typeText = () =>
  index < text.length
    ? ((titleElement.textContent += text.charAt(index++)),
      setTimeout(typeText, 100))
    : setTimeout(() => eraseText(), 2000);

const eraseText = () =>
  index >= 0
    ? ((titleElement.textContent = text.substring(0, index--)),
      setTimeout(eraseText, 100))
    : setTimeout(typeText, 100);

typeText();
