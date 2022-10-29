class Listeners {
  constructor(_addHome, _addMenu, _addContact) {
    this.addHome = _addHome;
    this.addMenu = _addMenu;
    this.addContact = _addContact;
  }

  get createListeners() {
    const headerBot = document.querySelector('.header-bot');
    const buttons = headerBot.children;

    [...buttons].forEach((button, index) => {
      switch(index) {
        case 0:
          button.addEventListener('click', () => {
            this.clearChild();
            this.addHome();
          });
          break;
        case 1: 
          button.addEventListener('click', () => {
            this.clearChild();
            this.addMenu();
          });
          break;
        case 2: 
          button.addEventListener('click', () => {
            this.clearChild();
            this.addContact();
          });
          break;
        default:
          console.log('There is an error');
      }
    }); 
  }
  clearChild() {
    let main = document.querySelector('.main');
    main.removeChild(main.firstElementChild);
  }
}

export default Listeners;