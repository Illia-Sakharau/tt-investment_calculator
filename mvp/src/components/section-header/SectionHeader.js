export default class SectionHeader {
    constructor({ title = '', subtitle = '' }) {      
      this.component = document.createElement('div');
      this.component.classList.add('section-header');
      const template = `
          <h2 class="section-header_title">
              ${title}
          </h2>
          <p class="section-header_subtitle">
              ${subtitle}
          </p>
      `;
      this.component.innerHTML = template;
    }
  
    draw() {    
      return this.component
    }
  }