const sections = document.querySelectorAll("section");

const bubble = document.querySelector(".bubble");
const gradients = [
    'linear-gradient(to right top, #f46b45, #eea849)',
    'linear-gradient(to right top, #005c97, #363795)',
    'linear-gradient(to right top, #e53935, #e35d5b)'
];

// checking if 70% of the section is scrolled
const options = {
    threshold: 0.7
};

const navCheck = function (entries) {
    entries.forEach(entry => {
        const className = entry.target.className; // getting className of the target div if its 70% visible
        const activeAnchor = document.querySelector(`[data-page = ${className}]`); //gives the achor tag in navbar linked to that particular section of page
        const gradientIndex = entry.target.getAttribute('data-index'); // gives the alloted index of the section Ex: 0,1,2
        const coords = activeAnchor.getBoundingClientRect(); // getting the height width position etc of the active achor tag
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    })
}

let observer = new IntersectionObserver(navCheck, options);

sections.forEach(section => {
    observer.observe(section);
})
// to let the resizing of window not affect the bubble location
window.onresize = function () {
    location.reload();
}