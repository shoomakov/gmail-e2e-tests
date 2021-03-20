/// <reference types="cypress-pipe" />
/// <reference types="cypress" />

import { FragmentObject } from '../../fragment-object'
import { StaticSelectors } from '../../static-selectors'
import { loggable } from 'cypress-pipe'
import { NewMessageDialogFragment } from './new-message-dialog.fragment'
import { wrappedEl } from '../../utils'


const { ROLE_BUTTON_SELECTOR } = StaticSelectors
const WRITE = 'Написать'

export class OpenDialogButtonFragment extends FragmentObject {
  constructor() {
    super(ROLE_BUTTON_SELECTOR.getName());
  }

  open(): NewMessageDialogFragment {
    this.popupButton().should('be.visible')
    this.popupButton().click({ force: true }).wait(5000)

    return new NewMessageDialogFragment()
  }

  popupButton = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    this.wrap().contains(WRITE).pipe(loggable(wrappedEl))
}
