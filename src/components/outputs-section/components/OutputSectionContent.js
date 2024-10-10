import BarChart from "../../chart/BarChart.js";

export default class OutputSectionContent {
  constructor() {
    this.component = document.createElement('div');
    this.component.classList.add('output-section_content');

    const chart = new BarChart().draw();
    const statistics = document.createElement('div');
    statistics.innerText = 'statistics';

    this.component.append(chart, statistics);
  }

  draw() {
    return this.component
  }
}