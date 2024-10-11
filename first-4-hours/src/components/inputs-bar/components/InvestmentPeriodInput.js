import { store } from "../../../App.js";
import NumberField from "../../input-fields/NumberField.js";
import Input from "../../input/Input.js";

export default class InvestmentPeriodInput {
  constructor() {
    const inputFieldProps = {
      defaultValue: store.getState().investmentPeriod,
      min: 1,
      max: 40,
      step: 1,
      onChange: (value) => {
        store.setState({ investmentPeriod: value });
      },
    }
    const inputField = new NumberField(inputFieldProps).draw();
    const props = {
      labelText: 'Investment period, years',
      inputField,
    }

    this.component = new Input(props).draw();
  }

  draw() {
    return this.component
  }
}