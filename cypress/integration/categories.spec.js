describe('Read activities in category card', () => {
  it('load localhost', () => {
    cy.visit('http://localhost:3000')
  })

  it('should open category cards', () => {
    cy.get('[data-cy="category"]').click({ multiple: true })
  })

  it('should close category cards', () => {
    cy.get('[data-cy="category"]').click({ multiple: true })
  })
})
