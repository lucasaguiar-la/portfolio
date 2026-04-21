import { ThemeManager } from './modules/switchs.js?v=20260421-3';
import { FadeInManager } from './modules/fadeIn.js?v=20260421-3';
import { CardManager } from './modules/addCards.js?v=20260421-3';
import { EmailFormManager } from './modules/emailForm.js?v=20260421-3';

class App {
    constructor() {
        this.themeManager = new ThemeManager();
        this.fadeInManager = new FadeInManager();
        this.cardManager = new CardManager();
        this.emailFormManager = new EmailFormManager();
    }

    async init() {
        try {
            this.themeManager.init();
            this.fadeInManager.init();
            await this.cardManager.init();
            this.emailFormManager.init();
        } catch (error) {
            console.error('Erro durante inicializacao da aplicacao:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const app = new App();
    await app.init();
});
