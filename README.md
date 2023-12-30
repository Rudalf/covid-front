# CovidFront

Ce qui a été fait :
- Liaison et appel des endpoints de l'api
- Tout est en place pour appliquer une authentification sécurisée avec jwt mais j'ai eu un probleme de version côté back qui m'empêche de m'assurer du bon fonctionnement.
- Page de connexion nonf contionnelle. Je n'ai pas considéré les rôles et utilisateurs dans ma base de données pour le moment donc mon portail n'est pas fonctionnel. Cependant dans l'état il pourrait fonctionner avec une base de données à jour.
- Module de routing pour rediriger l'utilisateur
- Page de recherche de centres par ville
- Une page non fonctionnelle de prise de rendez-vous. J'ai réalisé le formulaire mais la fonction de réservation ne permet pas de créer une instance Réservation mais un Centre.
- Un menu non fonctionnel qui ne permet pas de naviguer sur le site
- Utilisation de 
  
Ce que je n'ai pas réussi à faire :
- Interface de monitoring pour les rôles Admin et SuperAdmin
- Gestion de rendes-vous patient-médecin-centre


# Covid-api

Ce qui a été fait :
- Création de la base de données par programmation
- Organisation du projet avec repo-controller-service
- Mise en place d'endpoints intéressants pour les fonctionnalités attendues de l'api
- 

Ce que je n'ai pas réussi à faire :
- Mettre en place l'authentification sécurisé jwt. Un problème de version je pense m'empêche d'exploiter complètement la librairie jwt et notamment une classe de configuration nécessaire au fonctionnement de l'authentification.
