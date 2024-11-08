import { ThemeManager } from './modules/switchs.js';
import { FadeInManager } from './modules/fadeIn.js';
import { CardManager } from './modules/addCards.js';
import { EmailFormManager } from './modules/emailForm.js';

class App {
    constructor() {
        this.themeManager = new ThemeManager();
        this.fadeInManager = new FadeInManager();
        this.cardManager = new CardManager();
        this.emailFormManager = new EmailFormManager();
    }

    init() {
        this.themeManager.init();
        this.fadeInManager.init();
        this.cardManager.init();
        this.emailFormManager.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
