/// <reference types="cypress" />

import { AccountsSignInChallengePage } from './accounts-sign-in-challenge.page'
import { AccountsSignInChooserPage } from './accounts-sign-in-chooser.page'
import { GmailInboxPage } from './gmail-inbox.page'
import { GmailPage } from './gmail.page'
import { GmailAppInterface } from './gmail-app.interface'
import { AccountsSignInIdentifierPage } from '~/cypress/support/page-objects/gmail/accounts-sign-in-identifier.page'

export class GmailAppPages implements GmailAppInterface {
  public signInChallengePage: AccountsSignInChallengePage
  public signInChooserPage: AccountsSignInChooserPage
  public signInIdentifier: AccountsSignInIdentifierPage
  public gmailInboxPage: GmailInboxPage
  public gmailPage: GmailPage

  public constructor(di: string) {
    GmailPage.PATH_VAR = di
    this.gmailPage = new GmailPage()
    this.gmailInboxPage = new GmailInboxPage()
    this.signInChooserPage = new AccountsSignInChooserPage()
    this.signInChallengePage = new AccountsSignInChallengePage()
    this.signInIdentifier = new AccountsSignInIdentifierPage()
  }
}
