import { PageObject } from '../page-object'

/**
 * @example
 * url = https://accounts.google.com/signin/v2/challenge/pwd?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&cid=1&navigationDirection=forward&TL=AM3QAYYRqY3Qi7RTSF3nYyWe7-UvFwux9CZcHmh28AtGHS28eIGEFtrFxifzMKxK
 */
export class AccountsPageSignInChallenge extends PageObject {
  constructor() {
    super('/signin/v2/challenge/pwd');
    this.setDomain('https://accounts.google.com')
  }

  fillPassword(password: string): this {
    return this
  }

  submit() {}
}