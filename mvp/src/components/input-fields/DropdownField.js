export default class DropdownField {
  constructor({ options = [], defaultValue, onChange }) {
    this.component = document.createElement('select');

    options.forEach(({ text, value }) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = text;
      this.component.appendChild(option);
    });

    if (defaultValue) {
      this.component.value = defaultValue;
    }

    this.component.onchange = (event) => {
      const selectedValue = event.target.value;
      if (onChange) onChange(selectedValue);
    };
  }

  draw() {
    return this.component;
  }
}
