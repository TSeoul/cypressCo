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
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": true,
    "html": false,
    "json": true
    
  },
  

});
module.exports = defineConfig({
  projectId: 'rk1bmu',
  env: {...process.env},
  e2e: {
    setupNodeEvents(on, config) {
      
    
      // implement node event listeners here
    },
    
     
  },
  
});
