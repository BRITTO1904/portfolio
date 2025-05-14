// Toggle dark mode
function toggleDarkMode() {
  document.getElementById('body').classList.toggle('dark-mode');
}

// Scroll fade-in effect
window.addEventListener('scroll', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Run on load too (for top items)
window.addEventListener('load', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
  });
  window.dispatchEvent(new Event('scroll'));
});

