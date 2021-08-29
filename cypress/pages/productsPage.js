export function selectAllTshirts() {
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
   // cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
}