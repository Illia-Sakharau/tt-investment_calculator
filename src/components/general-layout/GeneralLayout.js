import InputsBar from "../inputs-bar/InputsBar.js";
import Surface from "../surface/Surface.js";

export default class GeneralLayout {
    constructor() {
      const inputsBar = new InputsBar().draw();

      const surfaseInner2 = document.createElement('div');
      surfaseInner2.innerText = 'Surface2';

      const surfase2 = new Surface(surfaseInner2).draw();

      this.component = document.createElement('div');
      this.component.classList.add('general-layout');
      this.component.appendChild(inputsBar);
      this.component.appendChild(surfase2);
    }
  
    draw() {    
      return this.component
    }
  }