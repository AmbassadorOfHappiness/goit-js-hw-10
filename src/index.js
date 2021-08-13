import './styles.css';
import menuTemplate from './template.hbs';
import menu from "./menu.json";  

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  jsMenu: document.querySelector('.js-menu'),
  switch: document.querySelector('#theme-switch-toggle'),
  theme: localStorage.getItem('theme'),
};
  
const menuMarkup = createMenuMarkup(menu);
function createMenuMarkup(menu) {
  return menu.map(menuTemplate).join('');
};
refs.jsMenu.insertAdjacentHTML('beforeend', menuMarkup);

function changeTheme(e) {
  if (e.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

function themeChecked () {
if (refs.theme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  }
};

refs.switch.addEventListener('change', changeTheme);
themeChecked();


