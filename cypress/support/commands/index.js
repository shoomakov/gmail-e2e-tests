/// <reference types="cypress" />

import 'cypress-pipe'
import 'cypress-commands'
import 'cypress-localstorage-commands'
import './should'
import './find'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
