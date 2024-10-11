export default class FooterActionBar {
  constructor() {
    this.component = document.createElement('div');
    this.component.classList.add('output-section_footer-bar');

    const button = document.createElement('button');
    button.classList.add('button__primary');
    button.innerText = 'Start investing';
    button.onclick = () => alert('Start investing');

    
    const template = `
      Capital at
      <a href="#" class="link">
        risk
      </a>
    `;
    const textWithLink = document.createElement('p');
    textWithLink.classList.add('text-with-link');   
    textWithLink.innerHTML = template;

    this.component.append(button, textWithLink);
  }

  draw() {
    return this.component
  }
}