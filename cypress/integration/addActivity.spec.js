describe('Add new activity', () => {
  it('opens the form', () => {
    cy.visit('http://localhost:3000')
    cy.get('main button').click()
  })

  it('fills in the form', () => {
    cy.get('form button').should('disabled')
    cy.get('input[name=name]').should('be.focused')

    cy.get('input[name=name]').type('Master Cypress')
    cy.get('select[name=category]').select('Personal time')
    cy.get('input[name=hours]').type('2')
  })

  it('submits the form', () => {
    cy.get('form button').click()
  })

  it('clears all form fields after creation', () => {
    cy.get('input[name=name]').should('be.focused')
    cy.get('input[name="name"]').should('be.empty')
    cy.get('select[name="category"]').should('have.value', 'Choose category')
    cy.get('input[name="hours"]').should('be.empty')
    cy.get('form button').should('disabled')
  })

  it('closes the form', () => {
    cy.get('[data-cy="close-form"]').click()
  })
})
