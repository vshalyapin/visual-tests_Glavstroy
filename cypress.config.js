const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6e2yyg',
  pageLoadTimeout: 120000,
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
