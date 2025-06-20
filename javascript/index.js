function generaCarouselHomepage(dati) {
  const container = document.getElementById('carouselHomepage');
  container.innerHTML = '';

  dati.carouselHomepage.slides.forEach(slide => {
    let slideElement;

    if (slide.tipo === 'immagine') {
      slideElement = document.createElement('img');
      slideElement.src = slide.immagine;
      slideElement.alt = slide.alt;
      slideElement.className = 'carousel-slide';
    }

    if (slide.tipo === 'testo') {
      slideElement = document.createElement('div');
      slideElement.className = 'carousel-slide slide-with-text';
      slideElement.innerHTML = `
        <img src="${slide.immagine}" alt="${slide.alt}">
        <div class="slide-text">
          <h2>${slide.titolo}</h2>
          <p>${slide.paragrafo}</p>
        </div>
      `;
    }

    container.appendChild(slideElement);
  });
}
function inizializzaCaroselloHomepage() {
  const track = document.getElementById('carouselHomepage');
  const slides = track.children;
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let index = 0;

  function aggiornaPosizione() {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  function mostraSlide(i) {
    index = (i + slides.length) % slides.length;
    aggiornaPosizione();
  }

  prevBtn.addEventListener('click', () => mostraSlide(index - 1));
  nextBtn.addEventListener('click', () => mostraSlide(index + 1));

  aggiornaPosizione();
}



function generanotizieEventi(dati) {
  const titolo = document.getElementById('titoloNotizieEventi');
  titolo.textContent = dati.newsCarousel1.titolo_sezione;

  const container = document.getElementById('newsCarousel1'); 
  container.innerHTML = '';

  dati.newsCarousel1.notizie.forEach(notizia => {
    const slide = document.createElement('div');
    slide.className = 'news-slide';
    slide.innerHTML = `
      <div class="news-img">
        <img src="${notizia.immagine}" alt="${notizia.alt}">
      </div>
      <div class="news-text">
        <h2>${notizia.titolo}</h2>
        <p>${notizia.descrizione}</p>
      </div>
    `;
    container.appendChild(slide);
  });
}


function generaSezioneServiziCaf(dati) {
  const titolo = document.getElementById('titoloServiziCaf');
  titolo.textContent = dati.serviziCafContainer.titolo_sezione;

  const container = document.getElementById('serviziCafContainer');

  dati.serviziCafContainer.servizi.forEach(servizio => {
    const articolo = document.createElement('article');
    articolo.className = 'service';

    articolo.innerHTML = `
      <div class="service-img">
        <img src="${servizio.immagine}" alt="${servizio.alt}">
      </div>
      <div class="service-text">
        <h3>${servizio.titolo}</h3>
        <p>${servizio.testoHTML}</p>
        <p>
          <em>Per scoprire quali documenti ti saranno utili per lo svolgimento di questa pratica al tuo Caf di fiducia clicca:</em>
          <a href="${servizio.link}">Documentazione completa</a>.
        </p>
      </div>
    `;

    container.appendChild(articolo);
  });
}


function generanovitaCaf(dati) {
  const titolo = document.getElementById('titoloNovitaCaf');
  titolo.textContent = dati.newsCarousel2.titolo_sezione;

  const container = document.getElementById('newsCarousel2'); 
  container.innerHTML = '';

  dati.newsCarousel2.notizie.forEach(notizia => {
    const slide = document.createElement('div');
    slide.className = 'news-slide';
    slide.innerHTML = `
      <div class="news-img">
        <img src="${notizia.immagine}" alt="${notizia.alt}">
      </div>
      <div class="news-text">
        <h2>${notizia.titolo}</h2>
        <p>${notizia.descrizione}</p>
      </div>
    `;
    container.appendChild(slide);
  });
}


function generaSezioneServiziPatronato(dati) {
  const titolo = document.getElementById('titoloServiziPatronato');
  titolo.textContent = dati.serviziPatronatoContainer.titolo_sezione;

  const container = document.getElementById('serviziPatronatoContainer');

  dati.serviziPatronatoContainer.servizi.forEach(servizio => {
    const articolo = document.createElement('article');
    articolo.className = 'service';

    articolo.innerHTML = `
      <div class="service-img">
        <img src="${servizio.immagine}" alt="${servizio.alt}">
      </div>
      <div class="service-text">
        <h3>${servizio.titolo}</h3>
        <p>${servizio.testoHTML}</p>
        <p>
          <em>Per scoprire quali documenti ti saranno utili per lo svolgimento di questa pratica al tuo Patronato di fiducia clicca:</em>
          <a href="${servizio.link}">Documentazione completa</a>.
        </p>
      </div>
    `;

    container.appendChild(articolo);
  });
}


function generanovitaPatronato(dati) {
  const titolo = document.getElementById('titoloNovitaPatronato');
  titolo.textContent = dati.newsCarousel3.titolo_sezione;

  const container = document.getElementById('newsCarousel3'); 
  container.innerHTML = '';

  dati.newsCarousel3.notizie.forEach(notizia => {
    const slide = document.createElement('div');
    slide.className = 'news-slide';
    slide.innerHTML = `
      <div class="news-img">
        <img src="${notizia.immagine}" alt="${notizia.alt}">
      </div>
      <div class="news-text">
        <h2>${notizia.titolo}</h2>
        <p>${notizia.descrizione}</p>
      </div>
    `;
    container.appendChild(slide);
  });
}

function generaSezioneAssistenza(dati) {
  const titolo = document.getElementById('titoloAssistenza');
  titolo.textContent = dati.serviceContainer.titolo_sezione;

  const container = document.getElementById('serviceContainer');

  dati.serviceContainer.servizi.forEach(servizio => {
    const articolo = document.createElement('article');
    articolo.className = 'service';

    articolo.innerHTML = `
      <div class="service-img">
        <img src="${servizio.immagine}" alt="${servizio.alt}">
      </div>
      <div class="service-text">
        <h3>${servizio.titolo}</h3>
        <p>${servizio.testoHTML}</p>
        <p>
          <em>Per scoprire quali documenti ti saranno utili per lo svolgimento di questa pratica clicca:</em>
          <a href="${servizio.link}">Documentazione completa</a>.
        </p>
      </div>
    `;

    container.appendChild(articolo);
  });
}

window.addEventListener('load', () => {
  setTimeout(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, 400);
});

function generaSezioneCookiePrivacy(dati) {
  const sezione = dati["cookie-privacy"];
  if (!sezione) return;

  const container = document.querySelector("#cookie-privacy .container");
  if (!container) return;

  const titoloElem = document.getElementById("titoloStoriaHome");
  if (titoloElem) {
    titoloElem.textContent = sezione.titolo_sezione || "Titolo sezione non disponibile";
  }

  const paragrafo = document.createElement("p");

  const testoBase = document.createTextNode(sezione.descrizione.trim() + " ");
  const link = document.createElement("a");
  link.href = sezione.link_approfondimento;
  link.textContent = sezione.testo_bottone || "Approfondisci";

  paragrafo.appendChild(testoBase);
  paragrafo.appendChild(link);

  const descrizioneEsistente = document.getElementById("descrizioneStoriaHome");
  if (descrizioneEsistente) {
    descrizioneEsistente.replaceWith(paragrafo);
  } else {
    container.appendChild(paragrafo);
  }
}

async function caricaYAML(url) {
  const response = await fetch(url);
  const text = await response.text();
  return jsyaml.load(text);
}

caricaYAML('content/index.yml')
  .then(dati => {
    generaCarouselHomepage(dati);
    inizializzaCaroselloHomepage();
    generanotizieEventi(dati);
    generaSezioneServiziCaf(dati);
    generanovitaCaf(dati);
    generaSezioneServiziPatronato(dati);
    generanovitaPatronato(dati);
    generaSezioneAssistenza(dati);
    generaSezioneCookiePrivacy(dati);
  })
  .catch(err => console.error('Errore caricamento YAML:', err));
