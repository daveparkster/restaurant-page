class BasicLayout {
  constructor() {

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
    let about = document.createElement('button'); 

    let options = document.querySelector('.header-bot');
    options.appendChild(home).classList.add('home-button');
    options.appendChild(menu).classList.add('menu-button');
    options.appendChild(about).classList.add('about-button');

    let homeButton = document.querySelector('.home-button');
    let menuButton = document.querySelector('.menu-button');
    let aboutButton = document.querySelector('.about-button');

    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    aboutButton.textContent = "About";
  }

  get setFooter() {
    let footer = document.querySelector('.footer');
    footer.textContent = "Created by: daveparkster";
  }

}

export default BasicLayout; 

