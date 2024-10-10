import Surface from "../surface/Surface.js";
import OutputSectionHeader from "./components/OutputSectionHeader.js";

export default class OutputSection {
  constructor() {
    this.inner = document.createElement('div');
    this.inner.classList.add('output-section_inner');

    this.header = new OutputSectionHeader().draw();

    const content = document.createElement('div');
    content.innerText = 'Content';
    const footer = document.createElement('div');
    footer.innerText = 'Footer';

    this.inner.append(this.header, content, footer);
    this.component = new Surface(this.inner).draw();
  }

  draw() {
    return this.component
  }
}