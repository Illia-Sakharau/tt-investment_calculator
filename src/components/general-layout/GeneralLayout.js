export default class GeneralLayout {
    constructor() {
      this.component = document.createElement('div');
      this.component.classList.add('general-layout');
      this.component.innerText = 'GeneralLayout';
    }
  
    draw() {    
      return this.component
    }
  }