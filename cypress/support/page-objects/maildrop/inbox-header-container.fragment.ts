/// <reference types="cypress" />

import { FragmentObject } from '../fragment-object'
import { Selector } from '../selector'

export class InboxHeaderContainerFragment extends FragmentObject {
  private static MESSAGE_TOTAL_CONTAINER = new Selector('.messagetotal-container')

  constructor() {
    super('.inboxheader-container')
  }

  messageTotalContainer = () =>
    this.wrap().find(InboxHeaderContainerFragment.MESSAGE_TOTAL_CONTAINER.getName())
}
