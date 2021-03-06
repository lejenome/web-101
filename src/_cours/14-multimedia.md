---
title: Multimédia et Intégration
chapitre: HTML
permalink: /cours/multimedia.html
---

Avant le HTML5, pour l'ajout du contenu multimédia ou des animations dans une
page Web, les développeurs ont utilisé des plugins embarqués dans la page du
Web comme des plugins de lecteurs vidéos/audio (VLC, RealPlayer, QuickTime,
Windows Media Player, ...) ou des plateformes propriétaires comme Adobe Flash
(anciennement Macromedia Flash) et Microsoft Silverlight. Ces solutions ont des
limites comme le manque d'intégration avec le HTML/CSS, des problèmes de
sécurité, de stabilité et de manque d'accessibilité.

HTML5 a ajouté un support native des contenus multimédia et des animations en
utilisant une combinaison de HTML5, CSS3 et JavaScript. Dans cette section, on
va démontrer seulement les fonctionnalités fondamentales du HTML5 sans CSS3 et
JavaScript.

Les Vidéos
----------

La balise `<video>` permet d'intégrer une vidéo dans la page Web. Un exemple
d'un élément vidéo :

```html
<video src="mon-video.mp4" controls></video>
```

Les attributs principaux d'élément vidéo sont :

- **src** : l'URL de la vidéo à afficher.
- **controls** : attribut booléen pour afficher les contrôles de base du lecteur
vidéo (lecture, pause, contrôle du volume).
- **poster** : L'URL de l'image à afficher jusqu'à l'utilisateur dèmarre la vidéo.
- **autoplay** : attribut booléen pour spécifier que la vidéo doit commencer
automatiquement quand la page est chargée.
- **preload** : charger le contenu du fichier vidéo en même temps que la page
  Web. La valeur `auto` permet de charger tout le contenu du fichier. La valeur
  `metadata` (par défaut dans la majorité des navigateurs) permet de charger
  seulement les données méta du fichier vidéo (longueur du vidéo, ...). La
  valeur `none` permet de ne charger aucune donnée de la vidéo.
- **loop** : attribut booléen permet de répéter la vidéo en boucle.
- **muted** : attribut booléen permet de mettre le volume de la vidéo à 0.


Les navigateurs supportent de multiples formats de vidéo. Ce support diffère
entre les navigateurs. Les deux formats principaux sont :

- **WebM** : Un conteneur vidéo développé par Google avec le codage vidéo
  **VP8** ou **VP9** et le codage audio **Vorbis** ou **Opus**. Il est supporté
  par la majorité des navigateurs à l'exception de Safari.
- **MP4** : Un conteneur vidéo avec le codage vidéo **H.264** ou **H.265** et le
  codage audio **MP3** ou **AAC**. Il est supporté par la majorité des
  navigateurs avec l'exception du Opera.

Pour fournir plus d'un format de vidéo, on peut utiliser la balise `<source>`
qui accepte L'URL de la vidéo dans l'attribut `src` et le format MIME de vidéo
dans l'attribut `type`.

```html
<video controls>
  <source src="mon-video.webm" type="video/webm" />
  <source src="mon-video.mp4" type="video/mp4" />
</video>
```

Les audios
---------

L'élément audio de HTML5 fonctionne de même façon que l'élément vidéo mais il
est limité aux formats audio.

```html
<audio controls>
  <source src="mon-audio.mp3" type="audio/mp3" />
  <source src="mon-audio.ogg" type="audio/ogg" />
  <source src="mon-audio.webm" type="audio/webm" />
</audio>
```

Les formats principaux d'audio sont :

- **MP3** : Supporté par la majorité des navigateurs.
- **WebM** : Utilise le codage audio **Vorbis**. Il est supporté par la majorité
  des navigateurs à l'exception de Safari.
- **OGG** : Supporté principalement par Firefox et Google Chrome. Il peut
  utiliser le codage audio **Opus** ou **Vorbis** ou **FLAC**.

Les images vectorielles
-----------------------

Les images sont divisées en deux types principaux :

- Les images pixels (`raster`) : dont l'unité est le pixel. Elles sont définies par une
  matrice de pixels (`bitmap`). Les formats les plus connus sont : **JPEG**, **PNG**,
  **GIF**, **BMP**. Ces images perdent la qualité quand elles sont agrandies
  plus que leur taille originale.
- Les images vectorielles : dont l'unité est celle des éléments géométriques
  tel que un rectangle, un cercle, etc. Ces images ne perdent pas la qualité
  quand elles sont agrandies. Le format le plus connu est **SVG**.

La format **SVG** (**S**calable **V**ector **G**raphics) est un format d'image
vectoriel basé sur le langage XML développé par **W3C** depuis 1999. Ce format
est supportée par la majorité des éditeurs des images vectorielles. Il est
utilisé dans le Web pour structurer des images complexes que le HTML/CSS peut
structurer. SVG est désigné pour s'intégrer bien avec les technologies du Web
comme le HTML et CSS. Il supporte les animations aussi. La version courante est
**SVG 1.1**. La version **SVG 2.0** est en cours de développement.

Pour afficher un fichier SVG, on utilise la balise `<img>`.

```html
<img src="mon-image.svg" />
```

On peut aussi intégrer le code SVG directement dans notre code HTML en
utilisant la balise SVG.

```html
{% include_relative demos/image-svg.html %}
```
<p>
  <iframe height='240' scrolling='no' src='demos/image-svg.html'></iframe>
</p>

Intégration de contenu externe
------------------------------

À côté de l'intégration des vidéos et audio dans la page Web, le HTML permet
l'intégration d'autres types de ressources (p.ex: PDF, Flash, sous pages Web,
...) dans un document Web. Cette fonctionnalité était très importante surtout
avant la standardisation des éléments `<video>` et `<audio>`. Pendant les
années 90s et le début de 2000s, les développeurs Web ont utilisé l'élément
`<object>` ou l'élément `<embed>` qui permettent d'intégrer différents types de
ressources à travers des plugins (comme Adobe PDF Reader, VLC, RealPlayer,
QuickTime, Windows Media Player, ...) ou des plateformes propriétaires comme
Adobe Flash (anciennement Macromedia Flash), Java Applets et Microsoft
Silverlight. Aussi, l'élément `<iframe>`, et ses précédents absolues `<frame>`
et `<frameset>`, permettent l'intégration des sous page Web dans le document
HTML.

### Intégration des pages Web

On va discuter seulement l'élément `<iframe>` parceque les éléments `<frame>`
et `<frameset>` sont obsolètes depuis HTML 5.0 . Cet élément permet d'intégrer des
pages Web dans le document HTML courant ce qui permet d'intégrer des contenus
d'autres sites Web ou de réutiliser des contenus sans besoin de l'implémenter
dans chaque page Web. Par exemple, on peut intégrer une vidéo ou un audio
hébergé dans un fournisseur de services vidéos ou audio (YouTube, Vimeo,
SoundCloud, ...), ou un système de commentaires (Disqus, ...), ou des cartes
géographiques (Google Maps, Here, ...), ou des banners d'avertissement (Google
Adsense, ...).

`<iframe>` accepte de multiples attributs dont les principaux sont :

- `src` : C'est le seul attribut obligatoire. Il permet de spécifier l'URL de la
  page Web à intégrer.
- `allowfullscreen` : Un attribut booléen pour permettre la page intégrée à
  entrer le mode plein écran (par exemple : permettre le lecteur vidéo de
  YouTube d'entrer le mode plein écran).
- `frameborder` : S'il est assigné la valeur "1", une bordure sera affichée
  autour de l'élément qui est le comportement par défault. S'il est assigné la valeur
  "0", aucune bordure ne sera rendue. Il est recommandé d'utiliser le CSS pour
  spécifier la mise en forme de la bordure au future.
- `height` et `width` : Spécifier la hauteur et la largeur de l'élément en
  pixels.
- `scrolling` : Spécifié quand le navigateur doit fournir une barre de
  défilement pour le cadre. Les valeurs possibles sont `yes` pour toujours
  afficher la barre, `no` pour jamais afficher le barre ou `auto` pour afficher
  la barre seulement quand l'espace fourni pour le cadre n'est pas suffisant
  pour afficher tout le contenu de la page intégrée.

Prenons les deux exemples suivants d'intégration de vidéo YouTube et d'une
carte géographique Google Maps dans le document.

```html
{% include_relative demos/balise-iframe-youtube.html %}
```
<p>
  <iframe height='320' scrolling='no' src='demos/balise-iframe-youtube.html'></iframe>
</p>

```html
{% include_relative demos/balise-iframe-google-maps.html %}
```
<p>
  <iframe height='420' scrolling='no' src='demos/balise-iframe-google-maps.html'></iframe>
</p>

### Intégrer des autres ressources

Contrairement à l'élément `<iframe>`, `<object>` et `<embed>` permettent
d'intégrer d'autres types de contenu dans le document HTML grâce à des plugins
propriétaires. Par exemple, on peut intégrer des PDFs, des Flash, des Applets
Java, des vidéos, des images ou d'autres types. On va démontrer seulement
l'élément `<object>` parce que l'élément `<embed>` est rarement utilisé et
`<object>` est son successeur.

Les attributs principaux de `<object>` :

- `data` : Spécifie l'URL de la ressource à intégrer dans le document.
- `type` : Spécifie le type MIME de la ressource.

Prenons l'exemple d'intégration d'un fichier PDF.

```html
{% include_relative demos/balise-object-pdf.html %}
```

Notons que l'utilisation de l'élément `<object>` et `<embed>` est rare à
causes des multiples raisons :

- Les plateformes propriétaires comme Java Applets et Flash ne sont plus
  populaires et elles sont entrain d'être obsolètes. Java Applets n'est plus
  supporté depuis Java SE 9. Les PDFs
  sont généralement référencés au lieu d'être intégrés dans le document.
- Les nouveaux éléments de HTML fourniront une meilleure alternative comme les
  éléments `<video>`, `<audio>`, ou les nouvelles fonctionnalités de CSS3 et
  JavaScript (API Web) comme canvas et WebGL.
- Ces plateformes et plugins propriétaires ne sont pas portables et
  ne sont pas accessibles par tous les utilisateurs comme les utilisateurs
  des smartphones.
- Le manque d'accessibilité et d'intégration entre le contenu du document HTML
  et le contenu des ressources externes.

Remarque
--------

Ils y a un grand nombre de vendeurs des services vidéos en ligne
([YouTube](https://www.youtube.com/), [Vimeo](https://vimeo.com/),
[Dailymotion](https://dailymotion.com), ...) et des services d'audio en ligne
([Soundcloud](https://soundcloud.com/), ...) qui sont gratuits et payants.
Ces services permettent d'héberger les vidéos/audio dans leurs serveurs sans
limites de tailles ou de _bandwidths_. Ces services permettent d'intégrer leurs
lecteurs vidéos/audio dans vos pages Web facilement avec un énorme nombre de
fonctionnalités. Ils sont la solution la plus préférée pour ajouter des
contenus multimédias aux sites Web.

Le code d'intégration est fourni par ces services. Par exemple, YouTube fournit
le code d'intégration dans le dialogue du partage de vidéo. Le code suivant est
le code d'intégration d'un vidéo YouTube :

```html
{% include_relative demos/video-youtube.html %}
```
