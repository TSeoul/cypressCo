import '../page-objects/PageConnexion.js';
import {createAccountValide} from '../step-defs/stepsSubscription.js';



//JIRA-004
describe("L'objectif: tester la création de compte particulier", () => {
    beforeEach(() => {
  
      cy.visit(Cypress.env.URLokRegister)
    
    })
  

    it('Création de compte avec les données valides', () => {
       
      createAccountValide();
    
    })
  
   
    })