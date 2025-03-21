/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'radoslaw.grzymala@hotmail.com';
  const password = 'Radko!23';
  const username = 'radek';

  beforeEach(() => {
    cy.visit('/user/login');
  });

  // eslint-disable-next-line max-len
  it('should log in with valid credentials and display username in header', () => {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();

    cy.get('.nav-item a').contains(username).should('be.visible');
  });
});
