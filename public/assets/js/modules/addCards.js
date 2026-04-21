export class CardManager {
    constructor() {
        this.cardsContainer = document.querySelector('.container-cards');
        this.inDevelopmentCard = document.getElementById('card-em-desenvolvimento');
        this.projects = [];
        this.cardObserver = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('start');
                    currentObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
    }

    async fetchProjects() {
        try {
            const response = await fetch('/api/projetos');
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const data = await response.json();
            this.projects = Array.isArray(data) ? data : [];
        } catch(err) {
            console.error('Error fetching projects:', err);
            this.projects = [];
        }
    }

    createCardElement({ title, imageUrl, description, githubUrl, liveUrl, technologies }, index) {
        const techIconsHtml = technologies ? technologies.map((tech) => `
            <img src="${tech.iconUrl}" alt="${tech.name}" class="tech-icon" title="${tech.name}" loading="lazy">
        `).join('') : '';
        const projectLink = liveUrl || githubUrl || '#projetos';
        const imageLoading = index < 3 ? 'eager' : 'lazy';

        const template = `
            <div class="card-projetos fade-in">
                <div class="card-titulo">
                    <h3>${title}</h3>
                    <div class="card-imagem-container">
                        <img src="${imageUrl}" alt="Project image ${title}" class="card-imagem" loading="${imageLoading}" decoding="async">
                        <div class="tech-icons-container">
                            ${techIconsHtml}
                        </div>
                    </div>
                </div>
                <div class="card-descricao">
                    <p>${description}</p>
                </div>
                <div class="card-botoes">
                    <a href="${projectLink}" class="botoes-card" target="_blank" rel="noopener noreferrer">Ver projeto</a>
                </div>
            </div>
        `;

        const card = document.createElement('div');
        card.innerHTML = template.trim();
        return card.firstElementChild;
    }

    addCard(projectData, index, fragment) {
        const card = this.createCardElement(projectData, index);
        this.cardObserver.observe(card);

        if (fragment) {
            fragment.appendChild(card);
            return;
        }

        this.cardsContainer.insertBefore(card, this.inDevelopmentCard);
    }

    async init() {
        await this.fetchProjects();
        const fragment = document.createDocumentFragment();
        this.projects.forEach((project, index) => this.addCard(project, index, fragment));
        this.cardsContainer.insertBefore(fragment, this.inDevelopmentCard);
    }
}