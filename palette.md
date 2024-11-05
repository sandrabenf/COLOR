# Aide pour réaliser le TP

## Changement des couleurs

En tant qu'utilisateur, je dois pouvoir utiliser les inputs pour changer les couleurs de la palette afin de voir les changements en temps réel dans la `div` live-preview.

Tips :

-   utilisez les events `input` ou `change` pour détecter les changements sur les inputs.
-   utilisez les propriétés `value` des inputs pour récupérer les valeurs des couleurs.
-   utilisez la méthode `style.setProperty()` pour changer les couleurs de la palette.

Aide :

La valeur d'un input type color est une chaîne de caractères représentant une couleur en hexadécimal. Je vous conseille de la convertir en RGB pour pouvoir l'utiliser avec `style.setProperty()`.
Vous pouvez utiliser la fonction suivante pour convertir une couleur hexadécimale en RGB :

```javascript
function hexToRgb(hex) {
	return {
		r: parseInt(hex.substring(1, 3), 16),
		g: parseInt(hex.substring(3, 5), 16),
		b: parseInt(hex.substring(5, 7), 16),
	};
}
```

## Génération de la palette

En tant qu'utilisateur, je dois pouvoir générer une palette de couleurs aléatoires en cliquant sur le bouton "Générer une palette" afin de voir les changements en temps réel dans la `div` live-preview.

## Ajout de la palette aux favoris

En tant qu'utilisateur, je dois pouvoir ajouter la palette actuelle aux favoris en cliquant sur le bouton "Ajouter aux favoris" afin de la retrouver plus tard.

Elle doit être ajoutée à la liste des favoris et être sauvegardée dans le `localStorage`.

La liste des palettes doit être affichée dans la `div` favorites, que vous devez créer dynamiquement au chargement de la page.

## Suppression d'une palette des favoris

En tant qu'utilisateur, je dois pouvoir supprimer une palette des favoris en cliquant sur le bouton "Supprimer" afin de ne plus la retrouver dans la liste des favoris.

La palette doit être supprimée de la liste des favoris et du `localStorage`.

## Charger la palette favorite dans la palette principale

En tant qu'utilisateur, je dois pouvoir charger une palette favorite dans la palette principale en cliquant sur le bouton "Charger" afin de la voir dans la `div` live-preview.

## Faire apparaitre les réponses de la FAQ

En tant qu'utilisateur, je dois pouvoir cliquer sur une question de la FAQ pour faire apparaitre la réponse associée.

Tips :

-   utilisez les events `click` pour détecter les clics sur les questions.
-   Une classe open existe déja pour afficher les réponses, vous pouvez l'utiliser.

## Pouvoir ajouter du rouge, vert, bleu a chaque couleur

En tant qu'utilisateur, je dois pouvoir ajouter du rouge, vert, bleu à chaque couleur de la palette en cliquant sur les boutons `+` et `-` afin de voir les changements en temps réel dans la `div` live-preview.

Tips :

-   utilisez les events `click` pour détecter les clics sur les boutons.
-   utilisez les propriétés `value` des inputs pour récupérer les valeurs des couleurs et les modifier.

## Pouvoir obtenir la couleur complémentaire

En tant qu'utilisateur, je dois pouvoir obtenir la couleur complémentaire de chaque couleur de la palette.

Cette palette de couleurs complémentaires doit être générée automatiquement en dessous de la palette principale et doit être mise à jour en temps réel.

Tips :

-   Vous pouvez ajouter un bouton pour générer la palette complémentaire ou bien la générer automatiquemet à chaque changement de couleur.
-   En RGB, la couleur complémentaire d'une couleur est la couleur obtenue en soustrayant chaque composante de la couleur de 255.

## Partager la palette a partir de son URL

En tant qu'utilisateur, je dois pouvoir partager la palette actuelle en copiant l'URL de la page afin de la partager avec d'autres personnes.

Tips :

-   Vous pouvez utiliser la méthode `URLSearchParams.set` pour ajouter les couleurs de la palette à l'URL.
