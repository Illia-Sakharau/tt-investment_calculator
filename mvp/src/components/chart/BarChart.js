import { store } from "../../App.js";
import getConfig from "./utils/getConfig.js";
import getData from "./utils/getData.js";

export default class BarChart {
  data = getData(store.getState().potentialResalts);
  config = getConfig(this.data);

  constructor() {
    this._render();
    this._subscribeToStore();
  }

  _render() {
    this.component = document.createElement('div');
    this.component.classList.add('chart');

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    this.component.append(canvas);
    new Chart(ctx, this.config);
  }

  _subscribeToStore() {
    store.subscribe(({ potentialResalts }) => {
      if (potentialResalts !== this.data) {
        this.data = getData(potentialResalts);
        this.config = getConfig(this.data);
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