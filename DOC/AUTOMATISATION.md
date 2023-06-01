## Tests automatisés avec Cypress

Environnements testés:

1. https://opencruise-ok.sogeti-center.cloud (version V1.1.0 de l'application)
2. https://opencruise-ko.sogeti-center.cloud (nouvelle version V1.2.0 de l'application à qualifier)


**L'architecture du projet**

Dans le dossier [DOC](/DOC) vous trouverez:

- [CONCEPTION.md](DOC/CONCEPTION.md) 
  - Tests détaillés 

- [AUTOMATISATION.md](DOC/AUTOMATISATION.md) 
  - Decription courte des tests automatisés et de la technologie utilisée 
  
- [EXECUTION.md](DOC/EXECUTION.md) 
  - Rapport d'exécution des tests manuels et automatisés avec les informations importantes du contexte d'exécution - - Anomalies rencontrées avec toutes les informations importantes du contexte d'exécution

Dans le dossier [cypress](cypress) vous trouverez:

- Le dossier [e2e](cypress/e2e) contenant les tests automatisés, repartis sur deux dossiers suivant l'environnement utilisé ([envPreProd](cypress/e2e/envPreprod/) et [envTest](cypress/e2e/envTest/)). Les scripts d'exécution contiennent des fonctions importées du dossier [step-defs](cypress/e2e/step-defs/)
- Les variables utilisées sont sauvegardées dans le dossier [page-objects](cypress/e2e/page-objects/)
- Les keywords utilisés sont sauvegardés dans le dossier [step-defs](cypress/e2e/step-defs/) et utilisent les variables qui se truevnt dans le dossier [page-objects](cypress/e2e/page-objects/)

  


