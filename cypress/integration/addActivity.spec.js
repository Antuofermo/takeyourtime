describe('Add new activity', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.get('main button').click()

    cy.get('input[name=name]').type('Master Cypress')

    cy.get('select[name=category]').select('Personal time')

    cy.get('input[name=hours]').type('2')
  })

  it('clears all form fields after creation', () => {
    cy.get('form button').click()

    cy.get('input[name="name"]').should('be.empty')
    cy.get('select[name="category"]').should('have.value', 'Choose category')
    cy.get('input[name="hours"]').should('be.empty')
  })
})
