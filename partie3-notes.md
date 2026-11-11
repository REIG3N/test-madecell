- import de React non utilisé
- on pourrait ranger le type Lot dans un fichier/dossier types dédié
- useEffect n'a pas de second argument. Ça crée une boucle infinie, qui appelle fetchLots à chaque rendu, visible dans la console. On voit aussi que la liste clignote à chaque select que le user fait.
- mélange français/anglais peu clair
- un aria-label dans le select aidera l'expérience utilisateur
- il manque un placeholder ou un message quand les lots ne sont pas affichés, n'existent pas ou quand il y a une erreur

résolution :
- enlever l'import
- dans un vrai projet, créer un lot.ts dans /types et l'importer ; gardé dans le fichier pour le rendu
- ajouter [fetchLots] en tant que deuxième argument
- traduire les statuts en français et afficher des textes plus clairs
- ajout d'un aria-label
- faire un try/catch avec async/await pour gérer l'état du chargement, avec un texte informatif pour chaque cas

test:
J'ai lancé le composant dans un projet Vite avec une fausse fonction fetchLots qui renvoie des lots après 1s, pour simuler un serveur.
Avec un console.log dans fetchLots, j'ai vérifié qu'elle n'est appelée qu'une fois et plus à chaque changement de filtre.
J'ai ensuite fait échouer la promesse pour voir le message d'erreur, puis renvoyé une liste vide pour voir le message "Aucun lot à afficher".
