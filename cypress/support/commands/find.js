/// <reference types="cypress" />

import { Selector } from '../page-objects/selector'

/**
 * Find func
 * @param {Function} originalFn
 * @param {string|Selector} selector
 * @param {Partial<Loggable & Timeoutable & Shadow>} options
 * @returns {Chainable<JQuery<HTMLElement>>}
 */
const find = (originalFn, selector, options) => {
  Cypress.log({
    displayName: 'selector',
    message: selector,
  })

  const isSelectorInstance = selector instanceof Selector
  let $selector = isSelectorInstance ? selector.getName() : selector

  return originalFn($selector, options)
}

Cypress.Commands.overwrite('find', find)
