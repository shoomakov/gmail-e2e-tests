/// <reference types="cypress" />

import { PageObject } from '../page-object'
import { createUrl } from '~/cypress/support/page-objects/utils'

export class GmailPage extends PageObject {
  constructor() {
    const { GMAIL_URL } = Cypress.env()
    const url = createUrl(GMAIL_URL)
    super('/')
    this.setDomain(url)
  }
}
