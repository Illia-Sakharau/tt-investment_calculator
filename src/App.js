export default class App {
  constructor() {
    this.app = document.createElement('div');
  }

  draw() {    
    document.body.appendChild(this.app);
  }
}
