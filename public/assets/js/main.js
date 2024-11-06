import { ThemeManager } from './modules/switchs.js';
import { FadeInManager } from './modules/fadeIn.js';

class App {
    constructor() {
        this.themeManager = new ThemeManager();
        this.fadeInManager = new FadeInManager();
    }

    init() {
        this.themeManager.init();
        this.fadeInManager.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
