const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.trymima.com/",
    watchForFileChanges: false,
    defaultCommandTimeout: 8000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    pageLoadTimeout: 20000,
    viewportHeight: 800,
    viewportWidth: 1500,
    testIsolation: false
    //setupNodeEvents(on, config) {
      // implement node event listeners here
   // },
  },
});
