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


document.querySelectorAll('.project-details').forEach(details => {
    details.addEventListener('mouseover', function() {
        // Trouver le conteneur de média suivant dans la structure HTML
        this.nextElementSibling.style.display = 'block';
        this.nextElementSibling.style.opacity = '1';
    });

    details.addEventListener('mouseout', function() {
        // Trouver le conteneur de média suivant dans la structure HTML
        this.nextElementSibling.style.display = 'none';
        this.nextElementSibling.style.opacity = '0';
    });
});

