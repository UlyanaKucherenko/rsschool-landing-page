const burgerBtn = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.header__mobile');
const closeBtn = document.querySelector('.header__mobile-close-btn');
const menuLinks = document.querySelectorAll('.header__mobile-link, .header__mobile-menu-btn');

const openMenu = () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('no-scroll');
};

const closeMenu = () => {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
};

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
    closeMenu();
  }
});
