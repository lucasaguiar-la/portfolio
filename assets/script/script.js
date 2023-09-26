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

buttonMenu.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  let hamburguer = document.querySelector("#hamburguer");
  menu.classList.toggle("active");
  hamburguer.classList.toggle("active");
});

let title = document.querySelector(".mainTitle");

function typeWriter(element) {
  const arrayText = element.innerText.split("");
  element.innerText = "";
  arrayText.forEach((letter, index) => {
    setTimeout(() => (element.innerText += letter), 85 * index);
  });
}
setTimeout(() => typeWriter(title), 4200);

typeWriter(title);
