import '../page-objects/PageConnexion.js';


//JIRA-001
  describe('connexion utilisateur', () => {
    beforeEach(() => {
  
      cy.visit(Cypress.env.URLok)
    })
  
    it('connexion valide', () => {
      
        cy.xpath(Cypress.env.login).type("usernameUserOk");
        cy.xpath(Cypress.env.password).type("passwordUserOk");
        cy.xpath(Cypress.env.btnConnexion).click();
        

        //verification login
        cy.contains('Bienvenue')
  
    
    })
  
   


    //JIRA-002
   
      it('connexion invalide', () => {
        
          cy.xpath(Cypress.env.login).type("usernameUserNoOk");
          cy.xpath(Cypress.env.password).type("passwordUserNoOk");
          cy.xpath(Cypress.env.btnConnexion).click();
  
          //verification login
          cy.url().should('include', 'https://opencruise-ok.sogeti-center.cloud');
    
      
      })
    
     //JIRA-003
      it('connexion adminOK', () => {
        

        cy.xpath(Cypress.env.login).type("loginAdminOk");
        cy.xpath(Cypress.env.password).type("passwordAdminOk");
        cy.xpath(Cypress.env.btnConnexion).click();

        //verification login
        cy.contains('Bienvenue')
  
    
    })
     
    })    

    