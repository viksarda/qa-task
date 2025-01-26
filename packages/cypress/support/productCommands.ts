import { forms } from '../fixtures/forms';

declare global {
  namespace Cypress {
    interface Chainable {
      clickIncreaseQuantityButton(amount: number): Chainable<void>;
      getQuantityInputField(): Chainable<void>;
      clickAddToCartButton(): Chainable<void>;
      getColourValue(value: string): Chainable<void>;
      clickColourOptionButton(value: string): Chainable<void>;
      fillReplySection(): Chainable<void>;
      clickPostCommentButton(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('clickIncreaseQuantityButton', (amount) => {
  for (let i = 0; i < amount; i++) {
    cy.get('input[class="ec_plus"]').click();
  }
});

Cypress.Commands.add('getQuantityInputField', () => {
  cy.get('input[class="ec_quantity"]');
});

Cypress.Commands.add('clickAddToCartButton', () => {
  cy.get('div[class="ec_details_add_to_cart"]').within(() => {
    cy.get('input[type="submit"]').click();
  });
});

Cypress.Commands.add('getColourValue', (value) => {
  cy.get('div[class="ec_details_option_row"]').contains(value);
});

Cypress.Commands.add('clickColourOptionButton', (value) => {
  cy.get('div[class="ec_details_option_row"]').within(() => {
    cy.get(`img[title="${value}"]`).click();
  });
});

Cypress.Commands.add('fillReplySection', () => {
  cy.get('#comment').type(forms.productReply.comment);
  cy.get('#author').type(forms.productReply.name);
  cy.get('#email').type(forms.productReply.email);
});

Cypress.Commands.add('clickPostCommentButton', () => {
  cy.get('#commentform').within(() => {
    cy.get(`#submit`).click();
  });
});
