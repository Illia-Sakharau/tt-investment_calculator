import { dropdownOptions } from "../components/inputs-bar/components/InvestInInput.js";

export default class SimpleStore {
  constructor() {
    this.state = {
      initialInvestment: 1000,
      monthlyInvestment: 100,
      investmentPeriod: 10,
      investPercentage: dropdownOptions[0].value,
    };
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }
}