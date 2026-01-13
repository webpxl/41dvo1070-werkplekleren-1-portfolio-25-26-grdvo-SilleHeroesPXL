// Selecteer je <main>
const main = document.querySelector('main');

// Selecteer alle directe kinderen van main
const sections = main.querySelectorAll('section');

// Voeg fade-in toe met delay
sections.forEach((section, index) => {
    section.classList.add('fade-in');
    section.style.animationDelay = `${index * 0.2}s`; // elke sectie 0.2s later
});
