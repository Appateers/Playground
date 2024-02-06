// Get the body element
const body = document.querySelector('body');

// Create stars and append them to the body
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    body.appendChild(star);
}

// Move stars around the page
setInterval(() => {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        star.style.transform = `translate(${x}px, ${y}px)`;
    });
}, 1000); // Change the interval as needed
