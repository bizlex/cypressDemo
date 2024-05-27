const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,ts}',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: "./results/mochawesome_results",
      overwrite: false,
      html: false,
      json: true,
      timestamp: "mmddyyyy_HHMMss"
    }
  },
})