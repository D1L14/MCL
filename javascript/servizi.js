// Utility ID validi
function slugify(testo) {
  return testo
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')       // spazi → trattini
    .replace(/[^\w\-]+/g, '')   // rimuove caratteri speciali
    .replace(/\-\-+/g, '-')     // rimuove doppio trattino
    .replace(/^-+/, '')         // rimuove trattino iniziale
    .replace(/-+$/, '');        // rimuove trattino finale
}

function generaSezioneServiziCaf(dati) {
  const titolo = document.getElementById('titoloServiziCaf');
  titolo.textContent = dati.serviziCafContainer.titolo_sezione;

  const container = document.getElementById('serviziCafContainer');

  dati.serviziCafContainer.servizi.forEach(servizio => {
    const articolo = document.createElement('article');
    articolo.className = 'service';

    const idArticolo = slugify(servizio.titolo);
    articolo.id = idArticolo;

    articolo.innerHTML = `
      <div class="service-img">
        <img src="${servizio.immagine}" alt="${servizio.alt}">
      </div>
      <div class="service-text">
        <h3>${servizio.titolo}</h3>
        ${servizio.testoHTML}
      </div>
    `;

    container.appendChild(articolo);
  });
}

function generaSezioneServiziPatronato(dati) {
  const titolo = document.getElementById('titoloServiziPatronato');
  titolo.textContent = dati.serviziPatronatoContainer.titolo_sezione;

  const container = document.getElementById('serviziPatronatoContainer');

  dati.serviziPatronatoContainer.servizi.forEach(servizio => {
    const articolo = document.createElement('article');
    articolo.className = 'service';

    const idArticolo = slugify(servizio.titolo);
    articolo.id = idArticolo;

    articolo.innerHTML = `
      <div class="service-img">
        <img src="${servizio.immagine}" alt="${servizio.alt}">
      </div>
      <div class="service-text">
        <h3>${servizio.titolo}</h3>
        ${servizio.testoHTML}
      </div>
    `;

    container.appendChild(articolo);
  });
}

function generaAssistenza(dati) {
  const titolo = document.getElementById('titolo-assistenza');
  titolo.textContent = dati.serviceContainer.titolo_sezione;

  const container = document.getElementById('serviceContainer');

  dati.serviceContainer.servizi.forEach(servizio => {
    const articolo = document.createElement('article');
    articolo.className = 'service';

    const idArticolo = slugify(servizio.titolo);
    articolo.id = idArticolo;

    articolo.innerHTML = `
      <div class="service-img">
        <img src="${servizio.immagine}" alt="${servizio.alt}">
      </div>
      <div class="service-text">
        <h3>${servizio.titolo}</h3>
        ${servizio.testoHTML}
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

caricaYAML('content/servizi.yml')
  .then(dati => {
    generaSezioneServiziCaf(dati);
    generaSezioneServiziPatronato(dati);
    generaAssistenza(dati);
    generaSezioneCookiePrivacy(dati);
  })
  .catch(err => console.error('Errore caricamento YAML:', err));
