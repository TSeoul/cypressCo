import '../page-objects/PageConnexion.js';

//JIRA-001
  describe('connexion utilisateur', () => {
    beforeEach(() => {
  
    
      cy.visit(Cypress.env.URLko)
    })
  
    it.only('connexion valide', () => {
      
        cy.xpath('//input[@formcontrolname="username"]').type('usernameUserOkKo');
        cy.xpath('//input[@formcontrolname="password"]').type('passwordUserOkKo');
        cy.xpath('//button[@class="btn btn-primary"]').click();
        

        //verification login
        cy.contains('Bienvenue')
  
    
    })
  
   

    //JIRA-002
    
      it('connexion invalide', () => {
        
          cy.xpath('//input[@formcontrolname="username"]').type('usernameUserNoKo');
          cy.xpath('//input[@formcontrolname="password"]').type('passwordUserNoKo');
          cy.xpath('//button[@class="btn btn-primary"]').click();
  
          //verification login
          cy.url().should('include', 'https://opencruise-ko.sogeti-center.cloud');
    
      
      })
    
      //JIRA-003
      it('connexion adminKO', () => {
      

        cy.get('input[formcontrolname="username"]').type(Cypress.env('loginAdminKo'));
        cy.get('input[formcontrolname="password"]').type(Cypress.env('passwordAdminKo'));
        cy.get('button[class="btn btn-primary"]').click();

        //verification login
        cy.contains('Bienvenue')
  
    
    })
     
    })
      
