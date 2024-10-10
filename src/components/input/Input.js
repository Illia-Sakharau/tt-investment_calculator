export default class Input {
  constructor({ inputField, labelText }) {
    this.component = document.createElement('div');
    this.component.classList.add('input');

    const label = document.createElement('label');
    label.classList.add('input_label');
    label.textContent = labelText;
    this.component.appendChild(label);

    if (inputField) {
      inputField.classList.add('input_field');
      this.component.appendChild(inputField);
    } else {
      const defaultInputField = document.createElement('input');
      defaultInputField.classList.add('input_field');
      defaultInputField.type = 'text';

      this.component.appendChild(defaultInputField);
    }
  }

  draw() { 
    return this.component
  }
}