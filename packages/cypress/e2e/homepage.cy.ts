import { products } from '../fixtures/products';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // Test will fail because of an intentional bug in the application
  it('Should change the pagination size', () => {
    cy.clickPaginationButton(10);
    cy.getResultCount(10);
  });

  it('Should sort the products by price', () => {
    cy.clickSortDropdownOption('Price Low-High');
    cy.getFirstProduct().contains(products.flamingoTShirt.name);
  });

  // Test will fail because of an intentional bug in the application
  it('Should change the currency of the products', () => {
    cy.clickCurrencyOption('EUR');
    cy.getFirstProduct()
      .parent('.ec_product_type1')
      .find('.ec_price_type1')
      .should('contain.text', '€');
  });

  it('Should search for a product', () => {
    cy.getProductSerchInput().type('Chain');
    cy.clickSearchButton();
    cy.getResultCount(1);
    cy.getFirstProduct().contains(products.brightGoldPurseWithChain.name);
  });

  it('Should filter the products by price', () => {
    cy.clickFilterByPriceOption('Greater Than $299.99');
    cy.getResultCount(1);
    cy.getFirstProduct().contains(products.blackOverTheShoulderHandbag.name);
  });
});