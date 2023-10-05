// Carrossel
let index = 1;
let radio = (document.querySelector("#radio1").checked = true);
let stop = document.querySelector(".sliderContent");

let slider = setInterval(() => {
  next();
}, 2000);

function next() {
  index++;

  if (index > 5) {
    index = 1;
  }

  document.querySelector("#radio" + index).checked = true;
}

stop.addEventListener("click", () => {
  clearInterval(slider);
});

let result = document.querySelector(".result");

let valor = document.querySelector('input[name="btnRadio"]').value;
console.log(valor);
