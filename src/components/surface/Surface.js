export default class Surface {
  constructor(inner) {
    this.component = document.createElement('div');
    this.component.classList.add('surface');
    if (inner) {
      this.component.appendChild(inner);
    }
  }

  draw() { 
    return this.component
  }
}