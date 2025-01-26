import { products } from '../fixtures/products';
import { shippingInformation } from '../fixtures/shipping';

describe('Product', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should purchase an item', () => {
    cy.getProduct(products.dnkYellowShoes.name)
      .parents('div[class="ec_product_type1"]')
      .contains('ADD TO CART')
      .click({ force: true });
    cy.clickViewCartButton();

    cy.clickCheckoutButton();
    cy.fillBillingInformation();
    cy.clickContinueToShippingButton();

    cy.clickOnShippingOption(shippingInformation.nextDay.label);
    cy.clickContinueToPaymentButton();

    cy.getProductInCheckout(products.dnkYellowShoes.name);
    cy.clickSubmitOrderButton(false);

    cy.getSubmitOrderFeedback();
  });

  it('Should update the quantity of an added product', () => {
    cy.getProduct(products.dnkYellowShoes.name)
      .parents('div[class="ec_product_type1"]')
      .contains('ADD TO CART')
      .click({ force: true });
    cy.clickViewCartButton();

    cy.clickIncreaseQuantityButton(1);
    cy.getQuantityInputField().should('have.value', '2');
    cy.clickUpdateButton();
    cy.waitForLoading(5000);
    cy.getCartSubtotal(products.dnkYellowShoes.price * 2);
  });

  it('Should remove a product from cart', () => {
    cy.getProduct(products.dnkYellowShoes.name)
      .parents('div[class="ec_product_type1"]')
      .contains('ADD TO CART')
      .click({ force: true });
    cy.clickViewCartButton();

    cy.getProductInCart(products.dnkYellowShoes.name)
      .parents('tr.ec_cartitem_row')
      .within(() => {
        cy.get('div.ec_cartitem_delete').click();
      });
    cy.isCartEmpty(true);
  });
});
