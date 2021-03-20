export interface GoogleAccountsInterface {
  SignInIdentifier: ''

  SignInChallenge: ''
}

export interface GoogleMyAccountInterface {
    // signinoptions/recovery-options-collection
  myAccountSignInOptions: ''
}

export interface GmailInterface {
  // inbox messages page
  gmailInbox: ''
}

export interface GmailAppInterface extends GoogleAccountsInterface, GoogleMyAccountInterface, GmailInterface {
  // редирект на google сервис
  gmailPage: ''
  // ввод email
  // googleAccountsSignInIdentifier: ''
  //
  // // ввод пароля
  // googleAccountsSignInChallenge: ''




}

class GmailApp implements GmailAppInterface {
  SignInChallenge: ""
  SignInIdentifier: ""
  gmailInbox: ""
  gmailPage: ""
  myAccountSignInOptions: ""
}