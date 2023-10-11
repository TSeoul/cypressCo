import   '../step_def/stepDef_Connexion.js';



// CONNEXION utilisateur 
   
export function loginValide() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env('USERNAME_USER_OK'));
    cy.xpath(Cypress.env.password).type(Cypress.env('PASSWORD_USER_OK'));
    cy.xpath(Cypress.env.btnConnexion).click();
    cy.contains('Bienvenue')

}

export function loginInvalide() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env('USERNAME_USER_NO_OK'));
    cy.xpath(Cypress.env.password).type(Cypress.env('PASSWORD_USER_NO_OK'));
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Identifiant')

}
export function loginAdminOk() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env('LOGIN_ADMIN_OK'));
    cy.xpath(Cypress.env.password).type(Cypress.env('PASSWORD_ADMIN_OK'));
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Bienvenue')

}

// EnvTest

export function loginValideKo() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env('USERNAME_USER_OK_KO'));
    cy.xpath(Cypress.env.password).type(Cypress.env('PASSWORD_USER_OK_KO'));
    cy.xpath(Cypress.env.btnConnexion).click();
    cy.contains('Bienvenue')

}

export function loginAdminKO() {
    cy.url().should('include', '/login')
    cy.contains('identifiant');
    cy.xpath(Cypress.env.login).type(Cypress.env('LOGIN_ADMIN_KO'));
    cy.xpath(Cypress.env.password).type(Cypress.env('PASSWORD_ADMIN_KO'));
    cy.xpath(Cypress.env.btnConnexion).click();
    //verification login
    cy.contains('Bienvenue')

}