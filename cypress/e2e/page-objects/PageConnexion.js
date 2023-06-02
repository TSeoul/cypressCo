// Variables environnements de test
Cypress.env.URLok = 'https://opencruise-ok.sogeti-center.cloud';
Cypress.env.URLko = 'https://opencruise-ko.sogeti-center.cloud';
Cypress.env.URLokRegister = 'https://opencruise-ok.sogeti-center.cloud/register';
Cypress.env.URLkoRegister = 'https://opencruise-ko.sogeti-center.cloud/register';


// Variables connexion utilisateur envPreprod valide

Cypress.env.usernameUserOk = 'Tam@yahoo.fr';
Cypress.env.passwordUserOk = 'Formation2023';
Cypress.env.login = '//input[@formcontrolname="username"]';
Cypress.env.password = '//input[@formcontrolname="password"]';
Cypress.env.btnConnexion = '//button[@class="btn btn-primary"]';

// Variables connexion utilisateur envPreprod invalide

Cypress.env.usernameUserNoOk = 'Tom';
Cypress.env.passwordUserNoOk = 'Tam';

// Variables connexion utilisateur envTest valide

Cypress.env.usernameUserOkKo = 'tom@yahoo.fr';
Cypress.env.passwordUserOkKo = 'Tompetit2';

// Variables connexion utilisateur envTest invalide

Cypress.env.usernameUserNoKo = 'Tom';
Cypress.env.passwordUserNoKo = 'Tam';



  
   
  
  
