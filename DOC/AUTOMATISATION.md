## Tests automatisés avec Cypress

Ce projet a été réalisé avec Cypress afin d'automatiser les tests de bout en bout. 


**L'architecture des tests automatisés**

> - Le dossier [e2e](cypress/e2e) contient les tests automatisés, repartis sur deux dossiers suivant l'environnement utilisé ([envPreProd](cypress/e2e/envPreprod/) et [envTest](cypress/e2e/envTest/)). Les scripts d'exécution contiennent des fonctions importées du dossier [step-defs](cypress/e2e/step-defs/)
> - Les variables utilisées sont sauvegardées dans le dossier [page-objects](cypress/e2e/page-objects/)
> - Les keywords utilisés sont sauvegardés dans le dossier [step-defs](cypress/e2e/step-defs/) et utilisent les variables qui se trouvent dans le dossier [page-objects](cypress/e2e/page-objects/)

  
**L'exécution des tests en ligne de commande se fait grâce aux commandes enregistrées dans package.json ("scripts"):**
- "tests": "npx cypress run"
- "connexionEnv1": "cypress run --spec cypress/e2e/envPreprod/connexion.cy.js"
- "connexionTest": "cypress run --spec cypress/e2e/envTest/connexion.cy.js"

  
