/// <reference types="cypress" />

import { PageObject } from '../page-object'

export class GmailPage extends PageObject {
  constructor() {
    const url = Cypress.env('GMAIL_URL')
    super('/');
    this.setDomain(url)
  }
}
