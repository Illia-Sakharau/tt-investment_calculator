import NumberField from "../../input-fields/NumberField.js";
import Input from "../../input/Input.js";

export default class InitialInvestmentInput {
  constructor() {
    const inputFieldProps = {
      defaultValue: localStorage.getItem('InitialInvestmentValue') || 1000,
      min: 1,
      max: 100000,
      step: 1000,
      onChange: (value) => {
        localStorage.setItem('InitialInvestmentValue', value)
      },
    }
    const inputField = new NumberField(inputFieldProps).draw();
    const props = {
      labelText: 'Initial investment, £',
      inputField,
    }

    this.component = new Input(props).draw();
  }

  draw() {
    return this.component
  }
}