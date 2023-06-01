import '../../support/commands.js';

//JIRA-001
  describe('connexion utilisateur', () => {
    beforeEach(() => {
  
      cy.visit('https://opencruise-ko.sogeti-center.cloud/login')
    })
  
    it('connexion valide', () => {
      
        cy.xpath('//input[@formcontrolname="username"]').type('tom@yahoo.fr');
        cy.xpath('//input[@formcontrolname="password"]').type('Tompetit2');
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
          cy.url().should('include', 'https://opencruise-ko.sogeti-center.cloud');
    
      
      })
    
      //JIRA-006
      it('connexion adminKO', () => {
        
        cy.get('input[formcontrolname="username"]').type('admin2@test.com');
        cy.get('input[formcontrolname="password"]').type('Sogeti33');
        cy.get('button[class="btn btn-primary"]').click();

        //verification login
        
  
    
    })
     
    })
      
