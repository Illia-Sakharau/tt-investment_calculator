import Surface from "../surface/Surface.js";
import OutputSectionContent from "./components/OutputSectionContent.js";
import OutputSectionHeader from "./components/OutputSectionHeader.js";

export default class OutputSection {
  constructor() {
    this.inner = document.createElement('div');
    this.inner.classList.add('output-section_inner');

    const header = new OutputSectionHeader().draw();
    const content = new OutputSectionContent().draw();
    const footer = document.createElement('div');
    footer.innerText = 'Footer';

    this.inner.append(header, content, footer);
    this.component = new Surface(this.inner).draw();
  }

  draw() {
    return this.component
  }
}