describe('delete Activity', () => {
  it('load localhost', () => {
    cy.visit('http://localhost:3000')
  })

  it('opens the first category card', () => {
    cy.get('[data-cy="category"]')
      .first()
      .click()
  })

  it('delete the activity in first category card', () => {
    cy.get('[data-cy="delete-activity"]')
      .first()
      .click()
  })

  it('closes the first category card', () => {
    cy.get('[data-cy="category"]')
      .first()
      .click()
  })
})
