const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://widget.devnet.kiln.fi/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
