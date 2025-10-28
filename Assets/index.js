document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const hamburgerIcon = document.querySelector(".hamburger-icon i");

  const headerTop = document.querySelector(".header-top");
    const scrollThreshold = 50;

  if (menuToggle && hamburgerIcon) {
    function toggleHamburgerIcon() {
      if (menuToggle.checked) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-xmark");
      } else {
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
      }
    }
    menuToggle.addEventListener("change", toggleHamburgerIcon);

    toggleHamburgerIcon();
  }
  function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            
            headerTop.classList.add("scrolled");
        } else {
           
            headerTop.classList.remove("scrolled");
        }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
