/* =========================================
   COMERCIALIZADORA BARRIENTOS
   JavaScript principal
========================================= */


/* =========================================
   1. DATOS DEL NEGOCIO
========================================= */

const BUSINESS = {
    name: "Comercializadora Barrientos",
    whatsapp: "573213532665"
};


/* =========================================
   2. INFORMACIÓN DE LOS HUEVOS
========================================= */

/*
    trayPrice: precio confirmado de una cubeta
    unitPrice: precio de cada huevo

    Una cubeta contiene 30 huevos.
    Media cubeta contiene 15 huevos.
    Una docena contiene 12 huevos.

    Los precios de media cubeta y docena se
    calculan a partir del precio por unidad.
*/

const eggProducts = [
    {
        name: "A",
        description: "Clasificación A",
        trayPrice: 16000,
        unitPrice: 600
    },
    {
        name: "AA",
        description: "Clasificación AA",
        trayPrice: 17600,
        unitPrice: 600
    },
    {
        name: "AAA",
        description: "Clasificación AAA",
        trayPrice: 19000,
        unitPrice: 700
    },
    {
        name: "SUPER",
        description: "Clasificación SUPER",
        trayPrice: 20000,
        unitPrice: 700
    }
];


/* =========================================
   3. FORMATO DE PRECIOS
========================================= */

const currencyFormatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
});


function formatPrice(value) {
    return currencyFormatter.format(value);
}


/* =========================================
   4. GENERAR TARJETAS DE PRECIOS
========================================= */

function renderEggPrices() {

    const container = document.getElementById("egg-prices");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    eggProducts.forEach((egg, index) => {

        const halfTrayPrice = egg.unitPrice * 15;
        const dozenPrice = egg.unitPrice * 12;

        const card = document.createElement("article");

        card.className = index === 2
            ? "egg-card egg-card-featured"
            : "egg-card";

        card.innerHTML = `

            <h3>${egg.name}</h3>

            <p class="egg-card-subtitle">
                ${egg.description}
            </p>

            <div class="egg-main-price">
                <span>Cubeta · 30 huevos</span>
                <strong>${formatPrice(egg.trayPrice)}</strong>
            </div>

            <ul class="egg-price-list">

                <li>
                    <span>Media cubeta · 15</span>
                    <strong>${formatPrice(halfTrayPrice)}</strong>
                </li>

                <li>
                    <span>Docena · 12</span>
                    <strong>${formatPrice(dozenPrice)}</strong>
                </li>

                <li>
                    <span>Por unidad</span>
                    <strong>${formatPrice(egg.unitPrice)}</strong>
                </li>

            </ul>

            <a
                href="${createWhatsAppLink(
                    `Hola, quisiera consultar disponibilidad y precio de huevos tipo ${egg.name}.`
                )}"
                class="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
            >
                Consultar por WhatsApp
            </a>

        `;

        container.appendChild(card);

    });

}


/* =========================================
   5. ENLACES DE WHATSAPP
========================================= */

function createWhatsAppLink(message) {

    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${BUSINESS.whatsapp}?text=${encodedMessage}`;

}


function configureWhatsAppButtons() {

    const buttons = document.querySelectorAll("[data-whatsapp]");

    buttons.forEach((button) => {

        const message = button.dataset.whatsapp;

        if (!message) {
            return;
        }

        button.href = createWhatsAppLink(message);

    });

}


/* =========================================
   6. MENÚ RESPONSIVE
========================================= */

function configureNavigation() {

    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");

    if (!menuButton || !navigation) {
        return;
    }

    function closeMenu() {

        navigation.classList.remove("is-open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Abrir menú");

    }

    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("is-open");

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

    });

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

}


/* =========================================
   7. AÑO AUTOMÁTICO DEL FOOTER
========================================= */

function updateCurrentYear() {

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

}


/* =========================================
   8. ANIMACIONES AL DESPLAZARSE
========================================= */

function configureRevealAnimations() {

    const elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {

        elements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    currentObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {

        observer.observe(element);

    });

}


/* =========================================
   9. INICIALIZACIÓN
========================================= */

function initializeWebsite() {

    renderEggPrices();

    configureWhatsAppButtons();

    configureNavigation();

    updateCurrentYear();

    configureRevealAnimations();

}

initializeWebsite();