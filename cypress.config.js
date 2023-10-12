const { defineConfig } = require('cypress');

  // Use environment variables in Cypress configuration
require('dotenv').config();


//const dotenv = require('dotenv');
//dotenv.config({ path: '../Users/tam/Documents/.env' });

  //'env': 
  //{
    //'LOGIN_ADMIN_OK': 'admin@test.com',
    //'PASSWORD_ADMIN_OK': 'admin123',
    
  //},
  
//});


  


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
