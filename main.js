// Toggle dark mode
function toggleDarkMode() {
  document.getElementById('body').classList.toggle('dark-mode');
}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
