const root = document.documentElement;
const lightBtn = document.querySelector('.header__theme-toggle__btn--light');
const darkBtn = document.querySelector('.header__theme-toggle__btn--dark');

function setTheme(theme) {
  const isDark = theme === 'dark';
  root.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  lightBtn?.classList.toggle('active', !isDark);
  darkBtn?.classList.toggle('active', isDark);
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

lightBtn?.addEventListener('click', () => setTheme('light'));
darkBtn?.addEventListener('click', () => setTheme('dark'));
