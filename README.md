# Tanger Antaeus — Site vitrine statique

Site bilingue français / arabe (RTL), responsive, sans dépendances, sans base de données et sans collecte de données par le site. Charte issue du dossier sponsors : bleu marine, vert émeraude, bleu et doré.

## Consulter localement

Ouvrir `index.html`, ou exécuter `python3 -m http.server 8000` dans ce dossier.

## Publier avec GitHub Pages

Dans le dépôt : **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.

GitHub Pages doit être disponible pour la visibilité du dépôt et le forfait du compte. Un dépôt privé peut nécessiter un forfait payant. Le contenu du site devient public lorsque Pages est publié. Il n'est pas nécessaire d'ajouter des secrets ni de configurer une base de données.

L'adresse GitHub Pages du projet sera affichée dans Settings → Pages après déploiement. Ne pas considérer le site comme publié avant cette confirmation.

Pour un domaine personnalisé, configurer le domaine et les DNS uniquement après vérification du nom exact et du compte qui le gère. Aucun CNAME n'est imposé dans ce projet.

## Modifier

- Texte FR et AR : attributs `data-fr` et `data-ar` dans `index.html`.
- Couleurs : variables au début de `style.css`.
- Logo : `assets/logo.jpg`, extrait du dossier fourni par l'association.
- Contacts : liens et formulaire dans `index.html` / `script.js`.

Le formulaire ouvre le client e-mail du visiteur via `mailto:` ; il n'envoie aucun message automatiquement. La date et le lieu du projet de cérémonie restent à confirmer. Aucun partenaire, témoignage ou événement passé n'a été inventé.

Les visuels et le nom Tanger Antaeus restent la propriété de leurs ayants droit. Aucune licence open source n'est présumée pour l'identité graphique.
