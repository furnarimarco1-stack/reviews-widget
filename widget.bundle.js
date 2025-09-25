(function () {
  'use strict';

  var WIDGET_SELECTOR = '.reviews-widget';

  var WIDGET_HTML = '\
<style> \
.custom-row-1{display:flex;flex-wrap:wrap;width:100%;margin:0 auto;} \
.custom-columnVID{flex:1;padding:2%;min-width:300px;} \
.titolo{font-size:2.5em;margin-bottom:20px;} \
.titolo2{font-size:1.8em;margin-top:40px;} \
.img-responsiveR{width:100%;height:auto;} \
video{width:100%;height:auto;} \
</style> \
<div class="custom-section"> \
  <h2 class="titolo">COME È UN CORSO QTLAB?<br>CHIEDILO A CHI C\'ERA...</h2> \
  <div class="custom-row-1"> \
    <div class="custom-columnVID"> \
      <h4>TRADING CAMP 2024</h4> \
      <video controls poster="https://www.lucagiusti.it/wp-content/uploads/2025/06/trading-camp-24-screen.webp"> \
        <source src="https://www.lucagiusti.it/wp-content/uploads/2025/06/Interviste-camp-2024-Audio-migliorato.mp4" type="video/mp4"> \
      </video> \
    </div> \
    <div class="custom-columnVID"> \
      <h4>TRADING CAMP 2023</h4> \
      <video controls poster="https://www.lucagiusti.it/wp-content/uploads/2025/04/corso-trading-camp-23.webp"> \
        <source src="https://www.lucagiusti.it/wp-content/uploads/2025/04/Corso-Trading-Camp-2023.mp4" type="video/mp4"> \
      </video> \
    </div> \
  </div> \
  <div class="custom-row-1"> \
    <div class="custom-columnVID"> \
      <h4>TRADING CAMP 2022</h4> \
      <video controls poster="https://www.lucagiusti.it/wp-content/uploads/2025/04/recensione-Corso-trading-camp-22.webp"> \
        <source src="https://www.lucagiusti.it/wp-content/uploads/2025/04/Trading-camp-2022.mp4" type="video/mp4"> \
      </video> \
    </div> \
    <div class="custom-columnVID"> \
      <h4>TRADING CAMP 2021</h4> \
      <video controls poster="https://www.lucagiusti.it/wp-content/uploads/2025/04/recensione-Corso-trading-camp-21.webp"> \
        <source src="https://www.lucagiusti.it/wp-content/uploads/2025/04/Trading-camp-2021.webm" type="video/mp4"> \
      </video> \
    </div> \
  </div> \
  <h3 class="titolo2">ECCO CHE COSA DICE CHI HA PARTECIPATO AI CORSI DI QTLAB CON LUCA GIUSTI...</h3> \
  <img src="https://res.cloudinary.com/djc37pvsm/image/upload/v1745327801/6srOSBRqRVq2Ezq0Jyf7_kfnzui.webp" class="img-responsiveR" alt="corso trading opzioni"> \
  <img src="https://res.cloudinary.com/djc37pvsm/image/upload/v1745327829/UoFfYjjlQHPWDERh1LFt_smcyof.webp" class="img-responsiveR" alt="corsi trading sulle opzioni"> \
</div>';

  function init() {
    var container = document.querySelector(WIDGET_SELECTOR);
    if (!container) return console.warn('Placeholder non trovato');
    container.innerHTML = WIDGET_HTML;
    console.log('Widget DOM diretto inizializzato');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.ReviewsWidget = { init };
})();
