// Menu lateral
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".navMenu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

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

// Tema claro e escuro
function switchTheme() {
  document.body.classList.toggle("isLight");
  document.body.classList.toggle("isDark");
}
document
  .getElementById("switchThemeBtn")
  .addEventListener("click", switchTheme);
