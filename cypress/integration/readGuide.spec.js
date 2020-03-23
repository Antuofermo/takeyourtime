describe('Go through guide', () => {
  it('opens the guide', () => {
    cy.visit('http://localhost:3000')
    cy.get('[alt="App guide"]').click()
  })

  it('scrolls through guide', () => {
    cy.get('[data-cy="close-guide"]').scrollIntoView()
  })

  it('closes the modal guide', () => {
    cy.get('[data-cy="close-guide"]').click()
  })
})
