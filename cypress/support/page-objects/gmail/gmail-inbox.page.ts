/// <reference types="cypress" />

import { PageObject } from '../page-object'
import { OpenDialogButtonFragment } from './open-dialog-button.fragment'

const writeButton = new OpenDialogButtonFragment()

export class GmailInboxPage extends PageObject {
  constructor() {
    const url = Cypress.env('MAIL_GOOGLE_URL')
    super('/mail/u/0/')
    this.setDomain(url)
    this.setHash('#inbox')
  }

  openWriteDialog() {
    return writeButton.open()
  }
}
