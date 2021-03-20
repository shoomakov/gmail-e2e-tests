/// <reference types="cypress" />

import { PageObject } from '../page-object'
import { InboxMainSectionFragment } from './inbox-main-section.fragment'

export class MailDropInboxPage extends PageObject {
  constructor() {
    const url = Cypress.env('MAIL_DROP_URL')
    super('/inbox/{{path}}')
    this.setDomain(url)
  }

  mainSection(): InboxMainSectionFragment {
    return new InboxMainSectionFragment()
  }
}
