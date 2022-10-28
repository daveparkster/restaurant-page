import Food from '../../img/menu.svg';


class Menu {
  constructor() {
    //placeholder
  }

  get createMenu() {
    let main = document.querySelector('main');
    let menu = document.createElement('div');
    main.appendChild(menu).classList.add('main-menu');
    
    let mainMenu = main.querySelector('.main-menu');
    this.createOptions.call(this, mainMenu);
  }

  createOptions(parent) {
    "use strict"; 

    let hotdog1 = document.createElement('div');
    let hotdog2 = document.createElement('div');
    let hotdog3 = document.createElement('div');
    let hotdog4 = document.createElement('div');

    parent.appendChild(hotdog1).classList.add('italian');
    parent.appendChild(hotdog2).classList.add('michigan');
    parent.appendChild(hotdog3).classList.add('polish');
    parent.appendChild(hotdog4).classList.add('chili');

    this.addTextImg.call(this, parent.children);
  }

  addTextImg(collection) {
    [...collection].forEach((element, index) => {
      let top = document.createElement('div');
      let bot = document.createElement('div');

      element.appendChild(top).classList.add('top');
      element.appendChild(bot).classList.add('bot');

      switch(index) {
        case 0: 
          let italianTop = element.querySelector('.top');
          
          const menuOption = new Image();
          menuOption.src = Food;
          italianTop.appendChild(menuOption);

          element.querySelector('.bot').textContent = "Italian Hot Dog";

          break;
        case 1: 
          let michiganTop = element.querySelector('.top');
          
          const menuOption2 = new Image();
          menuOption2.src = Food;
          michiganTop.appendChild(menuOption2);

          element.querySelector('.bot').textContent = "Michigan Hot Dog";
        
          break;
        case 2: 
          let polishTop = element.querySelector('.top');
          
          const menuOption3 = new Image();
          menuOption3.src = Food;
          polishTop.appendChild(menuOption3);

          element.querySelector('.bot').textContent = "Polish Hot Dog";

          break;
        case 3: 
          let chiliTop = element.querySelector('.top');
          
          const menuOption4 = new Image();
          menuOption4.src = Food;
          chiliTop.appendChild(menuOption4);

          element.querySelector('.bot').textContent = "Chili Hot Dog";

          break;
        default:
      }
    });
  }


  
}

export default Menu;