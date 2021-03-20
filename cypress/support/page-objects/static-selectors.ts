import { Selector } from './selector'

/**
 * Typical locators extends Selector class
 */
export class StaticSelectors {
  static readonly BODY = new Selector('body')

  static readonly HEADER = new Selector('header')

  static readonly FOOTER = new Selector('footer')

  static readonly ROLE_BUTTON = new Selector('[role="button"]')

  static readonly TYPE_BUTTON = new Selector('[type="button"]')

  static readonly ROLE_BANNER = new Selector('[role="banner"]')
}
