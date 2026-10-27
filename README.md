# MYTHORIA — Application web de collection de cartes fantastiques

## Présentation

MYTHORIA est un projet pédagogique de développement web réalisé dans le cadre de la formation Full Stack à YouCode. L'objectif est de concevoir une application interactive permettant aux utilisateurs d'acheter des boosters, de les ouvrir pour obtenir des cartes aléatoires, de gérer leur collection et de construire un deck personnalisé.

L'application propose une interface inspirée de l'univers fantasy, avec une boutique, un inventaire, une chambre d'ouverture, un grimoire et un espace de construction de deck.

Le projet est développé côté client avec HTML5, Tailwind CSS et JavaScript Vanilla. Les données sont conservées dans le navigateur grâce au LocalStorage, sans base de données ni serveur applicatif.

**Type de projet :** application web dynamique, multipage  
**Période :** octobre 2026  
**Dépôt GitHub :** https://github.com/0xm7d/MYTHORIA  
**Formation :** YouCode — Full Stack Web Development

## Objectifs

- Développer une application web interactive avec JavaScript Vanilla.
- Manipuler dynamiquement le DOM.
- Organiser les données avec des tableaux et des objets JavaScript.
- Implémenter un panier avec gestion des quantités.
- Générer des cartes aléatoires lors de l'ouverture des boosters.
- Conserver les données avec LocalStorage.
- Permettre la consultation d'une collection de cartes.
- Construire un deck avec des règles de limitation.
- Utiliser Git et GitHub pour le versionnement.

## Pages et modules de l'application

| Module | Contenu |
|---|---|
| Accueil | Présentation de l'univers MYTHORIA et navigation vers les fonctionnalités principales. |
| Boutique | Affichage des boosters avec leurs illustrations et leurs prix. |
| Panier | Gestion des produits sélectionnés, des quantités et du montant total. |
| Checkout | Validation des achats et transfert des boosters dans l'inventaire. |
| Opening Chamber | Sélection et ouverture des boosters possédés. |
| Grimoire | Consultation des cartes collectées et de leurs caractéristiques. |
| Deck Builder | Construction d'un deck personnalisé de 20 cartes maximum. |

## Technologies et ressources

- **HTML5 :** structure des pages et organisation des contenus.
- **Tailwind CSS :** mise en page, couleurs, espacements et responsive design.
- **JavaScript ES6 :** gestion des interactions et de la logique applicative.
- **DOM :** affichage et modification dynamique des éléments.
- **LocalStorage :** conservation des données dans le navigateur.
- **JSON :** sérialisation et récupération des tableaux et objets.
- **Git et GitHub :** versionnement et hébergement du code source.
- **Vercel :** plateforme utilisée pour le déploiement.
- **Ressources graphiques locales :** illustrations des cartes, boosters et arrière-plans.

L'application fonctionne sans framework JavaScript ni base de données externe. Tailwind CSS est chargé via CDN.

## Organisation des fichiers

Structure simplifiée des principaux fichiers du projet :

```text
MYTHORIA/
├── index.html
├── boosters.html
├── Grimoire.html
├── deck.html
├── grimoire.js
├── opening.js
├── deck.js
├── assets/
│   ├── background.png
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   └── cards/
│       ├── 1.png
│       ├── 2.png
│       ├── ...
│       └── 12.png
└── README.md
```

Cette structure présente les fichiers principaux identifiés pendant le développement. Les autres fichiers liés à la boutique, au panier et au checkout complètent l'application.

## Fonctionnalités intégrées

### Boutique et panier

La boutique présente les différents boosters disponibles avec leurs noms, leurs prix et leurs illustrations.

L'utilisateur peut ajouter des boosters au panier, modifier les quantités, supprimer des articles et consulter le montant total.

Les informations sont sauvegardées dans le LocalStorage.

### Checkout et inventaire

Lors de la validation du panier, les boosters achetés sont transférés dans l'inventaire.

Chaque booster possède un identifiant et une quantité disponible. Le panier est vidé après validation et l'inventaire est mis à jour.

### Opening Chamber

La chambre d'ouverture permet de sélectionner un booster présent dans l'inventaire et de l'ouvrir.

Chaque ouverture entraîne :

1. La vérification de la quantité disponible.
2. La diminution de la quantité du booster.
3. La génération aléatoire de cinq cartes.
4. L'affichage des cartes obtenues.
5. L'ajout des cartes à la collection.
6. La sauvegarde des modifications.

La génération aléatoire utilise `Math.random()` et `Math.floor()`.

### Grimoire

Le Grimoire représente la collection de l'utilisateur à travers une interface inspirée d'un livre fantastique.

Les cartes sont affichées dans une grille avec un défilement vertical.

La sélection d'une carte permet de consulter son nom, son illustration, son type et sa rareté.

### Deck Builder

Le Deck Builder permet de créer une sélection de cartes à partir de la collection personnelle.

- Ajout de cartes depuis la collection.
- Limitation à 20 cartes maximum.
- Respect du nombre de copies possédées.
- Suppression des cartes sélectionnées.
- Affichage du nombre de cartes dans le deck.
- Sauvegarde automatique avec LocalStorage.

## Système de cartes et de rareté

L'application contient 12 cartes réparties en trois niveaux de rareté :

| Rareté | Description |
|---|---|
| Common | Cartes communes. |
| Rare | Cartes rares. |
| Legendary | Cartes légendaires. |

Chaque carte est représentée par un objet JavaScript contenant un identifiant, un nom, un type, une rareté et une image.

Exemple :

```javascript
{
    id: 1,
    name: "Fire Wolf",
    type: "Creature",
    rarity: "Common",
    img: "assets/cards/1.png"
}
```

Lors de l'ouverture d'un booster, cinq cartes sont sélectionnées aléatoirement.

La version actuelle ne possède pas encore de probabilités différenciées selon le niveau de rareté ou le type de booster.

## Gestion des données avec LocalStorage

Les données de l'application sont enregistrées directement dans le navigateur.

| Clé | Utilisation |
|---|---|
| `cart` | Boosters ajoutés au panier. |
| `inventory` | Boosters achetés et quantités disponibles. |
| `collection` | Cartes obtenues lors des ouvertures. |
| `deck` | Cartes sélectionnées dans le deck. |

Les données sont sauvegardées avec `JSON.stringify()` et récupérées avec `JSON.parse()`.

Cette méthode permet de conserver les informations après un rafraîchissement de la page.

Les données restent locales au navigateur et ne sont pas synchronisées entre plusieurs appareils.

## Concepts JavaScript utilisés

- Variables avec `const` et `let`.
- Tableaux et objets JavaScript.
- Fonctions et conditions.
- Boucles et `forEach()`.
- Recherche avec `find()`.
- Ajout avec `push()`.
- Suppression avec `splice()`.
- Vérification des quantités.
- Manipulation du DOM avec `getElementById()`.
- Affichage dynamique avec `innerHTML`.
- Gestion des événements avec `onclick`.
- Génération aléatoire avec `Math.random()`.
- Stockage des données avec LocalStorage.
- Conversion des données au format JSON.

## Tests fonctionnels

| Test | Résultat attendu |
|---|---|
| Ajouter un booster au panier | Le booster apparaît dans le panier. |
| Modifier la quantité | Le montant total est actualisé. |
| Supprimer un booster | Le booster disparaît du panier. |
| Valider un achat | Les boosters sont transférés dans l'inventaire. |
| Ouvrir un booster | Cinq cartes sont générées. |
| Ouvrir un booster épuisé | L'ouverture est refusée. |
| Consulter le Grimoire | Les cartes collectées sont affichées. |
| Sélectionner une carte | Les détails de la carte apparaissent. |
| Ajouter une carte au deck | La carte est ajoutée au deck. |
| Dépasser 20 cartes | L'ajout est refusé. |
| Ajouter trop de copies | L'ajout est refusé. |
| Supprimer une carte du deck | La carte est retirée. |
| Actualiser la page | Les données enregistrées sont conservées. |

Ces scénarios servent de référence pour vérifier le fonctionnement de l'application.

## Difficultés techniques et solutions

### Synchronisation des données

Les différentes pages partagent des informations comme le panier, l'inventaire, la collection et le deck.

L'utilisation de clés LocalStorage communes permet de récupérer et de modifier ces données depuis les différents modules.

### Gestion des quantités

L'ouverture des boosters et la construction du deck nécessitent des vérifications pour éviter certaines actions non autorisées.

Des conditions JavaScript permettent de contrôler les quantités disponibles et de limiter le nombre de cartes sélectionnées.

### Affichage dynamique

Les cartes et les boosters sont générés à partir de tableaux JavaScript.

L'utilisation de `forEach()` et `innerHTML` permet de mettre à jour les interfaces après les interactions.

### Interface du Grimoire

L'intégration des cartes dans une interface représentant un livre ouvert a nécessité des ajustements de dimensions, d'espacement et de défilement.

Tailwind CSS Grid et les propriétés `overflow` ont été utilisés pour organiser les cartes à l'intérieur des zones prévues.

## Limites fonctionnelles

- Les données sont stockées uniquement dans le navigateur.
- Aucun système d'authentification n'est intégré.
- Les achats sont simulés, sans paiement réel.
- Les probabilités de rareté ne sont pas différenciées selon les boosters.
- Les filtres par type et rareté ne sont pas encore intégrés au Grimoire.
- Aucun système de combat entre joueurs n'est disponible.
- Le responsive design nécessite des vérifications supplémentaires sur certaines pages.

## Perspectives d'amélioration

- Ajouter des filtres par type et rareté.
- Implémenter des probabilités spécifiques pour chaque booster.
- Ajouter des animations d'ouverture.
- Améliorer l'adaptation aux différentes tailles d'écran.
- Ajouter des statistiques de collection.
- Permettre la création de plusieurs decks.
- Développer un système de combat entre cartes.
- Intégrer une API et une base de données.
- Ajouter un système de comptes utilisateurs.
- Mettre en place des tests automatisés.

**GitHub :** https://github.com/0xm7d/MYTHORIA
