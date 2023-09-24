/*Tema claro e escuro
function switchTheme() {
  document.body.classList.toggle("isLight");
  document.body.classList.toggle("isDark");
}
document
  .getElementById("switchThemeBtn")
  .addEventListener("click", switchTheme);
*/
let buttonMenu = document.querySelector(".buttonMenu");

buttonMenu.addEventListener("click", (event) => {
  let menu = document.querySelector(".menu");
  let hamburguer = document.querySelector("#hamburguer");
  menu.classList.toggle("active");
  hamburguer.classList.toggle("active");
  const active = menu.classList.contains("active");
  event.currentTarget.setAtribute("aria-expanded", active);
});
