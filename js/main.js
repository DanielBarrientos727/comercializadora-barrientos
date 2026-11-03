
"use strict";

/* =========================================================
   COMERCIALIZADORA BARRIENTOS
   Archivo JavaScript principal

   Funcionalidades:
   1. Configuración del negocio.
   2. Enlaces de WhatsApp.
   3. Menú para dispositivos móviles.
   4. Generación de tarjetas de precios e ilustraciones.
   5. Año automático del footer.
   6. Animaciones de aparición.
   ========================================================= */


/* ---------------------------------------------------------
   1. CONFIGURACIÓN GENERAL
   --------------------------------------------------------- */

/*
 * Modifica este número cuando cambie el contacto
 * de WhatsApp del negocio.
 *
 * Formato internacional:
 * Código del país + número, sin espacios ni símbolos.
 */
const BUSINESS_CONFIG = {
    whatsappNumber: "573213532665"
};


/* ---------------------------------------------------------
   2. CONFIGURACIÓN DE PRECIOS
   --------------------------------------------------------- */

/*
 * Actualización de precios:
 *
 * unitPrice: precio de un huevo individual.
 * trayPrice: precio de una cubeta completa de 30 huevos.
 *
 * Las demás presentaciones se calculan automáticamente:
 *
 * - Unidad: precio individual.
 * - Docena: precio individual × 12.
 * - Media cubeta: precio de la cubeta ÷ 2.
 * - Cubeta: precio completo.
 *
 * Cuando cambien los precios, modifica únicamente
 * los valores de esta sección.
 */

const EGG_PRICES = [
    {
        classification: "A",
        unitPrice: 500,
        trayPrice: 16000
    },
    {
        classification: "AA",
        unitPrice: 600,
        trayPrice: 17600
    },
    {
        classification: "AAA",
        unitPrice: 700,
        trayPrice: 19000
    },
    {
        classification: "SUPER",
        unitPrice: 700,
        trayPrice: 20000
    }
];


/*
 * Presentaciones disponibles.
 *
 * La propiedad key identifica el tipo de presentación
 * que se utilizará al calcular cada precio.
 *
 * El orden de este arreglo determina el orden
 * de aparición en las tarjetas.
 */

const EGG_PRESENTATIONS = [
    {
        key: "unit",
        name: "Unidad"
    },
    {
        key: "dozen",
        name: "Docena"
    },
    {
        key: "halfTray",
        name: "Media cubeta"
    },
    {
        key: "tray",
        name: "Cubeta completa"
    }
];


/* ---------------------------------------------------------
   3. FUNCIONES AUXILIARES
   --------------------------------------------------------- */

/**
 * Formatea una cantidad como moneda colombiana.
 *
 * @param {number} amount - Cantidad en pesos colombianos.
 * @returns {string} Precio formateado.
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(amount);
}


/**
 * Construye una URL de WhatsApp con un mensaje.
 *
 * @param {string} message - Mensaje que se enviará.
 * @returns {string} URL de WhatsApp.
 */
function createWhatsAppUrl(message) {
    const phone = BUSINESS_CONFIG.whatsappNumber;
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phone}?text=${encodedMessage}`;
}


/**
 * Crea un elemento HTML y le asigna una clase y texto.
 *
 * @param {string} tagName - Nombre de la etiqueta HTML.
 * @param {string} className - Clase CSS del elemento.
 * @param {string} text - Texto opcional del elemento.
 * @returns {HTMLElement} Elemento HTML creado.
 */
function createElement(tagName, className = "", text = "") {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (text) {
        element.textContent = text;
    }

    return element;
}


/* ---------------------------------------------------------
   4. ENLACES DE WHATSAPP
   --------------------------------------------------------- */

/*
 * Los mensajes se definen directamente en el HTML
 * mediante el atributo data-whatsapp.
 *
 * Así puedes cambiar el mensaje de cada botón
 * sin modificar el código JavaScript.
 */

function initializeWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll("[data-whatsapp]");

    whatsappLinks.forEach((link) => {
        const message = link.dataset.whatsapp;

        // Evita generar enlaces sin mensaje.
        if (!message) {
            return;
        }

        link.href = createWhatsAppUrl(message);
    });
}


/* ---------------------------------------------------------
   5. MENÚ PARA DISPOSITIVOS MÓVILES
   --------------------------------------------------------- */

function initializeMobileMenu() {
    const menuButton = document.querySelector("#menu-toggle");
    const navigation = document.querySelector("#navigation");

    // Comprueba que los elementos existan.
    if (!menuButton || !navigation) {
        return;
    }


    /**
     * Abre o cierra el menú de navegación.
     *
     * @param {boolean} shouldOpen - Estado deseado del menú.
     */
    function setMenuState(shouldOpen) {
        navigation.classList.toggle("is-open", shouldOpen);

        menuButton.setAttribute(
            "aria-expanded",
            String(shouldOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            shouldOpen ? "Cerrar menú" : "Abrir menú"
        );
    }


    // Alterna el menú al pulsar el botón.
    menuButton.addEventListener("click", () => {
        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        setMenuState(!isOpen);
    });


    // Cierra el menú al seleccionar una opción.
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setMenuState(false);
        });
    });


    // Cierra el menú al pulsar Escape.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuState(false);
        }
    });


    // Cierra el menú al hacer clic fuera de él.
    document.addEventListener("click", (event) => {
        const clickedInsideMenu = navigation.contains(event.target);
        const clickedMenuButton = menuButton.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {
            setMenuState(false);
        }
    });
}


/* ---------------------------------------------------------
   6. GENERACIÓN DE TARJETAS DE PRECIOS
   --------------------------------------------------------- */


/**
 * Calcula el precio de una presentación.
 *
 * Reglas:
 * - Unidad: precio individual.
 * - Docena: precio individual × 12.
 * - Media cubeta: precio de la cubeta ÷ 2.
 * - Cubeta: precio completo.
 *
 * @param {Object} egg - Datos de la clasificación.
 * @param {string} presentationKey - Tipo de presentación.
 * @returns {number|null} Precio calculado.
 */
function calculatePresentationPrice(egg, presentationKey) {
    // Verifica que los precios sean números válidos.
    const validUnitPrice =
        typeof egg.unitPrice === "number" &&
        Number.isFinite(egg.unitPrice) &&
        egg.unitPrice > 0;

    const validTrayPrice =
        typeof egg.trayPrice === "number" &&
        Number.isFinite(egg.trayPrice) &&
        egg.trayPrice > 0;

    switch (presentationKey) {

        // Precio de un solo huevo.
        case "unit":
            return validUnitPrice ? egg.unitPrice : null;

        // Doce huevos al precio individual.
        case "dozen":
            return validUnitPrice
                ? egg.unitPrice * 12
                : null;

        // La mitad del precio de una cubeta.
        case "halfTray":
            return validTrayPrice
                ? egg.trayPrice / 2
                : null;

        // Precio de la cubeta completa.
        case "tray":
            return validTrayPrice
                ? egg.trayPrice
                : null;

        // Presentación no reconocida.
        default:
            return null;
    }
}


/**
 * Construye la ilustración de un huevo.
 *
 * Reutiliza el SVG definido en el HTML mediante
 * el símbolo #icon-egg.
 *
 * Cada clasificación recibe una clase CSS diferente:
 * - A: egg-size--a
 * - AA: egg-size--aa
 * - AAA: egg-size--aaa
 * - SUPER: egg-size--super
 *
 * El tamaño visual se controla desde style.css.
 *
 * @param {string} classification - Clasificación del huevo.
 * @returns {HTMLElement} Ilustración del huevo.
 */
function createEggIllustration(classification) {
    // Normaliza el nombre para utilizarlo como clase CSS.
    const sizeClass = classification.toLowerCase();

    // Contenedor de la ilustración.
    const illustration = createElement(
        "span",
        `egg-size egg-size--${sizeClass}`
    );

    illustration.setAttribute("aria-hidden", "true");


    // Crea el elemento SVG.
    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    svg.setAttribute("class", "icon");


    // Reutiliza el símbolo del huevo definido en el HTML.
    const use = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "use"
    );

    use.setAttribute("href", "#icon-egg");


    // Ensambla la ilustración.
    svg.appendChild(use);
    illustration.appendChild(svg);

    return illustration;
}


/**
 * Construye una tarjeta para una clasificación de huevos.
 *
 * Incluye:
 * - Ilustración del huevo.
 * - Nombre de la clasificación.
 * - Precios de las presentaciones.
 * - Enlace de consulta por WhatsApp.
 *
 * @param {Object} egg - Información de la clasificación.
 * @returns {HTMLElement} Tarjeta de precios.
 */
function createEggPriceCard(egg) {
    const card = createElement("article", "price-card");


    // Encabezado de la tarjeta.
    const heading = createElement(
        "div",
        "price-card-heading"
    );


    // Ilustración correspondiente a la clasificación.
    const eggIllustration = createEggIllustration(
        egg.classification
    );


    // Contenedor del nombre y la categoría.
    const headingText = createElement(
        "div",
        "price-card-title"
    );

    const category = createElement(
        "span",
        "",
        "CLASIFICACIÓN"
    );

    const title = createElement(
        "h3",
        "",
        `Huevos ${egg.classification}`
    );

    headingText.append(category, title);


    // Ensambla el encabezado.
    heading.append(
        eggIllustration,
        headingText
    );


    // Lista de presentaciones y sus precios.
    const priceList = createElement("ul", "price-list");

    EGG_PRESENTATIONS.forEach((presentation) => {
        const item = createElement("li");

        const presentationName = createElement(
            "span",
            "",
            presentation.name
        );

        // Obtiene el precio según la presentación.
        const price = calculatePresentationPrice(
            egg,
            presentation.key
        );

        const presentationValue = createElement(
            "strong",
            "",
            price === null
                ? "Consultar"
                : formatCurrency(price)
        );

        item.append(
            presentationName,
            presentationValue
        );

        priceList.appendChild(item);
    });


    // Enlace para consultar esta clasificación por WhatsApp.
    const message =
        `Hola, quisiera consultar el precio y la disponibilidad ` +
        `de los huevos de clasificación ${egg.classification}.`;

    const contactLink = createElement(
        "a",
        "price-card-link",
        "Consultar por WhatsApp"
    );

    contactLink.href = createWhatsAppUrl(message);
    contactLink.target = "_blank";
    contactLink.rel = "noopener noreferrer";

    contactLink.setAttribute(
        "aria-label",
        `Consultar precio de huevos ${egg.classification} por WhatsApp`
    );


    // Ensamblaje final de la tarjeta.
    card.append(
        heading,
        priceList,
        contactLink
    );

    return card;
}


/**
 * Genera todas las tarjetas de precios
 * y las inserta en el contenedor del HTML.
 */
function initializeEggPrices() {
    const container = document.querySelector("#egg-prices");

    if (!container) {
        return;
    }

    // Indica que el contenido se está actualizando.
    container.setAttribute("aria-busy", "true");

    // Elimina el contenido anterior.
    container.replaceChildren();

    // Genera una tarjeta por clasificación.
    EGG_PRICES.forEach((egg) => {
        const card = createEggPriceCard(egg);

        container.appendChild(card);
    });

    // Indica que la actualización ha terminado.
    container.setAttribute("aria-busy", "false");
}


/* ---------------------------------------------------------
   7. AÑO AUTOMÁTICO DEL FOOTER
   --------------------------------------------------------- */

function initializeCurrentYear() {
    const yearElement = document.querySelector("#current-year");

    if (!yearElement) {
        return;
    }

    // Obtiene el año actual del sistema.
    yearElement.textContent = new Date().getFullYear();
}


/* ---------------------------------------------------------
   8. ANIMACIONES DE APARICIÓN
   --------------------------------------------------------- */

/*
 * IntersectionObserver detecta cuándo un elemento
 * entra en la zona visible de la pantalla.
 *
 * En ese momento se agrega la clase "is-visible",
 * que activa la animación definida en CSS.
 *
 * Si el navegador no soporta IntersectionObserver,
 * los elementos permanecen visibles.
 */

function initializeRevealAnimations() {
    const revealElements = document.querySelectorAll("[data-reveal]");

    // No hay elementos que animar.
    if (revealElements.length === 0) {
        return;
    }

    // Compatibilidad con navegadores sin IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }


    // Observa cuándo los elementos entran en pantalla.
    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                // Activa la animación.
                entry.target.classList.add("is-visible");

                // Deja de observar el elemento.
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12
        }
    );


    // Registra todos los elementos que tendrán animación.
    revealElements.forEach((element) => {
        observer.observe(element);
    });
}


/* ---------------------------------------------------------
   9. INICIALIZACIÓN DEL SITIO
   --------------------------------------------------------- */

/*
 * Todas las funciones principales se ejecutan desde aquí.
 *
 * Si agregas una nueva funcionalidad:
 * 1. Crea su función.
 * 2. Agrégala a este bloque.
 *
 * De esta manera, el archivo permanece organizado.
 */

function initializeWebsite() {
    document.documentElement.classList.add("js-enabled");

    initializeWhatsAppLinks();
    initializeMobileMenu();
    initializeEggPrices();
    initializeCurrentYear();
    initializeRevealAnimations();
}


// Espera a que el documento HTML esté disponible.
document.addEventListener("DOMContentLoaded", initializeWebsite);
