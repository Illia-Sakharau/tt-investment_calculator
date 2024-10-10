import DropdownField from "../../input-fields/DropdownField.js";
import Input from "../../input/Input.js";

const dropdownOptions = [
  {
    text: 'MSCI World 8.91%',
    value: 8.91,
  },
  {
    text: 'S&P 500 11.19%',
    value: 11.19,
  },
  {
    text: 'Money Market Funds 4.95%',
    value: 4.95,
  }
]

export default class InvestInInput {
  constructor() {
    const inputFieldProps = {
      options: dropdownOptions,
      defaultValue: localStorage.getItem('InvestInInput') || dropdownOptions[0].value,
      onChange: (value) => {
        localStorage.setItem('InvestInInput', value)
      },
    }
    const inputField = new DropdownField(inputFieldProps).draw();
    const props = {
      labelText: 'Invest in, %',
      inputField,
    }

    this.component = new Input(props).draw();
  }

  draw() {
    return this.component
  }
}