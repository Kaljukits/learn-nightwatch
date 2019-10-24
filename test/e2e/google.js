var config = require("../../nightwatch.conf.js");

module.exports = {
  Google: function(browser) {
    browser
      .url("https://www.google.com")
      .pause(2500)
      .waitForElementVisible("body")
      .waitForElementVisible("#hplogo")
      .setValue(".gLFyf.gsfi", ["cats", browser.Keys.ENTER])
      .waitForElementVisible(".q.qs")
      .assert.title("cats - Google otsing")
      .expect("body")
      .assert.containsText("#main", "cats")
      .pause(2500)
      .click(".q.qs")
      .saveScreenshot(config.imgpath(browser) + "googleCat.png")

      .end();
  }
};
