
// [EFEITO DE CARREGAMENTO DA PÁGINA]
document.addEventListener("DOMContentLoaded", function() {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observador = new IntersectionObserver((entrada, observador) => {
        entrada.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("start");
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.5
    });

    fadeIns.forEach(fadeIn => {
        observador.observe(fadeIn);
    });
});