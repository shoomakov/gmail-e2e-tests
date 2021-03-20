/// <reference types="cypress" />

const HASH_SYMBOL = '#'
const DEFAULT_PATH = 'path'

export class PageObject {
  /**
   * Page name
   */
  public pageName?: string

  protected hash?: string

  /**
   * Url location pathname
   * @protected
   */
  protected pathname: string

  protected domain?: string | null = null

  /**
   * Piece of pathname
   */
  public static PATH_VAR: string

  /**
   *
   * @param {string} pathname
   * @example
   *  // Example of mustache variable in string
   *  let pathname = '/inbox/{{path}}'
   */
  public constructor(pathname: string) {
    this.pathname = pathname
  }

  public navigate(): this {
    cy.visit(this.pathname)

    return this
  }

  /**
   * @todo проверять на динамические части pathname'a
   */
  validateUrl(): boolean {
    const baseUrl = Cypress.config('baseUrl')
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ) // fragment locator

    return pattern.test(`${baseUrl}/${this.pathname}`)
  }

  private isDynamicPathname() {}

  public verifyOrigin(origin: string): this {
    debugger
    cy.location('hostname').should('eq', origin)

    return this
  }

  public verifyPathname(): this {
    cy.location('pathname').should('eq', this.pathname)

    return this
  }

  protected setPathname(pathname: string, path1: string): void {
    const isHasVariable = pathname.includes('{{')

    const compiled = Cypress._.template(pathname)

    this.pathname = isHasVariable ? compiled({ [DEFAULT_PATH]: path1 }) : pathname
  }

  protected setDomain(domain: string): void {
    this.domain = domain
  }

  protected setHash(hash: string): void {
    this.hash = hash.startsWith(HASH_SYMBOL) ? hash : `${HASH_SYMBOL}${hash}`
  }

  protected setPageName(): void {
    this.pageName = this.constructor.name
  }

  // protected init(pathname: string): void {
  //   // const { PATH_VAR } = PageObject.bind()
  //   // if (!PATH_VAR) throw new Error('Need DI "PATH_VAR"')
  //   this.setPageName()
  //   this.setPathname(pathname, PATH_VAR)
  // }
}
