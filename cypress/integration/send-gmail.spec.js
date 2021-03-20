/// <reference types="cypress-pipe" />
/// <reference types="cypress" />

import { GmailAppPages } from '../support/page-objects/gmail/gmail-app.pages'
import { MailDropInboxPage } from '../support/page-objects/maildrop/mail-drop-inbox.page'
import { UserModel } from '../support/commands/user.model'
import { createUrl } from '~/cypress/support/page-objects/utils'

const { gmailPage, signInChooserPage, signInIdentifier } = new GmailAppPages(
  new UserModel().createUsername(),
)
const mailDropInboxPage = new MailDropInboxPage()

describe('Отправка письма', () => {
  const { ACCOUNTS_GOOGLE_URL } = Cypress.env()
  const isLocalStage = Cypress.env('STAGE') === 'local'

  const accountsGoogleUrl = createUrl(ACCOUNTS_GOOGLE_URL)
  before(() => {
    Cypress.Cookies.debug(isLocalStage)
    Cypress.LocalStorage.clear = function () {
      return
    }

    cy.clearCookies()

    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.clearLocalStorageSnapshot()
    cy.fixture('cookies').each(
      ($cookie) =>
        new Cypress.Promise((resolve) => {
          Cypress.log({
            displayName: 'setCookie',
            message: $cookie,
          })
          cy.setCookie($cookie.name, $cookie.value, {
            httpOnly: $cookie.httpOnly,
            secure: $cookie.secure,
            domain: $cookie.domain,
            path: $cookie.path,
            expiry: $cookie.expiry,
          })
          resolve()
        }),
    )
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
    Cypress.Cookies.preserveOnce(
      'GMAIL_AT',
      'GMAIL_IMP',
      '__Host-GMAIL_SCH',
      'SID',
      'APISID',
      'SAPISID',
      '__Secure-3PAPISID',
      'OGPC',
      '1P_JAR',
      'SIDCC',
    )
    // Cypress.Cookies.defaults({
    //   preserve: [
    //     'GMAIL_AT',
    //     'GMAIL_IMP',
    //     '__Host-GMAIL_SCH',
    //     'SID',
    //     'APISID',
    //     'SAPISID',
    //     '__Secure-3PAPISID',
    //     'OGPC',
    //     '1P_JAR',
    //     'SIDCC',
    //   ],
    // })
    // before each test, we can automatically preserve the
    // 'session_id' and 'remember_token' cookies. this means they
    // will not be cleared before the NEXT test starts.
    //
    // the name of your cookies will likely be different
    // this is an example
    // Cypress.Cookies.preserveOnce([
    //   'ACCOUNT_CHOOSER',
    //   'GMAIL_AT',
    //   '__Host-GMAIL_SCH',
    //   'SID',
    //   'APISID',
    //   'SAPISID',
    //   '__Secure-3PAPISID',
    //   '1P_JAR',
    //   'OGPC',
    //   'SIDCC',
    // ])
  })

  afterEach(() => {
    cy.saveLocalStorage()
    cy.getCookies().then(($cookies) => {
      cy.writeFile(
        'cypress/fixtures/cookies.json',
        $cookies.map((_) => {
          return {
            ..._,
            sameSite: true,
          }
        }),
      )
    })

    cy.fixture('cookies').each((_) => {
      Cypress.Cookies.preserveOnce(_.name)
    })
  })

  it('при входе на gmail.com должен произойти редирект', function () {
    cy.visit(accountsGoogleUrl)
    gmailPage.verifyOrigin(ACCOUNTS_GOOGLE_URL)
  })

  it('куки должны быть очищены', function () {
    cy.getCookies()
  })

  it('должен быть введен email', function () {
    signInIdentifier.emailInput().fill('mira64st@gmail.com')
  })

  it('нажата кнопка "Далее"', function () {
    signInIdentifier.clickNext()
  })
  // context('Авторизация', () => {
  //   // before(() => {
  //   //   cy.clearLocalStorageSnapshot()
  //   //   cy.fixture('cookies').each(
  //   //     ($cookie) =>
  //   //       new Cypress.Promise((resolve) => {
  //   //         Cypress.log({
  //   //           displayName: 'setCookie',
  //   //           message: $cookie,
  //   //         })
  //   //         cy.setCookie($cookie.name, $cookie.value, {
  //   //           httpOnly: $cookie.httpOnly,
  //   //           secure: $cookie.secure,
  //   //           domain: $cookie.domain,
  //   //           path: $cookie.path,
  //   //           expiry: $cookie.expiry,
  //   //         })
  //   //         resolve()
  //   //       }),
  //   //   )
  //   // })
  //   //
  //   // beforeEach(() => {
  //   //   cy.restoreLocalStorage()
  //   //   Cypress.Cookies.preserveOnce(
  //   //     'GMAIL_AT',
  //   //     'GMAIL_IMP',
  //   //     '__Host-GMAIL_SCH',
  //   //     'SID',
  //   //     'APISID',
  //   //     'SAPISID',
  //   //     '__Secure-3PAPISID',
  //   //     'OGPC',
  //   //     '1P_JAR',
  //   //     'SIDCC',
  //   //   )
  //   //   // Cypress.Cookies.defaults({
  //   //   //   preserve: [
  //   //   //     'GMAIL_AT',
  //   //   //     'GMAIL_IMP',
  //   //   //     '__Host-GMAIL_SCH',
  //   //   //     'SID',
  //   //   //     'APISID',
  //   //   //     'SAPISID',
  //   //   //     '__Secure-3PAPISID',
  //   //   //     'OGPC',
  //   //   //     '1P_JAR',
  //   //   //     'SIDCC',
  //   //   //   ],
  //   //   // })
  //   //   // before each test, we can automatically preserve the
  //   //   // 'session_id' and 'remember_token' cookies. this means they
  //   //   // will not be cleared before the NEXT test starts.
  //   //   //
  //   //   // the name of your cookies will likely be different
  //   //   // this is an example
  //   //   // Cypress.Cookies.preserveOnce([
  //   //   //   'ACCOUNT_CHOOSER',
  //   //   //   'GMAIL_AT',
  //   //   //   '__Host-GMAIL_SCH',
  //   //   //   'SID',
  //   //   //   'APISID',
  //   //   //   'SAPISID',
  //   //   //   '__Secure-3PAPISID',
  //   //   //   '1P_JAR',
  //   //   //   'OGPC',
  //   //   //   'SIDCC',
  //   //   // ])
  //   // })
  //   //
  //   // afterEach(() => {
  //   //   cy.saveLocalStorage()
  //   //   cy.getCookies().then(($cookies) => {
  //   //     cy.writeFile('cypress/fixtures/cookies.json', $cookies)
  //   //   })
  //   // })
  //   //
  //   // it('при входе на gmail.com должен произойти редирект', function () {
  //   //   cy.visit(accountsGoogleUrl)
  //   //   gmailPage.verifyOrigin(ACCOUNTS_GOOGLE_URL)
  //   // })
  //   //
  //   // it('куки должны быть очищены', function () {
  //   //   cy.getCookies()
  //   // })
  //   //
  //   // it('должен быть введен email', function () {
  //   //   signInIdentifier.emailInput().fill('mira64st@gmail.com')
  //   // })
  //   //
  //   // it('нажата кнопка "Далее"', function () {
  //   //   signInIdentifier.clickNext()
  //   // })
  //   // context('Вход', () => {
  //   //   it('при входе на gmail.com должен произойти редирект', function () {
  //   //     gmailPage.navigate().verifyOrigin(ACCOUNTS_GOOGLE_URL)
  //   //   })
  //   //
  //   //   it('куки должны быть очищены', function () {
  //   //     cy.getCookies()
  //   //   })
  //   // })
  //
  //   // context('Ввод email', () => {
  //   //   it('должен быть введен email', function () {
  //   //     signInIdentifier.emailInput().fill('mira64st@gmail.com')
  //   //   })
  //   //
  //   //   it('нажата кнопка "Далее"', function () {
  //   //     signInIdentifier.clickNext()
  //   //   })
  //   // })
  //
  //   // context('Ввод пароля', () => {
  //   //   it('должен быть введен пароль', function () {})
  //   //
  //   //   it('нажата кнопка "Далее"', function () {})
  //   // })
  // })

  // context('Gmail', () => {
  //   context('Вход', () => {
  //     it('хост должен быть "mail.google.com"', function () {})
  //
  //     it('pathname должен быть "/mail/u/0/"', function () {})
  //
  //     it('hash должен быть "#inbox"', function () {})
  //
  //     it('в хранилище должны появиться новые куки', function () {})
  //   })
  //
  //   context('Отправка письма', () => {
  //     it('нажать на кнопку "Написать"', function () {})
  //
  //     it('должно появится попап окно', function () {})
  //
  //     it('должно быть заполнено поле "Кому"', function () {})
  //
  //     it('должно быть заполнено поле "Тема"', function () {})
  //
  //     it('должно быть заполнено поле "Тело письма"', function () {})
  //
  //     it('нажата кнопка "Отправить"', function () {})
  //   })
  //
  //   context('Проверка', () => {})
  // })
})
