import "./styles/layout.css"; 


import BasicLayout from './layout/basic.js'; 
import Contact from './layout/main/contact.js';
import Home from './layout/main/home.js';
import Menu from './layout/main/menu.js';


class Restaurant {
  constructor() {

  }

  get createPage() {
    const layout = new BasicLayout(); 
    layout.setLayout;
    layout.setHeader;
    layout.setFooter;
  }

  get addHome() {
    const home = new Home();
    home.createHome;
  }

  get addMenu() {
    const menu = new Menu();
    menu.createMenu;
  }

  get addContact() {
    const contact = new Contact();
    contact.createContact;
  }

}

const restaurant = new Restaurant();
restaurant.createPage;
//restaurant.addHome;
//restaurant.addMenu;
restaurant.addContact;

