import { store } from "../../../App.js";
import NumberField from "../../input-fields/NumberField.js";
import Input from "../../input/Input.js";

export default class MonthlyInvestmentInput {
  constructor() {
    const inputFieldProps = {
      defaultValue: store.getState().monthlyInvestment,
      min: 1,
      max: 10000,
      step: 100,
      onChange: (value) => {
        store.setState({ monthlyInvestment: value });
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