// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Example of Dynamic Content (for future use)
  window.addEventListener('load', function () {
    // Placeholder for additional functionality (e.g., AI prediction)
    console.log('Page Loaded - Ready to display crop disease predictions!');
  });
  
