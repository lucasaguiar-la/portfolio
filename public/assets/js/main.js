import { ThemeManager } from './modules/switchs.js';
import { FadeInManager } from './modules/fadeIn.js';
import { CardManager } from './modules/addCards.js';

class App {
    constructor() {
        this.themeManager = new ThemeManager();
        this.fadeInManager = new FadeInManager();
        this.cardManager = new CardManager();
    }

    init() {
        this.themeManager.init();
        this.fadeInManager.init();
        this.cardManager.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
