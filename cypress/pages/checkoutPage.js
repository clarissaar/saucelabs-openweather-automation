    export function fillCheckoutInfo(firstname, lastname, zipcode) {
        cy.get('#first-name').type(firstname);
        cy.get('#last-name').type(lastname);
        cy.get('#postal-code').type(zipcode);

        cy.get('#continue').click();
        cy.get('#finish').click();

        cy.get('#checkout_complete_container').should('exist');
    }

    export function purchaseAllTshirts() {
        cy.get('#shopping_cart_container').click();

        cy.get('.inventory_item_name').eq(0).should('have.text','Sauce Labs Bolt T-Shirt');       
        cy.get('.inventory_item_name').eq(1).should('have.text','Test.allTheThings() T-Shirt (Red)');    
        cy.get(':nth-child(3) > .cart_quantity').should('have.text', '1');
        cy.get(':nth-child(4) > .cart_quantity').should('have.text', '1');
        cy.get('#checkout').click();
}