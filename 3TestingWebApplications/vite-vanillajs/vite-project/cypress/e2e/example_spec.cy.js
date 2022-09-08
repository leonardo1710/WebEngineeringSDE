describe('test counter feature', () => {
  it('updates the counter on button click', () => {
    cy.visit('/') // visit the home page

    cy.get('#counter').should('have.text', 'count is 0') // check whether the text is correct
    cy.get('#counter').click() // emulate click event on button with id counter
    cy.get('#counter').should('have.text', 'count is 1') // check whether the text was updated correctly
  })
})