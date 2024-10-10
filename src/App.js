import GeneralLayout from "./components/general-layout/GeneralLayout.js";

export default class App {
  constructor() {
    const generalLayout = new GeneralLayout().draw();

    this.app = document.createElement('div');
    this.app.classList.add('app');
    this.app.appendChild(generalLayout)
  }

  draw() {    
    document.body.appendChild(this.app);
  }
}
