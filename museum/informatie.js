document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slides img');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Automatic slideshow
  setInterval(nextSlide, 5000);

  // Attach event listeners to navigation buttons
  document.querySelector('.nav-btn.left').addEventListener('click', prevSlide);
  document.querySelector('.nav-btn.right').addEventListener('click', nextSlide);

  // Updated the left arrow button to navigate to the home page
  document.querySelector('.arrow-button-left').href = 'fifa_home_page.html';
});
