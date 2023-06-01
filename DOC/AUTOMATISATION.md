## Tests automatisés avec Cypress

Environnements testés:

1. https://opencruise-ok.sogeti-center.cloud (version V1.1.0 de l'application)
2. https://opencruise-ko.sogeti-center.cloud (nouvelle version V1.2.0 de l'application à qualifier)


Vous trouverez dans ce fichier quelques tests automatisés avec Cypress, notamment les test comportant les tags "connexion" et "subscription"

# Connexion

# JIRA-001
Ce test vérifie le bon fonctionnemet de la connexion utilisateur en utilisant les donnés valides.
Il vérifie que l'utilisateur est bien connecté à son compte après avoir entré son login et son mot de passe et se trouve sur la page https://opencruise-ok.sogeti-center.cloud


# JIRA-002
Ce test vérifie le bon fonctionnemet de la connexion utilisateur en utilisant les donnés invalides.
Il vérifie que l'utilisateur n'est pas connecté à son compte après avoir entré un login erroné et son mot de passe et que le message d'erreur s'affiche

# Création de compte 

# JIRA-003
Ce test vérifie le bon fonctionnemet de la connexion admin en utilisant les donnés valides.
Il vérifie que l'utilisateur admin est bien connecté à son compte après avoir entré son login et son mot de passe et se trouve sur la page https://opencruise-ok.sogeti-center.cloud

# JIRA-004
Ce test vérifie le bon fonctionnemet de la création de compte particulier en utilisant les données valides.
Il vérifie que le compte a bien été créé après avoir rempli tous les champs dans le formulaire sur la page https://opencruise-ok.sogeti-center.cloud/register