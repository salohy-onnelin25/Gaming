document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const hamburgerIcon = document.querySelector(".hamburger-icon i");

  if (menuToggle && hamburgerIcon) {
    // Définir la fonction de bascule pour l'icône
    function toggleHamburgerIcon() {
      if (menuToggle.checked) {
        // Menu ouvert -> Afficher l'icône X
        hamburgerIcon.classList.remove("fa-bars");
        // Note: fa-times est obsolète. Utilisez fa-xmark (Font Awesome 6)
        hamburgerIcon.classList.add("fa-xmark");
      } else {
        // Menu fermé -> Afficher l'icône hamburger
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
      }
    }

    // Écouter le changement de l'état de la checkbox
    menuToggle.addEventListener("change", toggleHamburgerIcon);

    // Exécuter une fois au chargement pour s'assurer que l'icône est correcte
    toggleHamburgerIcon();
  }
});
