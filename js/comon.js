document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile_menu');
  const bg_cover = document.getElementById('bg_cover');
  const nonscroll = document.documentElement;

  hamburger.addEventListener('click', function() {
    nonscroll.classList.toggle('nonscroll');
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
    bg_cover.classList.toggle('active');
  });
});