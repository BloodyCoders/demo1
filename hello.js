document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#2c3e50'; // Darker background color on scroll
      } else {
        navbar.style.backgroundColor = '#3498db';
      }
    });
  });
  