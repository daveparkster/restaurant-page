class BasicLayout {
  constructor() {
    //placeholder
  }

  get setLayout() {
    let parent = document.querySelector('#content');
    
    let header = document.createElement('header')
    let main = document.createElement('main')
    let footer = document.createElement('footer')

    parent.appendChild(header).classList.add('header');
    parent.appendChild(main).classList.add('main');
    parent.appendChild(footer).classList.add('footer');
  }

  get setHeader() {
    let header = document.querySelector('.header');

    let top = document.createElement('div');
    let bottom = document.createElement('div');

    header.appendChild(top).classList.add('header-top');
    header.appendChild(bottom).classList.add('header-bot');
    
    let title = document.querySelector('.header-top');
    title.textContent = "The Bear";
    
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button'); 

    let options = document.querySelector('.header-bot');
    options.appendChild(home).classList.add('home-button');
    options.appendChild(menu).classList.add('menu-button');
    options.appendChild(contact).classList.add('contact-button');

    let homeButton = document.querySelector('.home-button');
    let menuButton = document.querySelector('.menu-button');
    let contactButton = document.querySelector('.contact-button');

    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact";
  }

  get setFooter() {
    let footer = document.querySelector('.footer');
    footer.textContent = "Image by jcomp on Freepik ; Photo by Eiliv Aceron on Unsplash";
  }

}

export default BasicLayout; 

