/// <reference types="cypress" />

import { Selector } from './selector'

export class FragmentObject {
  /**
   * General element, wrapped by default
   * @protected
   */
  protected mainElement: Selector

  /**
   * Fragment object
   * @param {string} name - Selector name
   */
  public constructor(name: string) {
    this.mainElement = new Selector(name)
  }

  // private setMainElement(name: string): void {
  //   this.mainElement = new Selector(name)
  // }

  /**
   * Get cypress chainable
   */
  public wrap(name?: Selector): Cypress.Chainable<JQuery<HTMLElement>> {
    const el = name?.getName() || this.mainElement.getName()

    return cy.get(el)
  }

  // protected pushKey(key: string) {
  //   this.elementKeys.push(key)
  // }

  // protected extractKeys(target) {
  //   Object.keys(target).forEach((_) => {
  //     this.pushKey(_)
  //   })
  // }

  public verifyMainElement(): this {
    this.wrap().should('be.visible', {
      message: `"${this.mainElement}" is not visible`,
    })

    return this
  }

  // protected isFragmentUnique(el: Selector) {
  //   const element = el || this.mainElement
  //   return element.countElements() === 1
  // }
  //
  // getStaticProp<T>(target: T) {
  //   type Type = {
  //     constructor: Type
  //     prop: Type //only need to define the static props you're going to need
  //   } & T
  //   const childFragment = target as Type
  //
  //   Cypress.log({
  //     displayName: 'FragmentObject',
  //     message: `getStaticProp called`,
  //   })
  //
  //   return childFragment.constructor.prop
  // }
}
