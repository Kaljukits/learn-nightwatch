var config = require("../../nightwatch.conf.js");

module.exports = {
  Google: function(browser) {
    browser
      .url("https://www.google.com")
      .waitForElementVisible("#hplogo")
      .setValue(".gLFyf.gsfi", ["cats", browser.Keys.ENTER])
      .waitForElementVisible(".q.qs")
      .assert.title("cats - Google otsing")
      .expect("body")
      .text.to.contain("cats")
      .pause(2500)
      .click(".q.qs")
      .saveScreenshot(config.imgpath(browser) + "googleCat.png")

      .end();
  }
};
