// Menu hamburguer
let buttonMenu = document.querySelector(".buttonMenu");

buttonMenu.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  let hamburguer = document.querySelector("#hamburguer");
  menu.classList.toggle("active");
  hamburguer.classList.toggle("active");
});
