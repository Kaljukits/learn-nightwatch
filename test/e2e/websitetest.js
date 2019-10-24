var config = require("../../nightwatch.conf.js");

module.exports = {
  "@tags": ["mangarock"],
  "Mangarock Test": function(browser) {
    browser
      .url("https://mangarock.com/")
      .waitForElementVisible("body")
      .waitForElementVisible("._3CRg_")
      .pause(3500)
      .useXpath() // every selector now must be xpath
      .click("//div/a/span[text()='Continue to Site']")
      .pause(3000)
      .getLocationInView(
        "//div/a[text()='Vol.3 Chapter 18: Lustful dragon Luslia']",
        function(result) {}
      )
      .execute("scrollTo(result.value.x, result.value.y)")
      .waitForElementVisible(
        "//div/a[text()='Vol.3 Chapter 18: Lustful dragon Luslia']"
      )
      .click("//div/a[text()='Vol.3 Chapter 18: Lustful dragon Luslia']")
      .waitForElementVisible("Next Page")
      .pause(3000)
      .assert.title(
        "Monsters Can't Clean - Vol.3 Chapter 18: Lustful dragon Luslia"
      )
      .pause(2000)
      .end();
  }
};
