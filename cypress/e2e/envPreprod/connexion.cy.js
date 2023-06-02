import '../page-objects/PageConnexion.js';
import '../page-objects/PageConnexionAdmin.js';
import {loginValide, loginInvalide, loginAdminOk} from '../step-defs/stepsConnexion.js';



//JIRA-001
  describe("L'objectif: tester la connexion utilisateur", () => {
    beforeEach(() => {
  
      cy.visit(Cypress.env.URLok)
    })
  
      it('Connexion utilisateur valide', () => {
      

          loginValide();


})  


    //JIRA-002
   
      it('Connexion utilisateur invalide', () => {
        
          loginInvalide();
    
      
      })
    
     //JIRA-003
      it('Connexion compte admin valide', () => {
        
        loginAdminOk();
    
    })
     
    })    

    