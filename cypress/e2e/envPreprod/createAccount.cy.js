import '../page-objects/PageConnexion.js';
import {createAccountValide} from '../step-defs/stepsSubscription.js';


//JIRA-004
describe('create personal account', () => {
    beforeEach(() => {
  
      cy.visit(Cypress.env.URLokRegister)
    
    })
  

    it('valid input data', () => {
       
      createAccountValide();
    
    })
  
   
    })