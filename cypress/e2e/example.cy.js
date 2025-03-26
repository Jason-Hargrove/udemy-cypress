/// <reference types="cypress" />

const url = Cypress.env('exampleUrl')

describe('Cypress E2E Testing Demo', () => {
  it('Assert Url', () => {
    cy.visit(url)
    cy.url().should('contain', 'example.com')
    cy.url().should('not.contain', 'mrcool.com')
  })

  it('Assert Title', () => {
    cy.visit(url)
    cy.title().should('contain', 'Example Domain')
  })

  it('Assert Element', () => {
    cy.visit(url)
    cy.get('h1').should('be.visible')
    cy.get('p').should('be.visible')
  })
}) 