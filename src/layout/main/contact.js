class Contact {
  constructor() {

  }

  get createContact() {
    let main = document.querySelector('main');
    let contact = document.createElement('div');
    main.appendChild(contact).classList.add('main-contact');  
  }
}

export default Contact; 

