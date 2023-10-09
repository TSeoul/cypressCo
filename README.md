![alt text](logo.png)

## PROJET OPENCRUISE AVEC CYPRESS 
<span style="color:violet"><b>Projet tutoré : Les tests WEB E2E avec Cypress</b></span>


**Ce projet a été réalisé sur l'application Open Cruise qui est une application permettant aux particuliers de réserver des croisières sélectionnées. Le projet contient les tests E2E automatisés et testés sur deux environnements différen:**

1. *https://opencruise-ok.sogeti-center.cloud* (version V1.1.0 de l'application)
2. *https://opencruise-ko.sogeti-center.cloud* (nouvelle version V1.2.0 de l'application comportant de nombreux bugs)

## Contenu
Les tests sont regroupés selon la feature testée. Ils sont classés et construis selon l'oranisation suivante :

- [page-objects](cypress/e2e/page-objects) 
  - Tests détaillés (variables et fonctions techniques)

- [step-defs](cypress/e2e/step-defs) 
  - Keywords fonctionels 
  
- [e2e](cypress/e2e) 
  - Testsuites


AUTRES DOSSIERS:

- [conception.md](DOC/CONCEPTION.md) 
  - La description détaillée des tests 
- [execution.md](DOC/EXECUTION.md) 
  - Le rapport d'exécution des tests manuels et automatisés avec les informations importantes du contexte d'exécution 
  - Anomalies rencontrées avec toutes les informations importantes du contexte d'exécution
- [automatisation.md](DOC/AUTOMATISATION.md) 
  - L'environnement de test
  - La structure de step-defs
  - Les commandes pour lancer les tests
  - Les paramètres utilisés




  
