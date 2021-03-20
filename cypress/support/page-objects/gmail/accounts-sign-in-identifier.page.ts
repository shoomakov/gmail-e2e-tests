import { PageObject } from '~/cypress/support/page-objects/page-object'
import { StaticSelectors } from '~/cypress/support/page-objects/static-selectors'
import { InputTypeEmailFragment } from '~/cypress/support/page-objects/gmail/input-type-email.fragment'

const NEXT = 'Далее'

export class AccountsSignInIdentifierPage extends PageObject {
  constructor() {
    super('/signin/v2/identifier')
  }

  public emailInput(): InputTypeEmailFragment {
    return new InputTypeEmailFragment()
  }

  public clickNext(): this {
    cy.intercept(/accountlookup/).as('accountlookup')
    this.nextButton().click({ force: true }).wait('@accountlookup')

    return this
  }

  nextButton = (): Cypress.Chainable<JQuery<HTMLSpanElement>> =>
    cy.get(StaticSelectors.TYPE_BUTTON.getName()).find('span').contains('Далі')
}
