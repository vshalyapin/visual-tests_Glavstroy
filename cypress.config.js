const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'z77frk',
  pageLoadTimeout: 120000,
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
