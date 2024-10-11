export default class NumberField {
  constructor({ defaultValue = 0, min, max, step = 1, onChange }) {
    this.component = document.createElement('input');
    this.component.type = 'number';
    this.component.value = defaultValue;
    this.component.min = min;
    this.component.max = max;
    this.component.step = step;
    this.component.onchange = (event) => {
      let value = Math.floor(+event.target.value);

      if (event.target.value < min) value = min;
      if (event.target.value > max) value = max;
      if (onChange) onChange(value);
      this.component.value = value;
    }
  }

  draw() { 
    return this.component
  }
}