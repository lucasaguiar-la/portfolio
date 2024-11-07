export class CardManager {
    constructor() {
        this.containerCards = document.querySelector('.container-cards');
        this.cardEmDesenvolvimento = document.getElementById('card-em-desenvolvimento');
        this.projects = [
            {
                titulo: 'Projeto de Exemplo 1',
                imagemSrc: './assets/images/geral/exemplo-projeto.png',
                descricao: 'Um exemplo de descrição extensa, que pode contemplar uma quantidade considerável de texto no card!',
                linkProjeto: '#',
                linkCodigo: '#'
            },
            {
                titulo: 'Projeto de Exemplo 2',
                imagemSrc: './assets/images/geral/exemplo-projeto.png',
                descricao: 'Um exemplo de descrição extensa, que pode contemplar uma quantidade considerável de texto no card!',
                linkProjeto: '#',
                linkCodigo: '#'
            },
            // Outros projetos aqui
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
                    <a href="${linkCodigo}" class="botoes-card" target="_blank" rel="noopener noreferrer">Ver código</a>
                </div>
            </div>
        `;

        const card = document.createElement('div');
        card.innerHTML = template.trim();
        return card.firstElementChild;
    }

    addCard(projectData) {
        const card = this.createCardElement(projectData);
        
        // Adiciona o novo card antes do card "Em Desenvolvimento"
        this.containerCards.insertBefore(card, this.cardEmDesenvolvimento);

        // Adicione o novo card ao observador
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