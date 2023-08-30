document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo');
  logo.addEventListener('click', () => {
      location.reload();
  });

  const navLinks = document.querySelectorAll('nav ul li a[data-section]');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          const targetSectionId = this.getAttribute('data-section');
          scrollToSection(targetSectionId);
      });
  });

  function scrollToSection(sectionId) {
      document.querySelector(sectionId).scrollIntoView({
          behavior: "smooth"
      });
  }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

  const player = new Plyr('#my-video', {
      controls: [] // Hide all default controls
  });
});
