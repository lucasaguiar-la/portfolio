import { ThemeManager } from './modules/theme.js';

class App {
    constructor() {
        this.themeManager = new ThemeManager();
    }

    init() {
        this.themeManager.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
