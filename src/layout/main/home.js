class Home {
  constructor() {

  }

  get createHome() {
    let main = document.querySelector('main');
    let home = document.createElement('div');
    main.appendChild(home).classList.add('main-home');  
  }

}

export default Home;