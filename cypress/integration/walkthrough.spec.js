describe('Walk through Application', () => {
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

  it('fills in the form a second time', () => {
    cy.get('form button').should('disabled')
    cy.get('input[name=name]').should('be.focused')

    cy.get('input[name=name]').type('Create new App')
    cy.get('select[name=category]').select('Personal time')
    cy.get('input[name=hours]').type('7')
  })

  it('submits the form', () => {
    cy.get('form button').click()
  })

  it('closes the form', () => {
    cy.get('[data-cy="close-form"]').click()
  })

  it('opens all category cards', () => {
    cy.get('[data-cy="category"]').click({ multiple: true })
  })

  it('scroll to first category', () => {
    cy.get('[data-cy="category"]')
      .first()
      .scrollIntoView()
  })

  it('delete the activity in first category card', () => {
    cy.get('[data-cy="delete-activity"]')
      .first()
      .click()
  })

  it('closes all category cards', () => {
    cy.get('[data-cy="category"]').click({ multiple: true })
  })
})
