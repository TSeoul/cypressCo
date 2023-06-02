import   '../page-objects/PageConnexion.js';


// KEYWORDS 

// CONNEXION utilisateur 
   
export function loginValide() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env.usernameUserOk);
    cy.xpath(Cypress.env.password).type(Cypress.env.passwordUserOk);
    cy.xpath(Cypress.env.btnConnexion).click();
    cy.contains('Bienvenue')

}

export function loginInvalide() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env.usernameUserNoOk);
    cy.xpath(Cypress.env.password).type(Cypress.env.passwordUserNoOk);
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Identifiant')

}
export function loginAdminOk() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env.loginAdminOk);
    cy.xpath(Cypress.env.password).type(Cypress.env.passwordAdminOk);
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Bienvenue')

}

// EnvTest

export function loginValideKo() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env.usernameUserOkKo);
    cy.xpath(Cypress.env.password).type(Cypress.env.passwordUserOkKo);
    cy.xpath(Cypress.env.btnConnexion).click();
    cy.contains('Bienvenue')

}

export function loginAdminKO() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env.loginAdminKo);
    cy.xpath(Cypress.env.password).type(Cypress.env.passwordAdminKo);
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Bienvenue')

}