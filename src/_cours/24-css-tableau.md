---
title: Mise en forme des tableaux
chapitre: CSS
permalink: /cours/css-tableau.html
---

Bordure du tableau
------------------

Dans le chapitre précédent, on a discuté la construction des tableaux en HTML.
On a utilisé l'attribut HTML `border` pour spécifier la largeur des bordures.
Cette solution est obsolète depuis HTML5 en faveur de la solution CSS.

On va remplacer l'utilisation de l'attribut `border` par la propriété `border`
du CSS.

```html
{% include_absolute _cours/demos/css-tableau-border-simple.html %}
```

Le contenu du fichier `tableau-border-simple.css` est :

```css
{% include_absolute _cours/demos/css/tableau-border-simple.css %}
```

<p>
  <iframe height='120' scrolling='no' src='demos/css-tableau-border-simple.html'></iframe>
</p>

On remarque que les bordures sont autour de chacune des cellules. On peut
modifier l'espacement entre les cellules et les bordures en utilisant la
propriété `border-spacing` qui accepte une ou deux valeurs en pixel pour
spécifier l'espacement horizontalement et verticalement.

```css
{% include_absolute _cours/demos/css/tableau-border-spacing.css %}
```

<p>
  <iframe height='130' scrolling='no' src='demos/tableau-border-spacing.html'></iframe>
</p>

On peut coller ces bordures entre elles afin d'obtenir le même rendu du
chapitre précédent en appliquant la propriété `border-collapse` à l'élément
`<table>`.

La propriété `border-collapse` accepte comme valeur deux valeurs : "collapse"
pour coller les bordures en une seule et "separate" pour afficher les bordures
distinctement qui est la valeur par défaut.

```css
{% include_absolute _cours/demos/css/tableau-border-collapse.css %}
```

<p>
  <iframe height='120' scrolling='no' src='demos/tableau-border-collapse.html'></iframe>
</p>

Couleur des cellules
--------------------

On peut changer les couleurs des cellules du tableau.

On va changer les couleurs et les marges 'margin' internes des lignes impaires du tableau
précèdent (1, 2, ...) en utilisant le sélecteur pseudo `:nth-child(an+b)`.
L'argument de ce sélecteur est une formule pour spécifier l'ensemble des
éléments à sélectionner. Pour sélectionner les éléments impaires, la formule
doit être `2n-1` ou bien le mot clé alias `odd`. Pour sélectionner les éléments
paires, la formule doit être `2n` ou le mot clé alias `even`.

Les cellules du tableau comme le reste des autres éléments supporte le pseudo
classe `:hover` qui sera appliqué quand la souris est au dessus de l'élément.

```css
{% include_absolute _cours/demos/css/tableau-border-color.css %}
```

<p>
  <iframe height='180' scrolling='no' src='demos/tableau-border-color.html'></iframe>
</p>

Supposons que l'age de Nouha et Ahmed ne sont pas saisis. La bordure et le fond
de ces deux cellules seront rendus. On peut contrôler cette fonctionnalité en
utilisant la propriété `empty-cells`. Elle accepte comme valeur deux mots clés:
"show" pour rendre les bordures et le fond des cellules vide ou "hide" pour
ne pas les rendre. Cette propriété ne fonctionne pas si les bordures sont
collées avec la propriété `border-collapse`.

```css
{% include_absolute _cours/demos/css/tableau-empty-cell.css %}
```

<p>
  <iframe height='190' scrolling='no' src='demos/tableau-empty-cell.html'></iframe>
</p>

Mise en Forme de d'en-tête et du pied
-------------------------------------

L'en-tête et le pied du tableau ont des mises en forme prédéfinies mais qui
peuvent se différencier selon les navigateurs. On va définir notre propre mise en
forme pour le tableau de l'exemple précédent qui sera le même entre tous les
navigateurs.

```css
{% include_absolute _cours/demos/css/tableau-style-head.css %}
```

<p>
  <iframe height='180' scrolling='no' src='demos/tableau-style-head.html'></iframe>
</p>

Les légendes "captions"
-----------------------

La propriété `caption-side` permet de gérer la position de la légende du
tableau. Elle prend deux valeurs :

- "top" : La légende est affichée en haut.
- "bottom" : La légende est affichée en bas.

Les autres valeurs (comme "left", "right", ...) ont étés absolètes depuis CSS2
en faveur de la propriété `text-align`.

Prenons comme exemple la structure HTML suivante, la légende même définie à
l'ouverture de l'élément `<table>`, elle sera positionnée en bas en utilisant
la propriété `caption-side` :

```html
{% include_absolute _cours/demos/tableau-caption-side.html %}
```

```css
{% include_absolute _cours/demos/css/tableau-caption-side.css %}
```

<p>
  <iframe height='220' scrolling='no' src='demos/tableau-caption-side.html'></iframe>
</p>
