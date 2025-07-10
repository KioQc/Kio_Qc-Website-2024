// script.js
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// load saved theme
if (localStorage.getItem('theme') === 'light') {
  root.setAttribute('data-theme', 'light');
  toggle.textContent = '🌞';
}

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'light' ? '🌞' : '🌙';
});
