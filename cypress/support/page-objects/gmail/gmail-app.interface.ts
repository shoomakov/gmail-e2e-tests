/// <reference types="cypress" />

import { GmailPage } from './gmail.page'
import { GmailInboxPage } from './gmail-inbox.page'
import { AccountsSignInChallengePage } from './accounts-sign-in-challenge.page'
import { AccountsSignInChooserPage } from './accounts-sign-in-chooser.page'
import { AccountsSignInIdentifierPage } from '~/cypress/support/page-objects/gmail/accounts-sign-in-identifier.page'

export interface GoogleAccountsInterface {
  signInChooserPage: AccountsSignInChooserPage

  signInChallengePage: AccountsSignInChallengePage

  signInIdentifier: AccountsSignInIdentifierPage
}

export interface GmailInterface {
  // inbox messages page
  gmailInboxPage: GmailInboxPage
}

export interface GmailAppInterface extends GoogleAccountsInterface, GmailInterface {
  // редирект на google сервис
  gmailPage: GmailPage
}
