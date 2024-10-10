import { dropdownOptions } from "../components/inputs-bar/components/InvestInInput.js";
import calculatePotentialResalt from "../utils/calculatePotentialResalt.js";

const initialState = {
  initialInvestment: 1000,
  monthlyInvestment: 100,
  investmentPeriod: 10,
  investPercentage: dropdownOptions[0].value,
};

export default class SimpleStore {
  constructor() {
    this.state = {
      ...initialState,
      potentialResalts: calculatePotentialResalt(initialState),
    };
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(updates) {
    const newState = { ...this.state, ...updates };
    this.state = { 
      ...newState,
      potentialResalts: calculatePotentialResalt(newState),
    };
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