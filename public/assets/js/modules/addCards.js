export class CardManager {
    constructor() {
        this.containerCards = document.querySelector('.container-cards');
        this.cardEmDesenvolvimento = document.getElementById('card-em-desenvolvimento');
        this.projects = [
            {
                titulo: 'API Weather',
                imagemSrc: './assets/images/geral/projeto.png',
                descricao: 'Uma API que carrega os dados do clima atual e salva em um banco de dados Postgres.',
                linkProjeto: 'https://github.com/lucasaguiar-la/api_Weather'
            },
        ];
    }

    createCardElement({ titulo, imagemSrc, descricao, linkProjeto, linkCodigo }) {
        const template = `
            <div class="card-projetos fade-in">
                <div class="card-titulo">
                    <h3>${titulo}</h3>
                    <img src="${imagemSrc}" alt="Imagem do projeto ${titulo}" class="card-imagem">
                </div>
                <div class="card-descricao">
                    <p>${descricao}</p>
                </div>
                <div class="card-botoes">
                    <a href="${linkProjeto}" class="botoes-card" target="_blank" rel="noopener noreferrer">Ver projeto</a>
                </div>
            </div>
        `;

        const card = document.createElement('div');
        card.innerHTML = template.trim();
        return card.firstElementChild;
    }

    addCard(projectData) {
        const card = this.createCardElement(projectData);
        this.containerCards.insertBefore(card, this.cardEmDesenvolvimento);

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

        observador.observe(card);
    }

    init() {
        this.projects.forEach(project => {
            this.addCard(project);
        });
    }
}