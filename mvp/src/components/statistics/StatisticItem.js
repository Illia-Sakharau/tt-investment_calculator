export default class StatisticItem {
  constructor({ value = 0, text = '', color }) {      
    this.component = document.createElement('div');
    this.component.classList.add('statistic-item');
    const template = `
        <p class="statistic-item_value">
          £${value}
        </p>
        <p class="statistic-item_text">
            ${text}
        </p>
    `;
    this.component.innerHTML = template;
    this.component.style.color = color;
  }

  draw() {    
    return this.component
  }
}