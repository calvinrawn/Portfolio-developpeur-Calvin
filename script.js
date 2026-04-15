document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < windowHeight * 0.9) { 
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  checkVisibility();
});


document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.map-card');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < windowHeight * 0.9) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
});
