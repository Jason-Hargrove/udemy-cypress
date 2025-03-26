/// <reference types="cypress" />

const url = Cypress.env('baseUrl')

describe('MRCOOL Dev Environment Tests', () => {
  beforeEach(() => {
    // Log exceptions but don't fail the test
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Log the errors and make them obvious
      Cypress.log({
        name: 'Uncaught Exception',
        message: `Error: ${err.message}\nStack: ${err.stack}\nTest: ${runnable.title}`,
        error: err
      })
      // Never fai!
      return false
    })
  })

  it('Should load the dev homepage', () => {
    cy.visit(url)
    cy.url().should('include', 'dev.mrcool.work')
  })

  it('Should have correct title', () => {
    cy.visit(url)
    cy.title().should('include', 'MRCOOL')
  })

  it('Should have main navigation elements', () => {
    cy.visit(url)
    cy.get('nav').should('exist')
    cy.get('nav a').should('have.length.greaterThan', 0)
  })

  it('Should have proper meta tags', () => {
    cy.visit(url)
    cy.get('meta[name="description"]').should('exist')
    cy.get('meta[name="viewport"]').should('exist')
  })

  it('Should load all required assets', () => {
    cy.visit(url)
    // Check for Next.js specific scripts
    cy.get('script[src*="_next"]').should('have.length.greaterThan', 0)
    // Check for required stylesheets
    cy.get('link[rel="stylesheet"]').should('have.length.greaterThan', 0)
  })
})