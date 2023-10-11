import '../step_def/stepDef_Subscription.js';
import {faker} from '@faker-js/faker';


// SUBSCRIPTION utilisateur 
const phone = faker.phone.imei();
const email = faker.internet.email();
const prenom = faker.person.firstName();
const nom = faker.person.lastName();


export function createAccountValide() {

        cy.url().should('include', '/register')
        cy.contains('Formulaire');
        cy.get('input[type="radio"][value="1"]').check();
        //cy.xpath(Cypress.env.radioBtn).check();
        cy.xpath(Cypress.env.inputNom).first().type(nom);
        cy.xpath(Cypress.env.inputPrenom).first().type(prenom);
        cy.xpath(Cypress.env.inputDateNaissanceUser).first().type(Cypress.env('DateNaissanceUser'));
        cy.xpath(Cypress.env.inputAdresse).first().type(Cypress.env('Adresse'));
        cy.xpath(Cypress.env.inputPays).first().select(Cypress.env('Pays'));
        cy.xpath(Cypress.env.inputVille).first().select(Cypress.env('Ville'));
        cy.xpath(Cypress.env.inputCP).first().type(Cypress.env('CP'));
        cy.xpath(Cypress.env.inputPassport).first().type(Cypress.env('Passport'));
        cy.xpath(Cypress.env.inputCin).first().type(Cypress.env('Cin'));
        cy.xpath(Cypress.env.inputEmail).first().type(email);
        cy.xpath(Cypress.env.inputTel).first().type(phone);
        cy.xpath(Cypress.env.inputPassword).first().type(Cypress.env('Password'));
        cy.xpath(Cypress.env.inputConfirmPassword).first().type(Cypress.env('Password'));
        cy.xpath(Cypress.env.inputPrenomConjoint).first().type(Cypress.env('PrenomConjoint'));
        cy.xpath(Cypress.env.inputNomConjoint).first().type(Cypress.env('NomConjoint'));
        cy.xpath(Cypress.env.inputDateNaissanceConjoint).first().type(Cypress.env('DateNaissanceConjoint'));
        cy.xpath(Cypress.env.btnValider).first().click();

         //verification login
        cy.url().should('include', '/login');



        //cy.contains('input[formcontrolname="adresse"]').should('be.visible').first().type('2');
        
       
        //cy.contains('input[formcontrolname="currentPays"]/option[@value="2"]').should('be.visible');
        
    

}
