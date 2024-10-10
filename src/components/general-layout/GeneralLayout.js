import InputsBar from "../inputs-bar/InputsBar.js";
import OutputSection from "../outputs-section/OutputSection.js";

export default class GeneralLayout {
    constructor() {
      const inputsBar = new InputsBar().draw();
      const surfase2 = new OutputSection().draw();

      this.component = document.createElement('div');
      this.component.classList.add('general-layout');
      this.component.appendChild(inputsBar);
      this.component.appendChild(surfase2);
    }
  
    draw() {    
      return this.component
    }
  }