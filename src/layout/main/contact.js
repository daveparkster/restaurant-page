import Map from '../../img/map.png';

class Contact {
  constructor() {

  }

  get createContact() {
    let main = document.querySelector('main');
    let contact = document.createElement('div');
    main.appendChild(contact).classList.add('main-contact');  

    let mainContact = main.querySelector('.main-contact');

    this.createComponents.call(this, mainContact);
  }

  createComponents(parent) {

    let phoneContainer = document.createElement('div');
    let locationContainer = document.createElement('div');
    let mapContainer = document.createElement('div');

    parent.appendChild(phoneContainer).classList.add('phone');
    parent.appendChild(locationContainer).classList.add('location');
    parent.appendChild(mapContainer).classList.add('map');

    parent.querySelector('.phone').textContent = `Phone: (123)-456-7890`;
    parent.querySelector('.location').textContent = `New York City`;

    
    const mapImage = new Image();
    mapImage.src = Map;
    mapImage.arc = "Map";

    parent.querySelector('.map').appendChild(mapImage);
  }
}

export default Contact; 

