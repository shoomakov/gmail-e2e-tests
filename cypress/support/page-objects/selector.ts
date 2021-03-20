/// <reference types="cypress" />

/**
 * @todo использовать для реализации декоратора, что послужит для статических свойств детей FragmentObject
 */
export class Selector {
  /**
   * Get correct selector name, ready for find in DOM
   * @private
   */
  private readonly selector: string

  /**
   * Only a text name, without any symbols
   * @private
   */
  private className?: string

  /**
   * JQuery wrapped element
   * @private
   */
  private readonly element: JQuery<HTMLElement>

  /**
   * Selector manipulations, validation and handle
   * @example
   *  class ExampleFragment extends FragmentObject {
   *
   *    // в прототип свойства добавить методы из Selector,
   *    // завернуть реализ. в декаратор '@selector'
   *    static readonly EXAMPLE_BUTTON = '.example__button'
   *
   *    constructor() {
   *      super('.example')
   *    }
   *
   *    verifyElements() {
   *      super.verifyMainElement()
   *      this.exampleButton().should('be.visible')
   *    }
   *
   *    exampleButton = (): Cypress.Chainable<JQuery<HTMLButtonElement>> =>
   *      this.wrap(EXAMPLE_BUTTON)
   *  }
   *  @todo обработка data атрибутов и просто атрибутов
   */
  constructor(selector: string) {
    this.selector = selector
    this.className = this.onlyClassName()
    this.element = cy.$$(this.selector)
    // this.init(selector)
  }

  /**
   * Get only selector name
   * (It is helpful for class assertions)
   * @todo проверки строки на наличие символов, пробелов и прочее
   */
  protected onlyClassName(): string {
    let className: string | undefined
    let isHasDot = false
    if (this.selector) isHasDot = this.selector.startsWith('.')

    if (isHasDot) className = Cypress._.words(this.selector)[0]
    else className = this.selector

    return <string>className
  }

  public getElement(): JQuery<HTMLElement> {
    return this.element
  }

  countElements(): number {
    return this.element.length
  }

  /**
   * Get selector name
   */
  public getName(): string {
    return this.selector
  }
}
