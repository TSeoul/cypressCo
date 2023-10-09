## Tests automatisés avec Cypress

Ce projet a été réalisé avec Cypress afin d'automatiser les tests de bout en bout. 

ENVIRONEMENT:
**Ce projet a été réalisé sur l'application Open Cruise qui est une application permettant aux particuliers de réserver des croisières sélectionnées. Le projet contient les tests E2E automatisés et testés sur deux environnements suivants:**
1. *https://opencruise-ok.sogeti-center.cloud* (version V1.1.0 de l'application)
2. *https://opencruise-ko.sogeti-center.cloud* (nouvelle version V1.2.0 de l'application comportant de nombreux bugs)

**L'architecture des tests automatisés**

> - Le dossier [e2e](cypress/e2e) contient les tests automatisés, repartis sur deux dossiers suivant l'environnement utilisé ([envPreProd](cypress/e2e/envPreprod/) et [envTest](cypress/e2e/envTest/)). Les scripts d'exécution contiennent des fonctions importées du dossier [step-defs](cypress/e2e/step-defs/)
> - Les variables utilisées sont sauvegardées dans le dossier [page-objects](cypress/e2e/page-objects/)
> - Les keywords utilisés sont sauvegardés dans le dossier [step-defs](cypress/e2e/step-defs/) et utilisent les variables qui se trouvent dans le dossier [page-objects](cypress/e2e/page-objects/)

  
**L'exécution des tests en ligne de commande se fait grâce aux commandes enregistrées dans package.json ("scripts"):**
- "tests": "npm run tests"
- "connexionProd": "npm run connexionProd"
- "connexionTest": "npm run connexionTest"
- "compteProd": "npm run compteProd"
- "compteTest": "npm run compteTest"
  
