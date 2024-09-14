// <!------------------------ navbar  =---------------------------------->
  
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});



  // Get the current URL path
const currentPath = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through the nav links and add the active class to the current link
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
  }
});

// <!-------------------------- animations ----------------------------->

AOS.init();

 


