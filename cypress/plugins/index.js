/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  let href

  on('task', {
    setHref: (val) => {
      // eslint-disable-next-line no-return-assign
      return (href = val)
    },
    getHref: () => {
      return href
    },
  })

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push(
        '--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process,--disable-site-isolation-trials',
      )
    }
    return launchOptions
  })

  const extendedConf = require('@bahmutov/cypress-extends')(config.configFile)

  return Object.assign({}, extendedConf, {
    env: process.env,
  })
}
