## Tests automatisés avec Cypress

**Environnements testés:**

1. https://opencruise-ok.sogeti-center.cloud (version V1.1.0 de l'application)
2. https://opencruise-ko.sogeti-center.cloud (nouvelle version V1.2.0 de l'application à qualifier)


**L'architecture des tests automatisés**

- Le dossier [e2e](cypress/e2e) contient les tests automatisés, repartis sur deux dossiers suivant l'environnement utilisé ([envPreProd](cypress/e2e/envPreprod/) et [envTest](cypress/e2e/envTest/)). Les scripts d'exécution contiennent des fonctions importées du dossier [step-defs](cypress/e2e/step-defs/)
- Les variables utilisées sont sauvegardées dans le dossier [page-objects](cypress/e2e/page-objects/)
- Les keywords utilisés sont sauvegardés dans le dossier [step-defs](cypress/e2e/step-defs/) et utilisent les variables qui se trouvent dans le dossier [page-objects](cypress/e2e/page-objects/)

  
**L'exécution des tests en ligne de commande se fait grâce aux commandes enregistrées dans package.json ("scripts"):**
- "tests": "npx cypress run"
- "connexionEnv1": "cypress run --spec cypress/e2e/envPreprod/connexion.cy.js"
- "connexionTest": "cypress run --spec cypress/e2e/envTest/connexion.cy.js"

  
