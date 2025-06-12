// === CAROUSEL ===
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const carouselContainer = document.querySelector('.custom-carousel');

    if (track && carouselContainer) {
        let slides = Array.from(track.children);

        if (slides.length > 1) {
            const firstClone = slides[0].cloneNode(true);
            const lastClone = slides[slides.length - 1].cloneNode(true);

            track.appendChild(firstClone);
            track.insertBefore(lastClone, slides[0]);

            slides = Array.from(track.children);

            let currentIndex = 1;
            let slideWidth = 0;

            function updateSlideWidth() {
                slideWidth = slides[0].getBoundingClientRect().width;
            }

            function updateSlidePosition(animated = true) {
                updateSlideWidth();
                track.classList.toggle('no-transition', !animated);
                track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            }

            function goToNextSlide() {
                if (currentIndex >= slides.length - 1) return;
                currentIndex++;
                updateSlidePosition();

                if (currentIndex === slides.length - 1) {
                    setTimeout(() => {
                        track.classList.add('no-transition');
                        currentIndex = 1;
                        updateSlidePosition(false);
                        void track.offsetWidth;
                        track.classList.remove('no-transition');
                    }, 500);
                }
            }

            function goToPrevSlide() {
                if (currentIndex <= 0) return;
                currentIndex--;
                updateSlidePosition();

                if (currentIndex === 0) {
                    setTimeout(() => {
                        track.classList.add('no-transition');
                        currentIndex = slides.length - 2;
                        updateSlidePosition(false);
                        void track.offsetWidth;
                        track.classList.remove('no-transition');
                    }, 500);
                }
            }

            const nextBtn = document.querySelector('.next');
            const prevBtn = document.querySelector('.prev');

            nextBtn?.addEventListener('click', () => {
                goToNextSlide();
                resetAutoplay();
            });

            prevBtn?.addEventListener('click', () => {
                goToPrevSlide();
                resetAutoplay();
            });

            window.addEventListener('resize', () => {
                updateSlideWidth();
                updateSlidePosition(false);
            });

            updateSlideWidth();
            updateSlidePosition(false);

            let autoplayInterval = setInterval(goToNextSlide, 9000);

            function resetAutoplay() {
                clearInterval(autoplayInterval);
                autoplayInterval = setInterval(goToNextSlide, 9000);
            }

            carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
            carouselContainer.addEventListener('mouseleave', () => autoplayInterval = setInterval(goToNextSlide, 9000));
        }
    }
});

// === PRELOADER ===
window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 2000);
    }
});

// === MOBILE MENU ===
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('#main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

// === MAPPA CON SEDI ===
document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('mappa');
    const sediList = document.getElementById('sedi-list');

    if (mapElement && sediList) {
        const mappa = L.map(mapElement, { zoomControl: false }).setView([44.41, 8.94], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mappa);

        const sedi = [
        { 
                nome: "Associazione Amici di Pietranera", 
                indirizzo: "Via Pietranera, 19, Rovegno",
                telefono: "3209010200",
                email: "circolomclamicipietranera@pec.it",
                orari: "Lun-Ven: 09-18.00",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                lat: 44.58227358010359, 
                lng: 9.305217402995476, 
                img: "../sedi/amicidipietranera.webp"
            },  
            { 
                nome: "Associazione Cristiana Genitori", 
                indirizzo: "Via Cambiaso, 2 canc., Campomorone", 
                telefono: "3771225600",
                email: "campora@libero.it",
                orari: "Lun-Ven: 09-18.00",
                lat: 44.52881782197134, 
                lng: 8.868577452660162,
            },
            { 
                nome: "Associazione Il Mulino di Foppiano", 
                indirizzo: "Frazione Foppiano 21, Rovegno",
                telefono: "3397732468",
                email: "claudionegri1951@gmail.com",
                orari: "Lun-Ven: 09-18.00", 
                lat: 44.583119326629905, 
                lng: 9.319567922090107,
            },
            { 
                nome: "Circolo La Sportiva MCL Preli", 
                indirizzo: "Salita Preli, 51r, Genova",
                telefono: "010 8368809",
                email: "alessio.farina1893@gmail.com",
                orari: "Lun-Ven: 15:30-19.30 e 21:30-00:30", 
                lat: 44.44018415472597, 
                lng: 8.95946525277031, 
            },
            { 
                nome: "Circolo MCL Amici Carpeneto", 
                indirizzo: "Via del Municipio, 47, Fascia", 
                telefono: "3663166104",
                email: "lucianopiombo48@tiscali.it",
                orari: "Lun-Ven: 09-18.00",
                lat: 44.582651205439255, 
                lng: 9.222330352584963,
            }, 
            { 
                nome: "Circolo MCL Benedetto XV", 
                indirizzo: "Corso Torino 36/3, Genova",
                telefono: "010 1234567",
                email: "alessandro.casareto@gmail.com",
                orari: "Lun-Ven: 09-18.00", 
                lat: 44.40105347772336, 
                lng: 8.950512096947845,
                img: "sedi/cafcorsotorino.webp" 
            },
            { 
                nome: "Circolo MCL Giovanni XXIII", 
                indirizzo: "Via Vesuvio, 16a/r, Genova",
                telefono: "3202622114",
                email: "frav1954@libero.it",
                orari: "Lun-Ven: 09-18.00", 
                lat: 44.42523165132163, 
                lng: 8.921859812292416,
            },
            { 
                nome: "Circolo MCL Giuseppe Fanin",  
                indirizzo: "Corso Torino 4/8, Genova", 
                telefono: "3356742019",
                email: "manuelli.giovanni45@gmail.com",
                orari: "Lun-Ven: 09-18.00",
                lat: 44.40443238091789, 
                lng: 8.952071870897205, 
            },
            { 
                nome: "Circolo MCL Orizzonte", 
                indirizzo: "Via Martiri di Voltaggio 3, Busalla",
                telefono: "3476318032",
                email: "circolo.orizzonte@libero.it",
                orari: "Lun-Ven: 09-18.00", 
                lat: 44.57388292309463, 
                lng: 8.942374103501315,
            },
            { 
                nome: "Circolo Padre Domenico Bonassi", 
                indirizzo: "Corso Torino 36/3, Genova",
                telefono: "3474727982",
                email: "margherita.salvaneschi@gmail.com",
                orari: "Lun-Ven: 09-13 e 14.30-18.30", 
                lat: 44.40105347772336, 
                lng: 8.950512096947845,
                img: "sedi/cafcorsotorino.webp" 
            }, 
            { 
                nome: "Unione Provinciale MCL Genova", 
                indirizzo: "Corso Torino 36/3, Genova", 
                telefono: "010 10584224",
                email: "genova@mcl.it",
                orari: "Lun-Ven: 09-18.00",
                lat: 44.40105347772336, 
                lng: 8.950512096947845,
                img: "sedi/cafcorsotorino.webp" 
            }, 
            { 
                nome: "Unione Regionale MCL Liguria", 
                indirizzo: "Corso Torino 36/3, Genova",
                telefono: "010 10584427",
                email: "datrizio56@gmail.com",
                orari: "Lun-Gio: 09-13 e 14:30-18:30 <br> Ven: 09-13 e 14:30-17", 
                lat: 44.40105347772336, 
                lng: 8.950512096947845,
                img: "sedi/cafcorsotorino.webp" 
            }, 
    ]

        const markers = [];

        sedi.forEach((sede) => {
            const popupContent = `
                <div class="sede-popup">
                    <strong>${sede.nome}</strong><br>
                    <span class="popup-indirizzo">${sede.indirizzo}</span><br>
                    <div class="popup-contatti">
                        <span><i class="fas fa-phone"></i> ${sede.telefono}</span><br>
                        <span><i class="fas fa-envelope"></i> <a href="mailto:${sede.email}">${sede.email}</a></span><br>
                        <span><i class="fas fa-clock"></i> ${sede.orari}</span>
                    </div>
                    ${sede.img ? `<div class="popup-img"><img src="${sede.img}" alt="Immagine di ${sede.nome}" style="max-width:100%; margin-top:8px;" /></div>` : ''}
                </div>
            `;

            const marker = L.marker([sede.lat, sede.lng]).addTo(mappa).bindPopup(popupContent);
            markers.push(marker);

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="sede-header">
                    <strong>${sede.nome}</strong><br>
                    <span class="indirizzo">${sede.indirizzo}</span>
                </div>
                <div class="sede-dettagli" style="display: none;">
                    <div class="contatti-info">
                        <p><i class="fas fa-phone"></i> <a href="tel:${sede.telefono}">${sede.telefono}</a></p>
                        <p><i class="fas fa-envelope"></i> <a href="mailto:${sede.email}">${sede.email}</a></p>
                        <p><i class="fas fa-clock"></i> ${sede.orari}</p>
                    </div>
                </div>
                <button class="toggle-dettagli">Mostra dettagli</button>
            `;

            const toggleBtn = listItem.querySelector('.toggle-dettagli');
            toggleBtn?.addEventListener('click', function (e) {
                e.stopPropagation();
                const dettagli = listItem.querySelector('.sede-dettagli');
                const isHidden = dettagli.style.display === 'none';
                dettagli.style.display = isHidden ? 'block' : 'none';
                this.textContent = isHidden ? 'Nascondi dettagli' : 'Mostra dettagli';
            });

            listItem.addEventListener('click', () => {
                mappa.setView([sede.lat, sede.lng], 15);
                marker.openPopup();
                document.querySelectorAll('#sedi-list li').forEach(item => item.classList.remove('active'));
                listItem.classList.add('active');
            });

            sediList.appendChild(listItem);
        });

        window.filtraSedi = function () {
            const input = document.getElementById('search');
            const filter = input.value.toUpperCase();
            const li = sediList.getElementsByTagName('li');

            for (let i = 0; i < li.length; i++) {
                const nome = li[i].querySelector('strong')?.textContent || '';
                const indirizzo = li[i].querySelector('.indirizzo')?.textContent || '';
                const dettagli = li[i].querySelector('.sede-dettagli')?.textContent || '';
                li[i].style.display = (nome + indirizzo + dettagli).toUpperCase().includes(filter) ? "" : "none";
            }
        };

        document.getElementById('zoom-in')?.addEventListener('click', () => mappa.zoomIn());
        document.getElementById('zoom-out')?.addEventListener('click', () => mappa.zoomOut());
    }
});

// === SCROLL TO TOP ===
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const secondSection = document.querySelectorAll('section')[0];

    if (scrollToTopBtn && secondSection) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.classList.toggle('show', window.scrollY > secondSection.offsetTop);
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
