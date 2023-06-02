import '../page-objects/PageSubscription.js';


// KEYWORDS 

// SUBSCRIPTION utilisateur 
   
export function createAccountValide() {
        cy.url().should('include', '/register')
        cy.contains('Formulaire');
        cy.get('input[type="radio"][value="1"]').check();
        //cy.xpath(Cypress.env.radioBtn).check();
        cy.xpath(Cypress.env.inputNom).first().type(Cypress.env.Nom);
        cy.xpath(Cypress.env.inputPrenom).first().type(Cypress.env.Prenom);
        cy.xpath(Cypress.env.inputDateNaissanceUser).first().type(Cypress.env.DateNaissanceUser);
        cy.xpath(Cypress.env.inputAdresse).first().type(Cypress.env.Adresse);
        cy.xpath(Cypress.env.inputPays).first().select(Cypress.env.Pays);
        cy.xpath(Cypress.env.inputVille).first().select(Cypress.env.Ville);
        cy.xpath(Cypress.env.inputCP).first().type(Cypress.env.CP);
        cy.xpath(Cypress.env.inputPassport).first().type(Cypress.env.Passport);
        cy.xpath(Cypress.env.inputCin).first().type('4783747204');
        cy.xpath(Cypress.env.inputEmail).first().type(Cypress.env.Email);
        cy.xpath(Cypress.env.inputTel).first().type(Cypress.env.Tel);
        
        cy.xpath(Cypress.env.inputPassword).first().type(Cypress.env.Password);
        cy.xpath(Cypress.env.inputConfirmPassword).first().type(Cypress.env.Password);
        cy.xpath(Cypress.env.inputPrenomConjoint).first().type(Cypress.env.PrenomConjoint);
        cy.xpath(Cypress.env.inputNomConjoint).first().type(Cypress.env.NomConjoint);
        cy.xpath(Cypress.env.inputDateNaissanceConjoint).first().type(Cypress.env.DateNaissanceConjoint);
        cy.xpath(Cypress.env.btnValider).first().click();
         //verification login
        cy.contains('Bienvenue');


        //cy.contains('input[formcontrolname="adresse"]').should('be.visible').first().type('2');
        
       
        //cy.contains('input[formcontrolname="currentPays"]/option[@value="2"]').should('be.visible');
        
    

}
