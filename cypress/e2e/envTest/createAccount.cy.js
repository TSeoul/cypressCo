
import '../page_object/po_Connexion.js';
import {createAccountValide} from '../page_object/po_Subscription.js';



describe("L'objectif: tester la création de compte particulier", () => {
    beforeEach(() => {
  
      cy.visit(Cypress.env('URLkoRegister'))
    })
  

    it('Création de compte avec les données valides', () => {
        

      createAccountValide();
  
    
    })
  
   
    })