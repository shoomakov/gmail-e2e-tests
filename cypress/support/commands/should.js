/// <reference types="cypress" />

Cypress.Commands.overwrite('should', (originalFn, actual, assertion, expected, options) => {
  Cypress.log({
    displayName: 'should info',
    message: { expected, options, assertion, actual },
  })
  if (options && options.message) {
    cy.removeAllListeners('fail')
    // And we're starting from fresh!
    cy.on('fail', (error, runnable) => {
      // tslint:disable-next-line:no-console

      error.name = 'CypressError'
      error.message = options.message
      throw error
    })
  }

  return originalFn(actual, assertion, expected, options)
})
