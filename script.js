const particlesContainer = document.getElementById('particles-container');

fetch('particles.json')
  .then(response => response.json())
  .then(data => {
    particlesJS(particlesContainer, data);
  })
  .catch(error => console.error('Error loading particles.json:', error));