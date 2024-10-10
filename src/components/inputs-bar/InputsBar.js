import Surface from "../surface/Surface.js";

export default class InputsBar {
  constructor() {
    const inner = document.createElement('div');
    inner.classList.add('inputs-bar_inner');
    inner.innerHTML = '<div>Inner1</div><div>Inner2</div><div>Inner3</div><div>Inner4</div>'

    this.component = new Surface(inner).draw();
  }

  draw() {
    return this.component
  }
}