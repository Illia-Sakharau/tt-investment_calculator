import NumberField from "../../input-fields/NumberField.js";
import Input from "../../input/Input.js";

export default class MonthlyInvestmentInput {
  constructor() {
    const inputFieldProps = {
      defaultValue: localStorage.getItem('MonthlyInvestment') || 100,
      min: 1,
      max: 10000,
      step: 100,
      onChange: (value) => {
        localStorage.setItem('MonthlyInvestment', value)
      },
    }
    const inputField = new NumberField(inputFieldProps).draw();
    const props = {
      labelText: 'Monthly investment, £',
      inputField,
    }

    this.component = new Input(props).draw();
  }

  draw() {
    return this.component
  }
}