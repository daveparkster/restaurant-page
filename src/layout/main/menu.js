class Menu {
  constructor() {

  }

  get createContact() {
    let main = document.querySelector('main');
    let contact = document.createElement('div');
    main.appendChild(contact).classList.add('main-menu');  
  }
}

export default Menu;