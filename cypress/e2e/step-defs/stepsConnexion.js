import '../page-objects/PageConnexion.js';

// KEYWORDS 

// CONNEXION utilisateur 
   
export function loginValide() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type("usernameUserOk");
    cy.xpath(Cypress.env.password).type("passwordUserOk");
    cy.xpath(Cypress.env.btnConnexion).click();
    cy.contains('Bienvenue')

}

export function loginInvalide() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type("usernameUserNoOk");
    cy.xpath(Cypress.env.password).type("passwordUserNoOk");
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Identifiant')

}
export function loginAdminOk() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type("loginAdminOk");
    cy.xpath(Cypress.env.password).type("passwordAdminOk");
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Bienvenue')

}

// EnvTest

export function loginValideKo() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type("usernameUserOkKo");
    cy.xpath(Cypress.env.password).type("passwordUserOkKo");
    cy.xpath(Cypress.env.btnConnexion).click();
    cy.contains('Bienvenue')

}

export function loginAdminKO() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type("loginAdminKo");
    cy.xpath(Cypress.env.password).type("passwordAdminKo");
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Bienvenue')

}