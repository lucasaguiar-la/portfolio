// Constantes para elementos DOM e classes
const THEME = {
    DARK: 'tema-escuro',
    LIGHT: 'tema-claro'
};

const IMAGES = {
    DARK: {
        LOGO: './assets/images/geral/menu-image.png',
        THEME_ICON: './assets/images/geral/escuro.png'
    },
    LIGHT: {
        LOGO: './assets/images/geral/menu-image-alt.svg',
        THEME_ICON: './assets/images/geral/claro.png'
    }
};

export class ThemeManager {
    constructor() {
        this.themeButton = document.getElementById('trocarTema');
        this.logo = document.getElementById('logo');
        this.themeIcon = document.getElementById('trocar-tema-icon');
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.add(savedTheme);
            this.updateImages(savedTheme === THEME.DARK);
        }

        this.themeButton.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        const isDarkTheme = document.body.classList.toggle(THEME.DARK);
        document.body.classList.toggle(THEME.LIGHT);
        this.animateThemeIcon();
        this.updateImages(isDarkTheme);

        localStorage.setItem('theme', isDarkTheme ? THEME.DARK : THEME.LIGHT);
    }

    updateImages(isDarkTheme) {
        const theme = isDarkTheme ? IMAGES.DARK : IMAGES.LIGHT;
        this.logo.src = theme.LOGO;
        this.themeIcon.src = theme.THEME_ICON;
    }

    animateThemeIcon() {
        this.themeIcon.classList.add('girando');
        setTimeout(() => {
            this.themeIcon.classList.remove('girando');
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
