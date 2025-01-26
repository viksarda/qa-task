declare global {
  namespace Cypress {
    interface Chainable {
      clickPaginationButton(pageNumber: number): Chainable<void>;
      getResultCount(value: number): Chainable<void>;
      clickSortDropdownOption(option: string): Chainable<void>;
      getFirstProduct(): Chainable<void>;
      getProduct(productName: string): Chainable<void>;
      clickCurrencyOption(option: string): Chainable<void>;
      getProductSerchInput(): Chainable<void>;
      clickSearchButton(): Chainable<void>;
      clickFilterByPriceOption(option: string): Chainable<void>;
      clickViewCartButton(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('clickPaginationButton', (pageNumber) => {
  cy.get('span[class="ec_product_page_perpage"]').within(() => {
    cy.get('a').contains(pageNumber).click();
  });
});

Cypress.Commands.add('getResultCount', (value) => {
  cy.get('span[class="ec_product_page_showing"]').should('contain.text', value);
});

Cypress.Commands.add('clickSortDropdownOption', (value) => {
  cy.get('select#sortfield').select(value);
});

Cypress.Commands.add('getFirstProduct', () => {
  cy.get('h3[class="ec_product_title_type1"]').first();
});

Cypress.Commands.add('getProduct', (productName) => {
  cy.get('h3[class="ec_product_title_type1"]').contains(productName);
});

Cypress.Commands.add('clickCurrencyOption', (option) => {
  cy.get('select#ec_currency_conversion').select(option);
});

Cypress.Commands.add('getProductSerchInput', () => {
  cy.get('input[class="ec_search_input"]');
});

Cypress.Commands.add('clickSearchButton', () => {
  cy.get('div[class="ec_search_widget"]').within(() => {
    cy.get('input[type="submit"]').click();
  });
});

Cypress.Commands.add('clickFilterByPriceOption', (option) => {
  cy.get('div[class="ec_pricepoint_widget"]').contains(option).click();
});

Cypress.Commands.add('clickViewCartButton', () => {
  cy.get('div[class="ec_product_added_to_cart"]').contains('View Cart').click();
});
