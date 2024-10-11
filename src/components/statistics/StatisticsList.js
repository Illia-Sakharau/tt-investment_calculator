import { store } from "../../App.js";
import StatisticItem from "./StatisticItem.js";

export default class StatisticsList {
  constructor() {
    const potentialResalts = store.getState().potentialResalts;
    this._setComponentState(potentialResalts);
    this._render();
    this._subscribeToStore();
  }

  _setComponentState(potentialResalts) {
    const lastIndex = potentialResalts.length - 1;
    const { portfolioValue, totalReturn, totalInvested } = potentialResalts[lastIndex];
    this.portfolioValue = portfolioValue;
    this.totalReturn = totalReturn;
    this.totalInvested = totalInvested;

  }

  _render() {
    this.component = document.createElement('div');
    this.component.classList.add('statistics-list');

    
    const portfolioValueEl = new StatisticItem({ 
      value: this.portfolioValue, 
      text: 'Portfolio value',
    }).draw();
    const totalReturnEl = new StatisticItem({ 
      value: this.totalReturn, 
      text: 'Total return',
      color: '#192BC2',
    }).draw();
    const totalInvestedEl = new StatisticItem({ 
      value: this.totalInvested, 
      text: 'Total invested',
      color: '#4FBE0C',
    }).draw();

    this.component.append(portfolioValueEl, totalReturnEl, totalInvestedEl);
  }

  _subscribeToStore() {
    store.subscribe(({ potentialResalts }) => {
      this._setComponentState(potentialResalts);
      this._updateComponent();
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