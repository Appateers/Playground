// Get the body element 
const body = document.querySelector('body');

// Initialize some variables for the mouse position
let mouseX = 0;
let mouseY = 0;

// Update the mouse position on mousemove
body.addEventListener('mousemove', e => {
  mouseX = e.clientX; 
  mouseY = e.clientY;
  
  // Update the background position
  body.style.backgroundPositionX = -mouseX + 'px';
  body.style.backgroundPositionY = -mouseY + 'px';
});

// Morph the background on mousemove
body.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  body.style.backgroundSize = x * 100 + 'px ' + y * 100 + 'px';
});