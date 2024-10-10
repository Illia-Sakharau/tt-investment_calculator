import Surface from "../surface/Surface.js";

export default class GeneralLayout {
    constructor() {
      const surfaseInner1 = document.createElement('div');
      const surfaseInner2 = document.createElement('div');
      surfaseInner1.innerText = 'Surface1';
      surfaseInner2.innerText = 'Surface2';

      const surfase = new Surface(surfaseInner1).draw();
      const surfase1 = new Surface(surfaseInner2).draw();

      this.component = document.createElement('div');
      this.component.classList.add('general-layout');
      this.component.appendChild(surfase);
      this.component.appendChild(surfase1);
    }
  
    draw() {    
      return this.component
    }
  }