import '../../support/commands.js';

//JIRA-001
  describe('connexion utilisateur', () => {
    beforeEach(() => {
  
      cy.visit('https://opencruise-ok.sogeti-center.cloud/login')
    })
  
    it('connexion valide', () => {
      
        cy.xpath('//input[@formcontrolname="username"]').type('tam@yahoo.fr');
        cy.xpath('//input[@formcontrolname="password"]').type('Formation2023');
        cy.xpath('//button[@class="btn btn-primary"]').click();
        

        //verification login
        cy.xpath('//video[@id="myVideo"]').click();
  
    
    })
  
   
  

    //JIRA-002
   
      it('connexion invalide', () => {
        
          cy.xpath('//input[@formcontrolname="username"]').type('Tom');
          cy.xpath('//input[@formcontrolname="password"]').type('Tam');
          cy.xpath('//button[@class="btn btn-primary"]').click();
  
          //verification login
          cy.url().should('include', 'https://opencruise-ok.sogeti-center.cloud');
    
      
      })
    
     //JIRA-006
      it('connexion adminOK', () => {
        
        cy.get('input[formcontrolname="username"]').type($loginAdminOk);
        cy.get('input[formcontrolname="password"]').type($passwordAdminOk);
        cy.get('button[class="btn btn-primary"]').click();

        //verification login
        
  
    
    })
     
    })    

    