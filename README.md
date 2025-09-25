# Reviews Widget - Deploy su GitHub Pages

1. Crea un repository pubblico su GitHub (es. `reviews-widget`).
2. Aggiungi questi file al repo root:
   - index.html
   - styles.css
   - widget.bundle.js
   - README.md
   - .nojekyll
3. Vai su Settings > Pages e abilita GitHub Pages dal branch `main` (root).
4. Dopo qualche minuto il sito sarà attivo: `https://TUO-USERNAME.github.io/NOME-REPO/`

Snippet da inserire nelle sales page Teachable (sostituisci URL con il tuo repo):

```html
<!-- placeholder -->
<div class="reviews-widget" data-widget-id="global-reviews"></div>

<!-- include il bundle (URL GitHub Pages) -->
<script src="https://TUO-USERNAME.github.io/NOME-REPO/widget.bundle.js" async></script>
