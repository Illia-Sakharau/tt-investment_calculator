import { store } from "../../../App.js";
import SectionHeader from "../../section-header/SectionHeader.js";

export default class OutputSectionHeader {
  investmentPeriod = store.getState().investmentPeriod;

  constructor() {
    this._render();
    this._subscribeToStore();
  }

  _render() {
    const lastYear = new Date().getFullYear() + this.investmentPeriod;

    this.component = new SectionHeader({ 
      title: `Potential results for ${this.investmentPeriod} years`,
      subtitle: `Check potential sums that could be reached by ${lastYear}`,
    }).draw();
  }

  _subscribeToStore() {
    store.subscribe(({ investmentPeriod }) => {
      if (investmentPeriod !== this.investmentPeriod) {
        this.investmentPeriod = investmentPeriod;
        this._updateComponent();
      }
    });
  }

  _updateComponent() {
    const oldComponent = this.component;
    this._render();

    if (oldComponent && oldComponent.parentNode) {
      oldComponent.parentNode.replaceChild(this.component, oldComponent);
    }
  }

  draw() {
    return this.component
  }
}