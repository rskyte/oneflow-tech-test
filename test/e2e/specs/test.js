var config = require('../nightwatch.conf.js');

module.exports = {
  'Adding Todos': (browser) => {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[class=new-todo]', ['test', browser.Keys.ENTER])
      .assert.containsText('ul.todo-list li:first-child',
        'test')
      .end();
  },

  'Editing Todos': (browser) => {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[class=new-todo]', ['test', browser.Keys.ENTER])
      .click('ul.todo-list li:first-child')
      .doubleClick()
      .setValue('input[class=edit]', ['edit', browser.Keys.ENTER])
      .assert.containsText('ul.todo-list li:first-child', 'edit')
      .end();
  },

  'Deleting Todos': (browser) => {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[class=new-todo]', ['test', browser.Keys.ENTER])
      .waitForElementVisible('ul.todo-list li:first-child > div > button.destroy', 5000)
      .click('ul.todo-list li:first-child > div > button.destroy')
      .pause(500)
      .assert.elementNotPresent('ul.todo-list li:first-child')
      .end();
  },

  'Checking off completed Todos': (browser) => {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[class=new-todo]', ['test', browser.Keys.ENTER])
      .pause(500)
      .click('input[type=checkbox][class=toggle]')
      .pause(500)
      .assert.elementPresent('.completed')
      .end();
  },

  'Clearing completed Todos': (browser) => {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[class=new-todo]', ['test', browser.Keys.ENTER])
      .pause(500)
      .click('input[type=checkbox][class=toggle]')
      .pause(500)
      .click('.clear-completed')
      .pause(500)
      .assert.elementNotPresent('ul.todo-list li:first-child')
      .end();
  },

  'Displays the correct message for remaining Todos': (browser) => {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[class=new-todo]', ['test', browser.Keys.ENTER])
      .pause(500)
      .assert.containsText('.todo-count', '1 item left')
      .setValue('input[class=new-todo]', ['test2', browser.Keys.ENTER])
      .pause(500)
      .assert.containsText('.todo-count', '2 items left')
      .click('ul.todo-list li:first-child > div > input[type=checkbox][class=toggle]')
      .pause(500)
      .assert.containsText('.todo-count', '1 item left')
      .click('ul.todo-list li:last-child > div > input[type=checkbox][class=toggle]')
      .pause(500)
      .assert.containsText('.todo-count', '0 items left')
      .end();
  }

};
