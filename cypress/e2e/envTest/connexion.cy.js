import '../page-objects/PageConnexion.js';
import '../page-objects/PageConnexionAdmin.js';
import {loginValideKo, loginInvalide, loginAdminKO} from '../step-defs/stepsConnexion.js';


//JIRA-001
  describe("L'objectif: tester la connexion utilisateur", () => {
    beforeEach(() => {
  
      cy.visit(Cypress.env.URLko)
    })
  
      it('Connexion utilisateur valide', () => {
      

          loginValideKo();


})  


    //JIRA-002
   
      it('Connexion mdp invalide', () => {
        
          loginInvalide();
    
      
      })
    
     //JIRA-003
      it('Connexion compte admin valide', () => {
        
        loginAdminKO();
    
    })
     
    })    

    