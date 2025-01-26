import { forms } from '../fixtures/forms';

declare global {
  namespace Cypress {
    interface Chainable {
      getProductInCart(productName: string): Chainable<void>;
      clickCheckoutButton(): Chainable<void>;
      fillBillingInformation(): Chainable<void>;
      clickContinueToShippingButton(): Chainable<void>;
      clickOnShippingOption(option: string): Chainable<void>;
      clickContinueToPaymentButton(): Chainable<void>;
      getProductInCheckout(product: string): Chainable<void>;
      clickSubmitOrderButton(clickSubscribe: boolean): Chainable<void>;
      getSubmitOrderFeedback(): Chainable<void>;
      clickUpdateButton(): Chainable<void>;
      waitForLoading(timeout: number): Chainable<void>;
      getCartSubtotal(value: number): Chainable<void>;
      isCartEmpty(state: boolean): Chainable<void>;
    }
  }
}

Cypress.Commands.add('getProductInCart', (productName) => {
  cy.get('td[class="ec_cartitem_details"]').contains(productName);
});

Cypress.Commands.add('clickCheckoutButton', () => {
  cy.get('a.ec_cart_button_checkout').click();
});

Cypress.Commands.add('fillBillingInformation', () => {
  cy.get('select#ec_cart_billing_country').select(
    forms.billingInformation.country
  );
  cy.get('#ec_cart_billing_first_name').type(forms.billingInformation.name);
  cy.get('#ec_cart_billing_last_name').type(forms.billingInformation.lastName);
  cy.get('#ec_cart_billing_address').type(forms.billingInformation.address);
  cy.get('#ec_cart_billing_city').type(forms.billingInformation.city);
  cy.get('#ec_cart_billing_zip').type(forms.billingInformation.zipCode);
  cy.get('#ec_cart_billing_phone').type(forms.billingInformation.phone);
  cy.get('#ec_contact_email').type(forms.billingInformation.email);
  cy.get('#ec_contact_email_retype').type(forms.billingInformation.retypeEmail);
});

Cypress.Commands.add('clickContinueToShippingButton', () => {
  cy.get('input.ec_checkout_details_submit').first().click();
});

Cypress.Commands.add('clickOnShippingOption', (option) => {
  cy.get('div.ec_cart_shipping_method_row')
    .contains(option)
    .within(() => {
      cy.get('input').click();
    });
});

Cypress.Commands.add('clickContinueToPaymentButton', () => {
  cy.get('input.ec_cart_button_shipping_next').click();
});

Cypress.Commands.add('getProductInCheckout', (product) => {
  cy.get('div.ec_cart_price_row_label').should('contains.text', product);
});

Cypress.Commands.add('clickSubmitOrderButton', (clickSubscribe) => {
  if (clickSubscribe) {
    cy.get('#ec_cart_is_subscriber').click();
  }
  cy.get('input#ec_cart_submit_order').click();
});

//Command is currently invalid due to the application not allowing real purchases
Cypress.Commands.add('getSubmitOrderFeedback', () => {
  cy.get('h5.example-tile-heading').should('contain.text', 'Not a real order');
});

Cypress.Commands.add('clickUpdateButton', () => {
  cy.get('div.ec_cartitem_update_button').click();
});

Cypress.Commands.add('getCartSubtotal', (value) => {
  cy.get('div.ec_cart_price_row_subtotal').should('contains.text', value);
});

Cypress.Commands.add('waitForLoading', (timeout) => {
  cy.get('div.ec_cartitem_updating').should('not.be.visible', {
    timeout: timeout,
  });
});

Cypress.Commands.add('isCartEmpty', (state) => {
  if (state) {
    cy.get('div.ec_cart_empty').should(
      'contain.text',
      'There are no items in your cart.'
    );
  } else {
    cy.get('div.ec_cart_empty').should('not.be.visible');
  }
});
