const { defineConfig } = require('cypress');

  // Use environment variables in Cypress configuration
require('dotenv').config();  


module.exports = defineConfig({
  projectId: 'rk1bmu',
  reporter: "cypress-mochawesome-reporter",
  reporterOptions:{
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,


  },
  env: {
    ...process.env},
  
  e2e: {
    setupNodeEvents(on, config) {
  
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);


    },
    
     
  },
  
});
