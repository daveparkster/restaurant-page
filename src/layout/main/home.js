import Profile from '../../img/chef.jpg';

class Home {
  constructor() {

  }

  get createHome() {
    "use strict";

    let main = document.querySelector('main');
    let home = document.createElement('div');
    main.appendChild(home).classList.add('main-home');  

    let mainHome = main.querySelector('.main-home');
    this.createRooms.call(this, mainHome);
  }

  createRooms(parent) {
    "use strict";

    let top = document.createElement('div');
    let mid = document.createElement('div');
    let bot = document.createElement('div');

    parent.appendChild(top).classList.add('top-home');
    parent.appendChild(mid).classList.add('mid-home');
    parent.appendChild(bot).classList.add('bot-home');

    let topHome = parent.querySelector('.top-home');
    let midHome = parent.querySelector('.mid-home');
    let botHome = parent.querySelector('.bot-home');

    this.createTop.call(topHome);
    this.createMid.call(midHome);
    this.createBot.call(botHome);
  }

  createTop() {
    "use strict";

    let top = document.createElement('div');
    let bot = document.createElement('div');

    this.appendChild(top).classList.add('top-caption');
    this.appendChild(bot).classList.add('bot-caption');

    let topCaption = this.querySelector('.top-caption');
    let botCaption = this.querySelector('.bot-caption');

    topCaption.textContent = "Best Hotdogs in NYC";
    botCaption.textContent = "Operating since 1939";
  }

  createMid() {
    "use strict";

    const chefProfile = new Image();
    chefProfile.src = Profile;
    chefProfile.alt = "Chef";
    chefProfile.copyright = "Photo by Eiliv Aceron on Unsplash";

    this.appendChild(chefProfile);
  }

  createBot() {
    "use strict";

    this.textContent = "Order online or Contact us";
  }

}

export default Home;