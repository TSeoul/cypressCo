


describe('connexion utilisateur', () => {
  beforeEach(() => {

    cy.visit('https://opencruise-ok.sogeti-center.cloud/login')
  })

  it('connexion valide', () => {
    
      cy.get('input[formcontrolname="username"]').type('Tam');
      cy.get('input[formcontrolname="password"]').type('Tam');
      cy.get('button[class="btn btn-primary"]').click();

  
  })

 
  })

  describe('connexion utilisateur', () => {
    beforeEach(() => {
  
      cy.visit('https://opencruise-ok.sogeti-center.cloud/login')
    })
  
    it('connexion invalide', () => {
      
        cy.get('input[formcontrolname="username"]').type('Tom');
        cy.get('input[formcontrolname="password"]').type('Tam');
        cy.get('button[class="btn btn-primary"]').click();

        //verif
        cy.url().should('include', 'https://opencruise-ok.sogeti-center.cloud');
  
    
    })
  
   
    })

