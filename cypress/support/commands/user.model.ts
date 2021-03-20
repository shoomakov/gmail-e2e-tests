/// <reference types="cypress" />

import * as faker from 'faker/locale/ru'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { UserInterface } from './user-interface'

const EMAIL_DOMAIN = 'maildrop.cc'

export class UserModel implements UserInterface {
  firstName: string
  companyInn: string
  companyName: string
  email: string
  lastName: string
  password: string
  phoneNumber: string

  constructor() {
    this.firstName = faker.name.firstName(1)
    this.lastName = faker.name.lastName(1)
    this.companyInn = faker.finance.account(10)
    this.companyName = faker.company.companyName()
    this.email = this.createEmail()

    this.password = faker.internet.password()
    this.phoneNumber = faker.phone.phoneNumber('098#######')
  }

  getNames(): string[] {
    return Object.getOwnPropertyNames(this)
  }

  createEmail(): string {
    const translit = new CyrillicToTranslit({ preset: 'uk' })
    const first = translit.transform(this.firstName).toLowerCase()
    const last = translit.transform(this.lastName).toLowerCase()

    const n = faker.random.number()

    Cypress.log({
      displayName: 'UserModel.createName',
      message: `${first} ${last}`,
    })

    return `${first}_${last}.${n}@${EMAIL_DOMAIN}`
  }
}
