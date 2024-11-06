export class FadeInManager {
    constructor() {
        this.fadeIns = document.querySelectorAll(".fade-in");
    }

    init() {
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

        this.fadeIns.forEach(fadeIn => {
            observador.observe(fadeIn);
        });
    }
}