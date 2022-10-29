import "./styles/layout.css"; 

import BasicLayout from './layout/basic.js'; 
import Contact from './layout/main/contact.js';
import Home from './layout/main/home.js';
import Menu from './layout/main/menu.js';

import Listeners from './layout/listeners.js';

class Restaurant {
  constructor() {
    //placeholder
  }

  createPage() {
    const layout = new BasicLayout(); 
    layout.setLayout;
    layout.setHeader;
    layout.setFooter;
  }

  addHome() {
    const home = new Home();
    home.createHome;
  }

  addMenu() {
    const menu = new Menu();
    menu.createMenu;
  }

  addContact() {
    const contact = new Contact();
    contact.createContact;
  }

  get listenForEvents() {
    const listeners = new Listeners(this.addHome, this.addMenu, this.addContact);
    listeners.createListeners;
  }
}

const restaurant = new Restaurant();
restaurant.createPage();
restaurant.addHome();
restaurant.listenForEvents;

