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

}

export default BasicLayout; 

