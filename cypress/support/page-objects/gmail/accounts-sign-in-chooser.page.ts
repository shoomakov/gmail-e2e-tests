/// <reference types="cypress" />

import { PageObject } from '../page-object'
import { AccountsSignInChallengePage } from './accounts-sign-in-challenge.page'

export class AccountsSignInChooserPage extends PageObject {
  public constructor() {
    const url = Cypress.env('ACCOUNTS_GOOGLE_URL')
    super('/ServiceLogin/signinchooser')
    this.setDomain(url)
  }

  selectFirstUser(): AccountsSignInChallengePage {
    return new AccountsSignInChallengePage()
  }
}
