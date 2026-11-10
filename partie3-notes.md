- import de react non utilisé
- on pourrait ranger type Lot dans un fichier/dossier type dedié
- useEffect n'as pas de second argument. ca creer une boucle infini, qui appelle fetchLots a chaque rendu, visible dans la console. on voit aussi que la liste clignote a chaque select que le user fait.
- interface pauvre et minime, peu lisible, en plus du mélange français/anglais
- un aria-label dans le select aidera a l'experience utilisateurs
- il manque un placeholder ou un message quand les lots ne sont pas afficher ou n'existe pas ou quand ya une erreur

resolution:
- enlever import
- créer un lot.ts dans un /types et l'importer dans
- ajouter [fetchlot] en tant que deuxième arguments
- ajouter du style et de la mise en page, texte plus clair
- ajout de aria-label
- faire un try catch pour voir l'etat des lots dans le server, avec un text inforamtif pour chaque cas
