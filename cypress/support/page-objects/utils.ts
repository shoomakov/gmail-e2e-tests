/// <reference types="cypress" />

const protocol = Cypress.env('DEFAULT_PROTOCOL')
// const baseUrl = Cypress.config('baseUrl')

export function firstWrappedEl(
  $el: JQuery<HTMLElement> | HTMLElement,
): Cypress.Chainable<JQuery<any>> {
  return cy.wrap($el).first()
}

export function createUrl(
  origin: string,
  pathname: string = '',
  hash: string = '',
  query: string = '',
): string {
  return `${protocol}://${origin}/${pathname}${hash}${query}`
}
