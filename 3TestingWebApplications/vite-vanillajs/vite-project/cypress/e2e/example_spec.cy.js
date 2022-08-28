describe('simple cypress e2e test', () => {
  it('updates the counter on button click', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('#counter').should('have.text', 'count is 0')
    //cy.contains('#counter', 'count is 0')
    cy.get('#counter').click()
    cy.get('#counter').should('have.text', 'count is 1')
  })
})