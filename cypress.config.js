const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    setupNodeEvents(on, config) {
    },
  },

  retries: {
    runMode: 0,
    openMode: 0,
  },

  videosFolder: 'cypress/videos', 
  screenshotsFolder: 'cypress/screenshots',
})
