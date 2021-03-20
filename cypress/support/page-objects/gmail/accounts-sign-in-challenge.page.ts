/// <reference types="cypress" />

import { PageObject } from '../page-object'

export class AccountsSignInChallengePage extends PageObject {
  constructor() {
    const url = Cypress.env('ACCOUNTS_GOOGLE_URL')
    super('/signin/v2/challenge/pwd')
    this.setDomain(url)
  }

  fillPassword(password: string): this {
    return this
  }

  submit() {}
}
