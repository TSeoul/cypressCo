/// <reference types="cypress" />


describe('connexion utilisateur', () => {
    beforeEach(() => {

      cy.visit('https://opencruise-ok.sogeti-center.cloud/register')
    })
  
    it('rse connecte au compte valide', () => {
      
        cy.get('input[@formcontrolname="nom"]').type('Tam');
        cy.get('input[@formcontrolname="prenom"]').type('Tam');
        cy.get('.btn-btn-primary').click();
  
    
    })
  
   
    })
  
  