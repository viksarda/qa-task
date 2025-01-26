declare global {
  namespace Cypress {
    interface Chainable {
      getProductInCart(productName: string): Chainable<void>;
    }
  }
}


Cypress.Commands.add('getProductInCart', (productName) => {
  cy.get('td[class="ec_cartitem_details"]').contains(productName);
});