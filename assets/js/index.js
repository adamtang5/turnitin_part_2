import { createMainContent } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement('section');
    container.classList = ['container', 'flex-column'];
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();
};
