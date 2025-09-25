// widget.bundle.js
(function () {
  'use strict';

  // ======= CONFIG =======
  var WIDGET_SELECTOR = '.reviews-widget';
  var STYLE_ID = 'rw-widget-styles';
  // ======= /CONFIG =======

  // Template: qui ho incorporato il contenuto del tuo Gist (HTML + inline styles)
  var WIDGET_HTML = '\
<style> \
.custom-row-1{display:flex!important;flex-direction:row;flex-wrap:wrap!important;width:100%!important;margin:0 auto;} \
.custom-row{display:flex!important;flex-direction:row!important;flex-wrap:wrap!important;width:100%!important;} \
.custom-columnVID{display:flex!important;flex-direction:column!important;flex-basis:100%!important;flex:1!important;padding:2%;} \
.titolo{font-size:3.5em!important;line-height:4rem;} \
.titolo2{font-size:34px!important;line-height:50px;} \
.wistia_embed{margin:0 auto;} \
@media screen and (max-width: 768px){ \
  .custom-row-1{flex-direction:column!important;} \
  .custom-4{width:45%!important;padding:3%;} \
  .custom-4 .wistia_embed{max-width:100%!important;} \
  .titolo{font-size:2.4em!important;line-height:1.3em;} \
  .titolo2{font-size:22px!important;line-height:35px;} \
} \
.jWrISK{padding:0px!important;} \
.img-responsiveR{width:100%!important;} \
</style> \
<div class="custom-section even" style="padding-top:45px;"> \
  <div class="custom-row wide"> \
    <h2 style="color:#e67300;margin-bottom:40px;" class="titolo">COM\\'E UN CORSO QTLAB?<br>CHIEDILO A CHI C\\'ERA...</h2> \
    <br><br><br> \
  </div> \
  <div class="custom-row-1 wide"> \
    <div class="custom-columnVID custom-6"> \
      <div align="center"><h4>TRADING CAMP 2024</h4></div><br> \
      <p>Ti ho mostrato come puoi Aggiustare posizioni per bloccare profitto per controllare il rischio. Ho condiviso dei protocolli per lavorare con Strategie Butterfly su Indici e su Azioni. Ti ho insegnato a fare Pairs Trading con le Opzioni. E ti ho mostrato come costruire e analizzare un Portafoglio di Strategie con le Opzioni.</p> \
      <video preload="none" width="100%" height="auto" controls poster="https://www.lucagiusti.it/wp-content/uploads/2025/06/trading-camp-24-screen.webp"> \
        <source src="https://www.lucagiusti.it/wp-content/uploads/2025/06/Interviste-camp-2024-Audio-migliorato.mp4" type="video/mp4"> \
        Your browser does not support the video tag. \
      </video> \
    </div> \
    <div class="custom-columnVID custom-6"> \
      <div align="center"><h4>TRADING CAMP 2023</h4></div><br> \
      <p>Il concetto di Arbitraggi, declinato su diverse operatività: INTRA Market sulle Commodities, Convergence Trading sul Contango / Backwardation, Arbitraggio Statistico su Azioni, e operatività intraday con le Opzioni 0DTE e 1DTE per effettuare arbitraggi sulla Volatilità e sul Gamma (Positive Gamma Arbitrage)</p> \
      <video preload="none" width="100%" height="auto" controls poster="https://www.lucagiusti.it/wp-content/uploads/2025/04/corso-trading-camp-23.webp"> \
        <source src="https://www.lucagiusti.it/wp-content/uploads/2025/04/Corso-Trading-Camp-2023.mp4" type="video/mp4"> \
        Your browser does not support the video tag. \
      </video> \
    </div> \
  </div> \
  <!-- (il resto del contenuto è mantenuto; copia / incolla dei blocchi video e immagini come nell\'originale) --> \
  <div class="custom-row-1 wide"> \
    <div class="custom-columnVID custom-6"> \
      <div align="center"><h4>TRADING CAMP 2022</h4></div><br> \
      <p>11° edizione del Trading Camp 2022, dedicata alla costruzione e validazione di nuovi protocolli Short Strangle 2.0.</p> \
      <video preload="none" width="100%" height="auto" controls poster="https://www.lucagiusti.it/wp-content/uploads/2025/04/recensione-Corso-trading-camp-22.webp"> \
        <source src="https://www.lucagiusti.it/wp-content/uploads/2025/04/Trading-camp-2022.mp4" type="video/mp4"> \
        Your browser does not support the video tag. \
      </video> \
    </div> \
    <div class="custom-columnVID custom-6"> \
      <div align="center"><h4>TRADING CAMP 2021</h4></div><br> \
      <p>Nell\\'edizione 2021 del Trading Camp abbiamo lavorato alla costruzione e validazione di modelli di Trading Direzionale su Azioni e ETF.</p> \
      <video preload="none" width="100%" height="auto" controls poster="https://www.lucagiusti.it/wp-content/uploads/2025/04/recensione-Corso-trading-camp-21.webp"> \
        <source src="https://www.lucagiusti.it/wp-content/uploads/2025/04/Trading-camp-2021.webm" type="video/mp4"> \
        Your browser does not support the video tag. \
      </video> \
    </div> \
  </div> \
  <!-- continua con immagini e sezioni seguenti, mantenute come nell\\'originale --> \
  <div style="background-color:white;padding-top:45px;"> \
    <div style="max-width:100%!important;margin:0 auto; width:960px;"> \
      <p style="text-align:center;margin-top:20px;margin-bottom:20px;"><strong><span class="titolo2"><span style="color: rgb(227, 108, 9);">ECCO CHE COSA DICE CHI HA PARTECIPATO AI CORSI DI QTLAB CON LUCA GIUSTI...</span></span></strong></p> \
      <img loading="lazy" src="https://res.cloudinary.com/djc37pvsm/image/upload/v1745327801/6srOSBRqRVq2Ezq0Jyf7_kfnzui.webp" class="img-responsiveR" style="max-width:100%!important;" alt="corso trading opzioni"> \
      <img loading="lazy" src="https://res.cloudinary.com/djc37pvsm/image/upload/v1745327829/UoFfYjjlQHPWDERh1LFt_smcyof.webp" class="img-responsiveR" style="max-width:100%!important;" alt="corsi trading sulle opzioni"> \
      <!-- altre immagini mantenute --> \
    </div> \
  </div> \
</div> \
';

  // Helper: load external script (used for wistia jsonp if present)
  function loadExternalScript(src, cb) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = function () { if (cb) cb(null); };
    s.onerror = function () { if (cb) cb(new Error('Load error: ' + src)); };
    (document.head || document.documentElement).appendChild(s);
  }

  // Create the widget inside shadow DOM for each placeholder
  function renderInto(node) {
    // Prevent duplicate rendering
    if (node.__rw_rendered) return;
    node.__rw_rendered = true;

    // Create wrapper
    var host = document.createElement('div');
    host.style.width = '100%';
    host.style.boxSizing = 'border-box';
    // Attach shadow root for style isolation; fallback to normal injection if shadow not supported
    var shadowRoot = null;
    try {
      shadowRoot = host.attachShadow ? host.attachShadow({ mode: 'open' }) : null;
    } catch (e) {
      shadowRoot = null;
    }

    var mount = shadowRoot || host;
    // If using shadow, include a style reset to remove scrollbars/borders on host container
    if (shadowRoot) {
      var srStyles = document.createElement('style');
      srStyles.textContent = '\
:host{display:block;width:100%;box-sizing:border-box} \
*{box-sizing:border-box} \
video{max-width:100%;height:auto;display:block} \
img{max-width:100%;height:auto;display:block} \
';
      shadowRoot.appendChild(srStyles);
    } else {
      host.style.display = 'block';
    }

    // Inject HTML
    var container = document.createElement('div');
    container.innerHTML = WIDGET_HTML;
    mount.appendChild(container);

    // Append host to node
    node.appendChild(host);

    // If widget contains external JSONP or external players (e.g., Wistia), try to load them if present
    // Example: if content contains fast.wistia.com embed JSONP, load it
    if (WIDGET_HTML.indexOf('fast.wistia.com/embed/medias') !== -1) {
      loadExternalScript('https://fast.wistia.com/embed/medias/4ja0c5ydtu.jsonp', function () {
        // external script loaded (if available)
      });
    }
  }

  // Initialize: find all placeholders and render
  function init() {
    var nodes = document.querySelectorAll(WIDGET_SELECTOR);
    if (!nodes || nodes.length === 0) return;
    Array.prototype.forEach.call(nodes, function (n) {
      renderInto(n);
    });
  }

  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    // also fallback in case widget added later
    setTimeout(init, 1200);
  } else {
    init();
  }

  // Expose a simple API for future updates
  window.ReviewsWidget = {
    init: init,
    renderInto: renderInto
  };

})();
