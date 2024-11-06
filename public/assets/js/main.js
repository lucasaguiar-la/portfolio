import { ThemeManager } from './modules/theme.js';

class App {
    constructor() {
        this.themeManager = new ThemeManager();
    }

    init() {
        this.themeManager.init();
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
