import { products } from '../fixtures/products';

describe('Product', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should add multiple items to cart', () => {
    cy.getFirstProduct().click();
    cy.clickIncreaseQuantityButton(1);
    cy.getQuantityInputField().should('have.value', '2');
    cy.clickAddToCartButton();
    cy.getQuantityInputField().should('have.value', '2');
  });

  it('Should add a product with colour options to cart', () => {
    cy.getProduct(products.denimCoat.name)
      .parents('div[class="ec_product_type1"]')
      .contains('Select Options')
      .click({ force: true });

    cy.clickColourOptionButton('Green');
    cy.getColourValue('Green');
    cy.clickAddToCartButton();
    cy.getProductInCart(products.denimCoat.name)
    .parent('td')
    .contains('Green')
  });

  // Test will fail because of a bug in the application
  it('Should add a comment on a product', () => {
    cy.getFirstProduct().click();
    cy.fillReplySection();
    cy.clickPostCommentButton();
    //Step below fails the test due to an intentional bug
    cy.get('div[class="academy-bug-info-overlay"]').should('not.contain.text', "crash")

  });
});
