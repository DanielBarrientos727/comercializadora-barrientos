# Comercializadora Barrientos

Sitio web comercial para **Comercializadora Barrientos**, un negocio familiar ubicado en Armenia, Quindío, Colombia, dedicado a la comercialización de huevos de finca, verduras y hortalizas.

El proyecto busca fortalecer la presencia digital del establecimiento, facilitar la consulta de productos y precios y ofrecer un canal de comunicación directo con los clientes mediante WhatsApp.

## Objetivos del proyecto

- Crear una presencia digital para un negocio familiar.
- Presentar los productos comercializados.
- Facilitar la consulta de precios de huevos.
- Proporcionar información sobre horarios y ubicación.
- Habilitar el contacto directo mediante WhatsApp.
- Ofrecer información sobre la cobertura de entregas.
- Desarrollar un sitio web adaptable a dispositivos móviles.

## Información comercial

| Información | Detalle |
|---|---|
| Nombre | Comercializadora Barrientos |
| Actividad | Comercialización de huevos, verduras y hortalizas |
| Responsable | Daniel |
| Ubicación | Bosques de Pinares, Armenia, Quindío |
| Horario | 8:00 a. m. – 10:00 p. m. |
| WhatsApp | +57 321 353 2665 |
| Entregas | Sector sur de Armenia |
| Ubicación digital | [Google Maps](https://www.google.com/maps/place/Comercializadora+barrientos/@4.511887,-75.700288,3554m/data=!3m1!1e3!4m6!3m5!1s0x8e38f50077b0550f:0x336737aaf509d5d5!8m2!3d4.5118368!4d-75.6964596) |

## Productos y precios

El establecimiento comercializa huevos de finca en cuatro clasificaciones:

| Clasificación | Cubeta (30 huevos) | Precio por unidad |
|---|---:|---:|
| A | $16.000 COP | $600 COP |
| AA | $17.600 COP | $600 COP |
| AAA | $19.000 COP | $700 COP |
| SUPER | $20.000 COP | $700 COP |

También se presentan referencias de precios para otras cantidades:

- Media cubeta: 15 huevos.
- Docena: 12 huevos.
- Unidad: 1 huevo.

Los valores de media cubeta y docena se calculan a partir del precio individual correspondiente. Son referencias calculadas y no tarifas independientes confirmadas.

Los precios pueden modificarse desde el archivo JavaScript del proyecto.

## Tecnologías utilizadas

El proyecto utiliza tecnologías fundamentales del desarrollo web:

| Tecnología | Aplicación |
|---|---|
| HTML5 | Estructura semántica y contenido del sitio. |
| CSS3 | Diseño visual, estilos y adaptación responsive. |
| JavaScript ES6+ | Interactividad, generación de precios y funcionalidades. |
| Git | Control de versiones. |
| GitHub | Repositorio y alojamiento del código fuente. |
| GitHub Pages | Alternativa de publicación estática. |

Se utiliza JavaScript vanilla, sin frameworks ni bibliotecas externas para la lógica de la aplicación.

### Restricciones técnicas

- Sin React, Angular o Vue.
- Sin Bootstrap o Tailwind.
- Sin Node.js.
- Sin backend.
- Sin bases de datos.
- Sin herramientas de compilación.
- Sin dependencias obligatorias de terceros.

La aplicación está concebida como un sitio web estático.

## Funcionalidades

### Presentación comercial

- Página de inicio con identidad visual propia.
- Presentación del establecimiento.
- Secciones informativas sobre los productos.
- Diseño organizado y adaptable.

### Catálogo

- Categorías de huevos de finca, verduras y hortalizas.
- Fotografías ilustrativas.
- Información para consultar disponibilidad.

### Precios dinámicos

- Cuatro clasificaciones de huevos.
- Precio por cubeta.
- Precio por media cubeta.
- Precio por docena.
- Precio por unidad.
- Generación dinámica de las tarjetas mediante JavaScript.

### Contacto

- Enlaces directos a WhatsApp.
- Mensajes iniciales personalizados.
- Consulta de productos y precios.
- Consulta de disponibilidad y entregas.

### Ubicación

- Información del sector Bosques de Pinares.
- Integración de Google Maps.
- Enlace para consultar la ubicación.

### Experiencia de usuario

- Navegación responsive.
- Menú adaptable a dispositivos móviles.
- Desplazamiento suave.
- Animaciones discretas.
- Año automático en el pie de página.
- Consideraciones de accesibilidad y movimiento reducido.

## Diseño e identidad visual

La identidad visual utiliza una combinación de colores asociados con productos agrícolas y mercados de alimentos.

| Color | Código | Aplicación |
|---|---|---|
| Amarillo | `#F4C542` | Elementos destacados y botones. |
| Amarillo claro | `#FFE9A3` | Fondos complementarios. |
| Verde vegetal | `#315C38` | Identidad y navegación. |
| Crema | `#FFF9E9` | Fondo principal. |
| Texto oscuro | `#292820` | Contenido y contraste. |

El diseño sigue un enfoque *mobile-first*, priorizando la experiencia de navegación en teléfonos móviles sin descuidar tabletas y computadores.

## Estructura del proyecto

```text
comercializadora-barrientos/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
├── LICENSE
│
└── README.md
```

### Responsabilidad de los archivos

**index.html**

Contiene la estructura semántica del sitio, sus secciones, metadatos, navegación y referencias a las hojas de estilo y JavaScript.

**css/styles.css**

Define la identidad visual, los componentes, la distribución de los elementos, las animaciones y los estilos responsive.

**js/main.js**

Centraliza los datos de los huevos, genera las tarjetas de precios, construye los enlaces de WhatsApp y administra las interacciones de la página.

**README.md**

Documenta los objetivos, tecnologías, funcionalidades, metodología y funcionamiento del proyecto.

**LICENSE**

Contiene la licencia del repositorio.

## Metodología de desarrollo: Vibe Coding

Este proyecto se desarrolló tomando como referencia los conocimientos adquiridos en formación sobre inteligencia artificial generativa y Vibe Coding.

El Vibe Coding consiste en utilizar instrucciones en lenguaje natural para orientar la creación de software mediante herramientas de inteligencia artificial.

En este enfoque, el desarrollador define los objetivos, proporciona contexto, establece requisitos, revisa los resultados y orienta las mejoras.

La inteligencia artificial funciona como asistente durante el proceso de desarrollo, pero la supervisión y validación humana siguen siendo fundamentales.

### Proceso aplicado

1. Identificación de una necesidad real: crear una página web para un negocio familiar.
2. Recopilación de información comercial y requisitos.
3. Definición de la estructura y las secciones del sitio.
4. Elaboración de instrucciones (prompts) con contexto y objetivos.
5. Generación y organización del código.
6. Revisión de la estructura HTML, los estilos CSS y la lógica JavaScript.
7. Ajustes mediante retroalimentación iterativa.
8. Verificación de la experiencia de usuario y adaptación a dispositivos móviles.

### Principios de Vibe Coding considerados

- Ingeniería de prompts.
- Contextualización de las instrucciones.
- División del proyecto en tareas pequeñas.
- Diseño centrado en el usuario.
- Desarrollo iterativo.
- Supervisión humana (*Human-in-the-loop*).
- Revisión y validación del código.
- Uso responsable de la inteligencia artificial.

### Aprendizajes relacionados

El proceso también toma como referencia conceptos de inteligencia artificial generativa, herramientas de Claude, interpretación de información, diseño lógico, seguridad y privacidad.

La finalidad no es delegar completamente la programación a la IA, sino aprovecharla como herramienta de apoyo mientras se desarrolla la capacidad de comprender, evaluar y mantener el software.

## Formación relacionada con inteligencia artificial

Los conocimientos formativos utilizados como referencia para este proyecto proceden exclusivamente de los cursos de inteligencia artificial de **SoloLearn** relacionados a continuación.

| Curso | Plataforma | Expedición | ID de credencial |
|---|---|---|---|
| Meet Claude | SoloLearn | Noviembre de 2026 | `CC-FTTTPXLH` |
| Vibe Coding | SoloLearn | Noviembre de 2026 | `CC-ERLQYMC` |
| Brainstorm with AI | SoloLearn | Noviembre de 2026 | `CC-TOBMJUWC` |
| Write with AI | SoloLearn | Octubre de 2026 | `CC-ZR556GQZ` |

### Relación entre la formación y el proyecto

**Meet Claude**

Conocimientos introductorios sobre Claude y sus posibilidades para trabajar con información, documentos y tareas asistidas por inteligencia artificial.

**Vibe Coding**

Fundamentos de desarrollo asistido por IA, formulación de instrucciones, construcción progresiva de herramientas y revisión de resultados.

**Brainstorm with AI**

Uso de inteligencia artificial para explorar ideas, identificar necesidades, estructurar propuestas y transformar conceptos en soluciones.

**Write with AI**

Formulación y mejora de instrucciones, organización de información y producción de contenidos mediante herramientas de IA.

Estos cursos constituyen el contexto formativo del proyecto. No representan una certificación de calidad del software ni un aval comercial de SoloLearn.

## Recursos gráficos

Las imágenes del sitio son ilustrativas y se cargan mediante enlaces externos de:

- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)

Se utilizan fotografías relacionadas con huevos, productos agrícolas, verduras y hortalizas.

Las imágenes no deben interpretarse como fotografías reales del establecimiento.

Su carga depende de la disponibilidad de los servicios externos y de una conexión a Internet.

## Ejecución local

No se requiere instalación de dependencias ni configuración de un servidor backend.

### 1. Clonar el repositorio

```bash
git clone https://github.com/DanielBarrientos727/comercializadora-barrientos.git
```

### 2. Entrar al directorio

```bash
cd comercializadora-barrientos
```

### 3. Abrir el proyecto

Puedes abrir directamente `index.html` desde un navegador o utilizar Visual Studio Code con la extensión Live Server.

```bash
code .
```

## Publicación con GitHub Pages

El proyecto está preparado para publicarse mediante GitHub Pages.

Procedimiento:

1. Abrir el repositorio en GitHub.
2. Entrar en `Settings`.
3. Seleccionar `Pages`.
4. En `Build and deployment`, seleccionar `Deploy from a branch`.
5. Elegir la rama `main`.
6. Seleccionar la carpeta `/ (root)`.
7. Guardar los cambios.

Una vez completada la publicación, GitHub Pages proporcionará una dirección similar a:

```text
https://danielbarrientos727.github.io/comercializadora-barrientos/
```

La dirección estará disponible cuando la publicación se encuentre configurada y completada.

## Mantenimiento

Los datos comerciales se encuentran centralizados en `js/main.js`.

Para modificar los precios de los huevos, localiza el arreglo `eggProducts`:

```javascript
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
```

Los precios de media cubeta y docena se calculan automáticamente a partir de `unitPrice`.

También se pueden actualizar los mensajes de WhatsApp, las fotografías y la información comercial desde los archivos correspondientes.

## Alcance y limitaciones

Esta primera versión es un sitio web informativo y comercial.

No incluye:

- Carrito de compras.
- Pagos electrónicos.
- Gestión de inventario.
- Registro de usuarios.
- Panel administrativo.
- Sistema de pedidos con base de datos.
- Actualización automática de precios desde un servidor.

Las consultas y solicitudes de compra se realizan directamente por WhatsApp.

## Autoría y propósito

Proyecto desarrollado como ejercicio práctico de aprendizaje y aplicación de conocimientos de desarrollo web e inteligencia artificial.

**Comercializadora Barrientos**  
Armenia, Quindío, Colombia.

**Repositorio:**  
[DanielBarrientos727/comercializadora-barrientos](https://github.com/DanielBarrientos727/comercializadora-barrientos)

---

*La inteligencia artificial puede facilitar la construcción de software, pero comprender, revisar, probar y mantener el código sigue siendo responsabilidad del desarrollador.*