import BarChart from "../../chart/BarChart.js";
import StatisticsList from "../../statistics/StatisticsList.js";

export default class OutputSectionContent {
  constructor() {
    this.component = document.createElement('div');
    this.component.classList.add('output-section_content');

    const chart = new BarChart().draw();
    const statistics = new StatisticsList().draw();

    this.component.append(chart, statistics);
  }

  draw() {
    return this.component
  }
}