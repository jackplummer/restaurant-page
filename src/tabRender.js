import {createHomeContent} from './home';
import {createMenuContent} from './menu';
import {createContactContent} from './contact';
import CoffeeMug from './img/coffee-mug.png';

const websiteContent = document.querySelector('#content');

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  const logo = new Image();
  logo.src = CoffeeMug;
  logo.classList.add('logo');

  const headerText = document.createElement('div');
  headerText.textContent = 'Nice Coffee Cafe';

  header.appendChild(logo);
  header.appendChild(headerText);

  return header;
};

function createNav() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  const home = document.createElement('button');
  home.textContent = 'Home';
  home.classList.add('home-button');

  const menu = document.createElement('button');
  menu.textContent = 'Menu';
  menu.classList.add('menu-button');

  const contact = document.createElement('button');
  contact.textContent = 'Contact';
  contact.classList.add('contact-button');
  
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  return navBar;
};

function clearPage() {
  while (websiteContent.firstChild) { // removes all cells from grid
    websiteContent.removeChild(websiteContent.lastChild);
  };
};

function renderHome() {
  clearPage();
  websiteContent.appendChild(createHeader());
  websiteContent.appendChild(createNav());
  websiteContent.appendChild(createHomeContent());
  loadPage();
};

function renderMenu() {
  clearPage();
  websiteContent.appendChild(createHeader());
  websiteContent.appendChild(createNav());
  websiteContent.appendChild(createMenuContent());
  loadPage();
};

function renderContact() {
  clearPage();
  websiteContent.appendChild(createHeader());
  websiteContent.appendChild(createNav());
  websiteContent.appendChild(createContactContent());
  loadPage();
};

function loadPage() {
  const homeButton = document.querySelector('.home-button');
  homeButton.addEventListener('click', function() {
    renderHome();
    console.log('home pressed');
  });
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function() {
    renderMenu();
    console.log('menu pressed');
  });
  const contactButton = document.querySelector('.contact-button');
  contactButton.addEventListener('click', function() {
    renderContact();
    console.log('contact pressed');
  });
};

export {renderHome, loadPage}