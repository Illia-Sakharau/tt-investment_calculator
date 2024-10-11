import FooterActionBar from "./FooterActionBar.js";

const FOOTER_TEXT = 'The chart simulates future returns based on annualised returns over the past 30 years for equities and the current base rate of the Bank of England (as at 29/08/2024) which the MMFs track. This is illustrative Start investing only and the current overnight rate of the Bank of England is subject to change; actual performance may vary. It is not investment advice. Equity and MMF returns assume investing in an index with monthly contributions and no fees or taxes.'

export default class OutputSectionFooter {
  constructor() {
    this.component = document.createElement('div');
    this.component.classList.add('output-section_footer');

    const text = document.createElement('div');    
    text.classList.add('output-section_footer-text');
    text.innerText = FOOTER_TEXT;

    const actionBar = new FooterActionBar().draw();

    this.component.append(text, actionBar);
  }

  draw() {
    return this.component
  }
}