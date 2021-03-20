/// <reference types="cypress-pipe" />
/// <reference types="cypress" />

import { PageObject } from '../../page-object'
import { OpenDialogButtonFragment } from './open-dialog-button.fragment'

const writeButton = new OpenDialogButtonFragment()

/**
 * @example
 * https://mail.google.com/mail/u/0/#inbox
 */
export class GmailInboxPage extends PageObject {
  constructor() {
    super('/mail/u/0/');
    this.setDomain('https://mail.google.com')
    this.setHash('#inbox')
  }

  openWriteDialog() {
    return writeButton.open()
  }
}
