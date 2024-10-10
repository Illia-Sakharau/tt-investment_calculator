import Input from "../input/Input.js";
import Surface from "../surface/Surface.js";
import InitialInvestmentInput from "./components/InitialInvestmentInput.js";
import InvestmentPeriodInput from "./components/InvestmentPeriodInput.js";
import MonthlyInvestmentInput from "./components/MonthlyInvestmentInput.js";

export default class InputsBar {
  constructor() {
    const initialInvestmentInput = new InitialInvestmentInput().draw();
    const monthlyInvestmentInput = new MonthlyInvestmentInput().draw();
    const investmentPeriodInput = new InvestmentPeriodInput({labelText: 'Investment period'}).draw();
    const investInInput = new Input({labelText: 'Invest in'}).draw();

    const inner = document.createElement('div');
    inner.classList.add('inputs-bar_inner');

    inner.appendChild(initialInvestmentInput);
    inner.appendChild(monthlyInvestmentInput);
    inner.appendChild(investmentPeriodInput);
    inner.appendChild(investInInput);

    this.component = new Surface(inner).draw();
  }

  draw() {
    return this.component
  }
}