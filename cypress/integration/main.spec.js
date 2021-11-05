/// <reference types="cypress" />

const PORT = process.env.PORT || 3000

describe('Pinia demo with counters', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:${PORT}`)
  })

  it('works', () => {
    cy.get('[data-testid=counter-values]')
      .should('contain.text', 'Counter: 2. Double: 4')
      .wait(500) // wait for the JS to load
      .get('[data-testid=increment]')
      .click()
      .get('[data-testid=counter-values]')
      .should('contain.text', 'Counter: 3. Double: 6')
      .get('[data-testid=increment]')
      .click()
  })
})
