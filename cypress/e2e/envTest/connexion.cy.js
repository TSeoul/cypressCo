import '../page-objects/PageConnexion.js';
import '../page-objects/PageConnexionAdmin.js';
import {loginValideKo, loginInvalide, loginAdminKO} from '../step-defs/stepsConnexion.js';


//JIRA-001
  describe('connexion utilisateur', () => {
    beforeEach(() => {
  
      cy.visit(Cypress.env.URLko)
    })
  
      it('connexion valide', () => {
      

          loginValideKo();


})  


    //JIRA-002
   
      it('connexion invalide', () => {
        
          loginInvalide();
    
      
      })
    
     //JIRA-003
      it('connexion adminKO', () => {
        
        loginAdminKO();
    
    })
     
    })    

    