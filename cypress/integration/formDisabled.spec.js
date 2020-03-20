describe('Submit button disabled', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.get('main button').click()
  })

  it('disables submit button when all fields are empty', () => {
    cy.get('input[name="name"]').should('be.empty')
    cy.get('select[name="category"]').should('have.value', 'Choose category')
    cy.get('input[name="hours"]').should('be.empty')

    cy.get('form button').should('disabled')
  })

  it('disables submit button when input name is less than 3 characters"', () => {
    cy.get('input[name="name"]').type('l')
    cy.get('select[name=category]').select('Choose category')
    cy.get('input[name="hours"]').should('be.empty')

    cy.get('form button').should('disabled')
  })

  it('disables submit button when selected category is "Choose category"', () => {
    cy.get('input[name="name"]').should('be.empty')
    cy.get('select[name=category]').select('Choose category')
    cy.get('input[name="hours"]').should('be.empty')

    cy.get('form button').should('disabled')
  })

  it('disables submit button when hours input is more than 25', () => {
    cy.get('input[name="name"]').should('be.empty')
    cy.get('select[name=category]').select('Choose category')
    cy.get('input[name="hours"]').type('25')

    cy.get('form button').should('disabled')
  })
})
