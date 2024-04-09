let mouseX = 0, mouseY = 0; // Variables pour stocker la position actuelle du curseur
let circleX = 0, circleY = 0; // Variables pour stocker la position actuelle du cercle
const speed = 0.1; // Vitesse de l'animation, plus la valeur est petite, plus le mouvement est lent

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Calculer la nouvelle position du cercle avec un effet de "détachement"
    circleX += (mouseX - circleX) * speed;
    circleY += (mouseY - circleY) * speed;

    // Appliquer la nouvelle position au cercle
    const circle = document.getElementById('cursor-circle');
    circle.style.left = circleX + 'px';
    circle.style.top = circleY + 'px';

    requestAnimationFrame(animate); // Continuer l'animation
}

animate(); // Démarrer l'animation


// Initialize Swiper with draggable categories and update the content based on the selected category
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Show all slides according to their size and space between
    spaceBetween: 2,
    centeredSlides: true, // Center the active slide in view
    slideToClickedSlide: true, // Move to the slide that was clicked
    grabCursor: true, // Show the grab cursor when hovering over the swiper
    loop: true, // Enable looping of slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        var activeCategory = this.slides[this.activeIndex].getAttribute('data-subject');
        updateContentForCategory(activeCategory);
      }
    }
  });
  
  // Function to update the visible content based on the active category
  function updateContentForCategory(category) {
    // Hide all content elements
    document.querySelectorAll('.interest').forEach(function (content) {
      content.style.display = 'none';
    });
  
    // Display the content for the active category
    var activeContent = document.querySelector(`.interest[js-interest="${category}"]`);
    if (activeContent) {
      activeContent.style.display = 'flex'; // or 'grid' or 'block' depending on your layout
    }
  }
  
  // Update content on initial load
  document.addEventListener("DOMContentLoaded", function () {
    var initialCategory = swiper.slides[swiper.activeIndex].getAttribute('data-subject');
    updateContentForCategory(initialCategory);
  });
  