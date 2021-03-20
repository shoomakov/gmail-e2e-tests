/// <reference types="cypress" />

import { Selector } from './page-objects/selector'

export enum OriginsEnum {
  MAIL_GOOGLE_URL = 'MAIL_GOOGLE_URL',
  ACCOUNTS_GOOGLE_URL = 'ACCOUNTS_GOOGLE_URL',
  GMAIL_URL = 'GMAIL_URL',
  MAIL_DROP_URL = 'MAIL_DROP_URL',
}

export enum ConfigEnvEnum {
  DEFAULT_PROTOCOL = 'DEFAULT_PROTOCOL',
}

export enum GmailButtonTextEnum {
  WRITE,
  SEND,
}

declare namespace Cypress {
  // let CypressConfigEnv: CypressConfigEnvType
  //
  // CypressConfigEnv = Object.assign({}, OriginsEnum, ConfigEnvEnum)
  // export class Loggable {
  // }
  //
  // export class Timeoutable {
  // }
  //
  // export class Shadow {
  // }

  interface Chainable<Subject> {
    find<E extends Node = HTMLElement>(
      selector: Selector,
      // options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Shadow>
    ): Chainable<JQuery<E>>
  }

  interface Cypress {
    env(key: OriginsEnum | ConfigEnvEnum): string
    env(key: OriginsEnum | ConfigEnvEnum, value: string): string
  }
}
