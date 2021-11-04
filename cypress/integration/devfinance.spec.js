///   <reference types="cypress" />

describe('DevFinance', () => {
    it('Adicionar uma nova entrada de entrada', () => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')   
    cy.get('a[onclick*=open]').click() 
    cy.get('#description').type('Automação')
    cy.get('#amount').type('10')
    cy.get('#date').type('2021-09-25')
    
    cy.contains('button', 'Salvar').click()

    cy.get('table tbody tr').should('have.length', 1)
    cy.get('#data-table > tbody > tr > td:nth-child(4) > img').click()
    cy.get('table tbody tr').should('have.length', 0)
    


});
});