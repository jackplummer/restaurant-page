import {createHeader, createNav} from './home';
import './style.css';

const websiteContent = document.querySelector('#content');
websiteContent.appendChild(createHeader());
websiteContent.appendChild(createNav());