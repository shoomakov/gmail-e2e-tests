import { FragmentObject } from '~/cypress/support/page-objects/fragment-object'
import { StaticSelectors } from '~/cypress/support/page-objects/static-selectors'
import { Selector } from '~/cypress/support/page-objects/selector'

export class InputTypeEmailFragment extends FragmentObject {
  static UA_ARIA_LABEL = new Selector('[aria-label="Електронна адреса або номер телефону"]')
  static RU_ARIA_LABEL = new Selector('[aria-label="Телефон или адрес эл. почты"]')
  constructor() {
    super(InputTypeEmailFragment.UA_ARIA_LABEL.getName())
  }

  public fill(email: string): this {
    this.wrap().type(email, { force: true })

    return this
  }
}
