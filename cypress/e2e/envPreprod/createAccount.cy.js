describe('create personal account', () => {
    beforeEach(() => {
  
      cy.visit('https://opencruise-ok.sogeti-center.cloud/register')
    })
  

    it('valid input data', () => {
        cy.get('input[type="radio"][value="1"]').check();
      
        cy.get('input[formcontrolname="prenom"]').first().type('Blanc');
        cy.get('input[formcontrolname="nom"]').first().type('Tim');
        cy.get('input[formcontrolname="dateNaissance"]').first().type('2002-01-01');
        //cy.contains('input[formcontrolname="adresse"]').should('be.visible').first().type('2');
        cy.get('input[formcontrolname="adresse"]').first().type('2');
        //cy.get('select[formcontrolname="currentPays"][option="value"]').first().select('1');
        cy.xpath('//select[@formcontrolname="currentPays"]/option[2]').click();
        cy.get('select[formcontrolname="ville"][option="value"]').first().select('1');
        cy.get('input[formcontrolname="Code postal"]').first().type('69009');
        cy.get('input[formcontrolname="passport"]').first().type('7447584009');
        cy.get('input[formcontrolname="Email"]').first().type('t@yahoo.com');
        cy.get('input[formcontrolname="tel"]').first().type('0683747204');
        cy.get('input[formcontrolname="cin"]').first().type('4783747204');
        cy.get('input[formcontrolname="password"]').first().type('Tamtam2023');
        cy.get('input[formcontrolname="confirmPassword"]').first().type('Tamtam2023');
        cy.get('input[formcontrolname="nomConjoint"]').first().type('Tara');
        cy.get('input[formcontrolname="prenomConjoint"]').first().type('Boom');
        cy.get('input[formcontrolname="dateNaissanceConjoint"]').first().type('2001-01-03');




        cy.get('button[class="btn btn-primary"]').click();

        //verification login
        cy.url().should('include', 'https://opencruise-ok.sogeti-center.cloud');
  
    
    })
  
   
    })