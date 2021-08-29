import user from '../fixtures/user'

export function login(error, promise) {
   cy.visit('/');
   cy.get('#user-name').type(user.username);
   cy.get('#password').type(user.password);
   cy.get('#login-button').click();
 }