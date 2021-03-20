/// <reference types="cypress" />
/// <reference types="cypress-commands" />

import { FragmentObject } from '../fragment-object'
import { Selector } from '../selector'

export class MessageListContainerFragment extends FragmentObject {
  static ROW = new Selector('.messagelist-row')

  static ROW_LINK = new Selector('.messagelist-row-link')

  static MESSAGE_LIST_SUBJECT = new Selector('.messagelist-subject')

  constructor() {
    super('.messagelist-container')
  }

  getSubjectText(): Cypress.Chainable<JQuery<HTMLSpanElement>> {
    return this.messageListSubject().find('span').text()
  }

  findMailBySubject(subject: string) {
    return this.messageListSubject().find('span').contains(subject)
  }

  row = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    this.wrap().find(MessageListContainerFragment.ROW.getName())

  rowLink = (): Cypress.Chainable<JQuery<HTMLAnchorElement>> =>
    this.row().find(MessageListContainerFragment.ROW_LINK.getName())

  messageListSubject = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    this.wrap().find(MessageListContainerFragment.MESSAGE_LIST_SUBJECT.getName())
}
