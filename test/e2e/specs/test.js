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
      .assert.containsText('ul.todo-list li:first-child',
        'edit')
      .end();
  }
};
