# Rapport d'exécution des tests sur OPENCRUISE

Les tests automatisés (voir le document AUTOMATISATION.md) sont exécuté tous les jours, deux fois par jour.

## Informations générales

Dans le cadre du projet Open Cruise, j'ai réalisé des tests pour évaluer la fonctionnalité de connexion utilisateur. LEs tests ont été effectués sur deux environnements suivants:

## Environnement Préproduction:
- https://opencruise-ok.sogeti-center.cloud (version V1.1.0 de l'application)
Cet environnement est considéré comme stable sans anomalies majeures

## Environnement Test:
- https://opencruise-ko.sogeti-center.cloud (nouvelle version V1.2.0 de l'application à qualifier)
Cet environnement comporte plusieurs bugs connus

## Résultats des tests automatisés:
Environnement Préproduction:
- Test JIRA-001 (connexion avec les données valides) s'exécute avec succès et sans anomalies détectées
- Test JIRA-002 (connexion avec les données invalides) s'exécute avec succès et sans anomalies détectées

## Environnement Test:
Test JIRA-001 (connexion avec les données valides) ...
Anomalies détectées:

Test JIRA-002 (connexion avec les données valides) ...
Anomalies détectées:

## Anomalies identifiées:

Les anomalies suivantes ont été détectées sur l'environnement Test:
1. Problème 1
2. Problème 2
3. Problème 3

## Conclusion

Ne comportant pas d'anomalies identifiées les tests réalisés sur l'environnement Préproduction permettent de valider quotidiennement le bon fonctionnement de la connexion utilisateur

## Etat actuel:

Les bugs ... ont été signalés à l'équipe de développement et sont en cours de débogage 
