/// <reference types="cypress" />

import { FragmentObject } from '../fragment-object'
import { Selector } from '../selector'
import { InboxHeaderContainerFragment } from './inbox-header-container.fragment'
import { MessageListContainerFragment } from './message-list-container.fragment'

export class InboxMainSectionFragment extends FragmentObject {
  static readonly INBOX_TITLE = new Selector('.inbox-title')
  constructor() {
    super('.inbox-main-section')
  }

  headerContainer(): InboxHeaderContainerFragment {
    return new InboxHeaderContainerFragment()
  }

  messageListContainer(): MessageListContainerFragment {
    return new MessageListContainerFragment()
  }

  title = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    this.wrap().find(InboxMainSectionFragment.INBOX_TITLE.getName())
}
