document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const hamburgerIcon = document.querySelector(".hamburger-icon i");

  const headerTop = document.querySelector(".header-top");
    const scrollThreshold = 50;

  if (menuToggle && hamburgerIcon) {
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
    menuToggle.addEventListener("change", toggleHamburgerIcon);

    toggleHamburgerIcon();
  }
  function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            // Défilement > 50px : Appliquer le style "scrollé" (Fond noir, Barres blanches)
            headerTop.classList.add("scrolled");
        } else {
            // Défilement < 50px : Revenir au style initial (Fond blanc, Barres noires)
            headerTop.classList.remove("scrolled");
        }
    }
    
    // Attacher l'écouteur d'événement au défilement de la fenêtre
    window.addEventListener("scroll", handleScroll);
    
    // Exécuter la fonction une fois au chargement pour gérer le cas où la page charge déjà scrollée
    handleScroll();
});
