import '../page-objects/PageConnexion.js';
import '../page-objects/PageConnexionAdmin.js';
import {loginValide, loginInvalide, loginAdminOk} from '../step-defs/stepsConnexion.js';


//JIRA-001
  describe('connexion utilisateur', () => {
    beforeEach(() => {
  
      cy.visit(Cypress.env.URLok)
    })
  
      it('connexion valide', () => {
      

          loginValide();


})  


    //JIRA-002
   
      it('connexion invalide', () => {
        
          loginInvalide();
    
      
      })
    
     //JIRA-003
      it('connexion adminOK', () => {
        
        loginAdminOk();
    
    })
     
    })    

    