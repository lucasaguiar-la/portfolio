// Efeito maquina de escrever
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
