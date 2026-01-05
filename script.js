// Selecteer alle project elementen
const projects = document.querySelectorAll('.project');

const appearOptions = {
    threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

// Voeg observer toe aan elk project
projects.forEach(project => {
    appearOnScroll.observe(project);
});
