import '../page-objects/PageSubscription.js';


// KEYWORDS 

// SUBSCRIPTION utilisateur 
   
export function createAccountValide() {
        cy.get('input[type="radio"][value="1"]').check();
        //cy.xpath(Cypress.env.radioBtn).check();
        cy.xpath(Cypress.env.inputNom).first().type('Nom');
        cy.xpath(Cypress.env.inputPrenom).first().type('Prenom');
        cy.xpath(Cypress.env.inputDateNaissanceUser).first().type('2002-01-01');
        cy.xpath(Cypress.env.inputAdresse).first().type('Adresse');
        cy.xpath(Cypress.env.inputPays).first().select('France');
        cy.xpath(Cypress.env.inputVille).first().select('Nice');
        cy.xpath(Cypress.env.inputCP).first().type('CP');
        cy.xpath(Cypress.env.inputPassport).first().type('Passport');
        cy.xpath(Cypress.env.inputEmail).first().type('Email');
        cy.xpath(Cypress.env.inputTel).first().type('Tel');
        cy.xpath(Cypress.env.inputCin).first().type('Cin');
        cy.xpath(Cypress.env.inputPassword).first().type('Password');
        cy.xpath(Cypress.env.inputConfirmPassword).first().type('Password');
        cy.xpath(Cypress.env.inputPrenomConjoint).first().type('PrenomConjoint');
        cy.xpath(Cypress.env.inputNomConjoint).first().type('NomConjoint');
        cy.xpath(Cypress.env.inputDateNaissanceConjoint).first().type('2001-01-03');
        cy.xpath(Cypress.env.btnValider).first().click();
         //verification login
        cy.contains('Bienvenue');


        //cy.contains('input[formcontrolname="adresse"]').should('be.visible').first().type('2');
        
       
        //cy.contains('input[formcontrolname="currentPays"]/option[@value="2"]').should('be.visible');
        
    

}
