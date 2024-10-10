import Surface from "../surface/Surface.js";

export default class OutputSection {
  constructor() {
    const inner = document.createElement('div');
    inner.classList.add('output-section_inner');

    const header = document.createElement('div');
    header.innerText = 'Header';
    const content = document.createElement('div');
    content.innerText = 'Content';
    const footer = document.createElement('div');
    footer.innerText = 'Footer';

    inner.append(header, content, footer);


    this.component = new Surface(inner).draw();
  }

  draw() {
    return this.component
  }
}