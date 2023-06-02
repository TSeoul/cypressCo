describe("HTTP Resquest",()=> {

    it("get", ()=>{

        cy.request('GET','https://opencruise-ok.sogeti-center.cloud/')
        .its('status')
        .should('equal',200);

    })

})