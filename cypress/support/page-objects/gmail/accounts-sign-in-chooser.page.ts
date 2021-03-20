import { PageObject } from '../page-object'
import { AccountsPageSignInChallenge } from './accounts-page-sign-in-challenge'


/**
 * @example
 * url = https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin
 */
export class AccountsPageSignInChooser extends PageObject {
  constructor() {
    super('/ServiceLogin/signinchooser');
    this.setDomain('https://accounts.google.com')
  }

  selectFirstUser() {
    return new AccountsPageSignInChallenge()
  }
}
