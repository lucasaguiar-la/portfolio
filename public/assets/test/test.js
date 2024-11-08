const pato = document.querySelector(".pato");
const stack = document.querySelector(".stack");
const botaoReiniciar = document.getElementById("reiniciar");
const icones = [
    'url(../images/icones/bash-icon.png)',
    'url(../images/icones/css3-icon.png)',
    'url(../images/icones/docker-icon.png)',
    'url(../images/icones/git-icon.png)',
    'url(../images/icones/html5-icon.png)',
    'url(../images/icones/java-icon.png)',
    'url(../images/icones/js-icon.png)',
    'url(../images/icones/mysql-icon.png)',
    'url(../images/icones/python-icon.png)',
    'url(../images/icones/spring-icon.png)'
];
let pulou = false;
let tecnologiasAtuais = [];
let jogoAtivo = true;

document.addEventListener("keydown",(event) => {
    if(event.code == "Space" | event.code == "ArrowUp"){
        pulo();
    }
});

function pulo() {
    if (!pato.classList.contains("pulo")) {
        pato.classList.add("pulo");
        pulou = true;

        setTimeout(() => {
            pato.classList.remove("pulo");
            pulou = false;
        },700);
    }
}

function criarTecnologia() {
    if (!jogoAtivo) return;

    const tecnologia = document.createElement("div");
    tecnologia.classList.add("tecnologia");

    const iconeAleatorio = icones[Math.floor(Math.random() * icones.length)];
    tecnologia.style.backgroundImage = iconeAleatorio;

    tecnologia.style.bottom = "0px";

    stack.appendChild(tecnologia);

    tecnologia.addEventListener("animationend", () => {
        tecnologia.remove();
        tecnologiasAtuais = tecnologiasAtuais.filter(t => t !== bottomAleatorio);
    });

    const duracaoAleatoria = Math.random() * 3 + 2;
    tecnologia.style.animationDuration = `${duracaoAleatoria}s`;

    detectarColisao(tecnologia);
}

function detectarColisao(tecnologia) {
    const intervalo = setInterval(() => {
        if (!jogoAtivo) {
            clearInterval(intervalo);
            return;
        }

        const patoRect = pato.getBoundingClientRect();
        const tecnologiaRect = tecnologia.getBoundingClientRect();

        if (
            patoRect.left < tecnologiaRect.right &&
            patoRect.right > tecnologiaRect.left &&
            patoRect.top < tecnologiaRect.bottom &&
            patoRect.bottom > tecnologiaRect.top
        ) {
            clearInterval(intervalo);
            jogoAtivo = false;
            botaoReiniciar.style.display = "block";
            pararJogo()
        }
    }, 100);
}

function pararJogo() {
    document.querySelectorAll(".tecnologia").forEach(tecnologia => {
        tecnologia.style.animationPlayState = 'paused';
    });
    clearInterval(intervalId);
}

function reiniciarJogo() {
    jogoAtivo = true;
    botaoReiniciar.style.display = "none";
    document.querySelectorAll(".tecnologia").forEach(tecnologia => tecnologia.remove());
    tecnologiasAtuais = [];
}

botaoReiniciar.addEventListener("click", reiniciarJogo);

setInterval(criarTecnologia, 2500);
