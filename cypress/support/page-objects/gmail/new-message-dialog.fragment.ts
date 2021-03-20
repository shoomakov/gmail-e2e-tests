/// <reference types="cypress-pipe" />
/// <reference types="cypress" />

import { FragmentObject } from '../../fragment-object'
import { Selector } from '../../selector'
import { StaticSelectors } from '../../static-selectors'
import { loggable } from 'cypress-pipe'
import { wrappedEl } from '../../utils'
const { ROLE_BUTTON_SELECTOR } = StaticSelectors

type ChainableWrapElement = Cypress.Chainable<JQuery<HTMLElement>>

const SEND = 'Отправить'

export class NewMessageDialogFragment extends FragmentObject {
  static readonly TEXTAREA_TO = new Selector('textarea[aria-label="Кому"]')
  static readonly INPUT_SUBJECT = new Selector('input[aria-label="Тема"]')
  static readonly DIV_MESSAGE_BODY = new Selector('[aria-label="Тело письма"]')

  constructor() {
    super('[aria-label="Новое сообщение"]');
  }

  fillForm(to: string, from: string, message: string): this {
    this.textAreaTo().type(to, { force: true })
    this.inputSubject().type(from, { force: true })
    this.messageBody().type(message, { force: true })

    return this
  }

  submit(): this {
    this.sendButton().click({ force: true })

    return this
  }

  textAreaTo = (): ChainableWrapElement =>
    this.wrap(NewMessageDialogFragment.TEXTAREA_TO)

  inputSubject = (): ChainableWrapElement => this.wrap(NewMessageDialogFragment.INPUT_SUBJECT)

  messageBody = (): ChainableWrapElement => this.wrap(NewMessageDialogFragment.DIV_MESSAGE_BODY)

  sendButton = (): ChainableWrapElement => this.wrap(ROLE_BUTTON_SELECTOR)
    .contains(SEND)
    .pipe(loggable(wrappedEl))
}
