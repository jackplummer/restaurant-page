import { LibManifestPlugin } from "webpack";

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  header.textContent = 'Restaurant Name';
  return header;
};

function createNav() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  const home = document.createElement('div');
  home.textContent = 'Home';

  const menu = document.createElement('div');
  menu.textContent = 'Menu';

  const contact = document.createElement('div');
  contact.textContent = 'Contact';
  
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  return navBar;
};



export { createHeader, createNav }