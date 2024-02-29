# React + Vite
# Movie Challenge con Framework

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Consideraciones técnicas](#5-consideraciones-técnicas)
- [6. Criterios mínimos de aceptación del proyecto](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [7. Despliegue](#7-despliegue)
- [8. Consideraciones para pedir tu Project Feedback](#8-consideraciones-para-pedir-tu-project-feedback)
- [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)

---

## 1. Preámbulo

La manera en que vemos películas ha cambiado radicalmente durante los últimos
años debido, en parte, a la aparición de los servicios de
[_streaming_](https://es.wikipedia.org/wiki/Streaming) que nos permiten hacerlo
desde donde estemos y en cualquier momento. El mejor reflejo de este fenómeno es
el éxito de Netflix, HBO y Disney+, etc.

Creemos que hay una gran oportunidad de proponer productos/experiencias
innovadoras de todo tipo utilizando datos de películas (directorxs, actorxs,
sagas, secuelas, fechas, etc.). Podríamos pensar en juegos, comunidades,
catálogos, recomendaciones basadas en gustos personales, etc. (sólo por
mencionar algunas ideas obvias).

![Pelis](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumen del proyecto

En este proyecto, crearás una página web destinada a visualizar, filtrar y
ordenar el catálogo de películas de
[_The Movie Database API V3_](https://developer.themoviedb.org/docs).
Esta página puede servir como un catálogo de
películas general, pero también, si te animas,
puedes considerar la posibilidad de diseñarla
para un público y usuarias específicas
con preferencias como "películas western"
o "películas de las 80's" por ejemplo.

Para implementar este proyecto deberás elegir un framework entre
[React](https://reactjs.org/) y [Angular](https://angular.io/).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web:
[_mantener la interfaz sincronizada con el estado_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Esto nos permite concentrarnos mejor (dedicar más tiempo) en las
características _específicas_ de nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 3. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

- [ ] **Uso de media queries**

  <details><summary>Links</summary><p>

  * [CSS media queries - MDN](https://developer.mozilla.org/es/docs/CSS/Media_queries)
</p></details>

### JavaScript

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Cabeceras (headers)**

  <details><summary>Links</summary><p>

  * [HTTP headers - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)
</p></details>

- [ ] **Cuerpo (body)**

  <details><summary>Links</summary><p>

  * [Cuerpo de Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages#cuerpo)
</p></details>

- [ ] **Verbos HTTP**

  <details><summary>Links</summary><p>

  * [Métodos de petición HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

- [ ] **Encodings y JSON**

  <details><summary>Links</summary><p>

  * [Introducción a JSON - Documentación oficial](https://www.json.org/json-es.html)
</p></details>

- [ ] **CORS (Cross-Origin Resource Sharing)**

  <details><summary>Links</summary><p>

  * [Control de acceso HTTP (CORS) - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
</p></details>

### Angular

- [ ] **Components & templates**

  <details><summary>Links</summary><p>

  * [Angular Components Overview - Documentación oficial (en inglés)](https://angular.io/guide/component-overview)
  * [Introduction to components and templates - Documentación oficial (en inglés)](https://angular.io/guide/architecture-components#introduction-to-components)
</p></details>

- [ ] **Directivas estructurales (ngIf / ngFor)**

  <details><summary>Links</summary><p>

  * [Writing structural directives - Documentación oficial (en inglés)](https://angular.io/guide/structural-directives)
</p></details>

- [ ] **@Input | @Output**

  <details><summary>Links</summary><p>

  * [Component interaction - Documentación oficial (en inglés)](https://angular.io/guide/component-interaction#component-interaction)
</p></details>

- [ ] **Creación y uso de servicios**

  <details><summary>Links</summary><p>

  * [Providing services - Documentación oficial (en inglés)](https://angular.io/guide/architecture-services#providing-services)
</p></details>

- [ ] **Manejo de rutas**

  <details><summary>Links</summary><p>

  * [In-app navigation: routing to views - Documentación oficial (en inglés)](https://angular.io/guide/router)
</p></details>

- [ ] **Creación y uso de Observables.**

  <details><summary>Links</summary><p>

  * [Observables in Angular - Documentación oficial (en inglés)](https://angular.io/guide/observables-in-angular)
</p></details>

- [ ] **Uso de HttpClient**

  <details><summary>Links</summary><p>

  * [Communicating with backend services using HTTP - Documentación oficial (en inglés)](https://angular.io/guide/http)
</p></details>

- [ ] **Estilos de componentes (ngStyle / ngClass)**

  <details><summary>Links</summary><p>

  * [Template syntax - Documentación oficial (en inglés)](https://angular.io/guide/template-syntax#built-in-directives)
</p></details>

### React

- [ ] **JSX**

  <details><summary>Links</summary><p>

  * [Presentando JSX - Documentación oficial](https://es.react.dev/learn/writing-markup-with-jsx)
</p></details>

- [ ] **Componentes y propiedades (props)**

  <details><summary>Links</summary><p>

  * [Componentes y propiedades - Documentación oficial](https://es.react.dev/learn/passing-props-to-a-component)
</p></details>

- [ ] **Manejo de eventos**

  <details><summary>Links</summary><p>

  * [Manejando eventos - Documentación oficial](https://es.react.dev/learn/responding-to-events)
</p></details>

- [ ] **Listas y keys**

  <details><summary>Links</summary><p>

  * [Listas y keys - Documentación oficial](https://es.react.dev/learn/rendering-lists)
</p></details>

- [ ] **Renderizado condicional**

  <details><summary>Links</summary><p>

  * [Renderizado condicional - Documentación oficial](https://es.react.dev/learn/conditional-rendering)
</p></details>

- [ ] **Elevación de estado**

  <details><summary>Links</summary><p>

  * [Levantando el estado - Documentación oficial](https://es.react.dev/learn/sharing-state-between-components)
</p></details>

- [ ] **Hooks**

  <details><summary>Links</summary><p>

  * [Presentando Hooks - Documentación oficial](https://es.react.dev/reference/react)
</p></details>

- [ ] **CSS modules**

  <details><summary>Links</summary><p>

  * [Adding a CSS Modules Stylesheet - Documentación de Create React App (en inglés)](https://vitejs.dev/guide/features.html#css-modules)
</p></details>

- [ ] **React Router**

  <details><summary>Links</summary><p>

  * [Quick Start - Documentación oficial (en inglés)](https://reactrouter.com/en/main/start/tutorial)
</p></details>

### Vue

- [ ] **Instancia de Vue.js**

  <details><summary>Links</summary><p>

  * [La instancia Vue - Documentación oficial](https://es.vuejs.org/v2/guide/instance.html)
</p></details>

- [ ] **Datos y métodos**

  <details><summary>Links</summary><p>

  * [Datos y Métodos - Documentación oficial](https://es.vuejs.org/v2/guide/instance.html#Datos-y-Metodos)
</p></details>

- [ ] **Uso y creación de componentes**

  <details><summary>Links</summary><p>

  * [Conceptos Básicos de Componentes - Documentación oficial](https://es.vuejs.org/v2/guide/components.html)
</p></details>

- [ ] **Props**

  <details><summary>Links</summary><p>

  * [Pasando datos a componentes secundarios con Props - Documentación oficial](https://es.vuejs.org/v2/guide/components.html#Pasando-datos-a-componentes-secundarios-con-Props)
</p></details>

- [ ] **Directivas (v-bind | v-model)**

  <details><summary>Links</summary><p>

  * [v-bind - Documentación oficial](https://es.vuejs.org/v2/api/#v-bind)
  * [Binding en Formularios - Documentación oficial](https://es.vuejs.org/v2/guide/forms.html)
</p></details>

- [ ] **Iteración (v-for)**

  <details><summary>Links</summary><p>

  * [Mapeando una matriz a elementos con v-for - Documentación oficial](https://es.vuejs.org/v2/guide/list.html#Mapeando-una-matriz-a-elementos-con-v-for)
</p></details>

- [ ] **Eventos (v-on)**

  <details><summary>Links</summary><p>

  * [Manejo de eventos - Documentación oficial](https://es.vuejs.org/v2/guide/events.html)
</p></details>

- [ ] **Propiedades Computadas y Observadores**

  <details><summary>Links</summary><p>

  * [Propiedades Computadas y Observadores](https://es.vuejs.org/v2/guide/computed.html)
</p></details>

- [ ] **Routing**

  <details><summary>Links</summary><p>

  * [Getting Started - Documentación oficial de Vue Router](https://router.vuejs.org/guide/#html)
</p></details>

- [ ] **Clases y Estilos**

  <details><summary>Links</summary><p>

  * [Enlace Clases y Estilos - Documentación oficial](https://es.vuejs.org/v2/guide/class-and-style.html)
</p></details>

### typescript

- [ ] **Chequeo estático de tipos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking)
</p></details>

- [ ] **Rigurosidad**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness)
  * [Documentación oficial de Typescript](https://www.typescriptlang.org/tsconfig#Type_Checking_6248)
</p></details>

- [ ] **Tipos primitivos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
</p></details>

- [ ] **Arreglos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
</p></details>

- [ ] **Tipo `any`**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
</p></details>

- [ ] **Funciones**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)
  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/functions.html)
</p></details>

- [ ] **Propiedades opcionales**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)
</p></details>

- [ ] **Tipos Union**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
</p></details>

- [ ] **Alias de tipos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
</p></details>

- [ ] **Interfaces**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
</p></details>

- [ ] **Type assertions**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
</p></details>

- [ ] **Tipos literales**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
</p></details>

- [ ] **null y undefined**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)
</p></details>

- [ ] **Enums**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums)
</p></details>

- [ ] **Narrowing**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
</p></details>

- [ ] **Campos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#fields)
</p></details>

- [ ] **Constructors**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors)
</p></details>

- [ ] **Métodos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)
</p></details>

- [ ] **Getters y Setters**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)
</p></details>

- [ ] **implements Clausas**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses)
</p></details>

- [ ] **extends Clausas**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses)
</p></details>

- [ ] **Visibilidad de miembros de clase (public, protected, private)**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)
</p></details>

- [ ] **Miembros de clase estáticos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members)
</p></details>

- [ ] **this**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-at-runtime-in-classes)
</p></details>

- [ ] **Clases abstractas**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)
</p></details>

- [ ] **Decoradores**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/decorators.html)
</p></details>

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

## 4. Consideraciones generales

Este proyecto se debe "resolver" de manera individual.

El rango de tiempo estimado para completar el proyecto es de 2 a 3 Sprints.

Los tests unitarios deben cubrir un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, deberás definir la estructura de carpetas y archivos que consideres
necesaria. Puedes guiarte de las convenciones del _framework_ elegido. Por ende,
los _tests_ y el _setup_ necesario para ejecutarlos, serán hechos por ti.

## 5. Consideraciones técnicas

La aplicación debe ser un _Single Page App_.

La aplicación no debe ser _responsive_.

Para poder usar la API de
[_The Movie Database API V3_](https://developer.themoviedb.org/docs)
deberás crear una cuenta, luego
una llave (_key_) de acceso y usarla en cada petición
que hagas al servidor. Recuerda que tienes un máximo
de 1.000 peticiones diarias a la APIs por cada
[IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP),
creemos que es suficiente, pero te recomendamos hacer un uso
responsable de este recurso gratuito.

Uno de los mayores objetivos de este proyecto es aprender a usar una librería o
framework popular para desarrollar una web app.
Debes elegir entre [React](https://es.react.dev/) o [Angular](https://angular.io/).

Ten en cuenta que si eliges Angular, tienes la obligación de usar [TypeScript](https://www.typescriptlang.org/).
_Typescript_ es un lenguaje de programación fuertemente tipado basado en
javascript.

Si eliges React, la decisión de usar Typescript es opcional (pero te lo
recomendamos!). Aquí puedes encontrar más información en relación a cómo iniciar
tu proyecto con [Typescript y React](https://itnext.io/create-react-v18-typescript-project-with-vite-d0d602e4a60e).

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

## 6. Criterios mínimos de aceptación del proyecto

### Prototipo de baja fidelidad

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos entrega una primera iteración del prototipo de baja fidelidad
de la aplicación en [esta imagen](./docs/movie-list.png) y esta [otra](./docs/movie-detail.png).

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

---

#### [Historia de usuario 1] Listado de películas

Yo como usuaria quiero visualizar en un tabla (filas y columnas) el catálogo de películas

##### Criterios de aceptación

- Se debe usar el _endpoint_ [/discover/movie](https://developer.themoviedb.org/reference/discover-movie).
- La aplicación cuenta con una paginación para explorar el catálogo por páginas.
- Para cada película se debe mostrar como mínimo:
poster, título original y año de lanzamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

#### [Historia de usuario 2] Filtro y ordenamiento

Yo como usuaria quiero filtrar y ordenar el catálogo de películas usando
los criterios soportados por _TheMovie Database API V3_

##### Criterios de aceptación

- Para filtrar se debe usar el _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y alguno de sus parámetros como por ejemplo _with_genres_.
- Para ordenar se debe usar el _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y alguno de sus parámetros como por ejemplo _sort_by_.
- La paginación debe conservar el filtro y ordenamiento
- Para cada película se debe mostrar como mínimo:
poster, título original y año de lanzamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

#### [Historia de usuario 3] Detalle de una película

Yo como usuaria quiero consultar los detalles de una película

##### Criterios de aceptación

- Se debe usar el _endpoint_
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Para la película se debe mostrar como mínimo: poster, título original,
año de lanzamiento, géneros, promedio de votación y total de votos.
- La interfaz debe permitir retornar al listado de películas conservando
el filtro y ordenamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

## 7. Despliegue

Puedes elegir el proveedor (o proveedores) que prefieras junto
con el mecanismo de despligue y estrategia de alojamiento.
Te recomendamos explorar las siguientes opciones:

- [Vercel](https://vercel.com/) es una plataforma de _despliegue_ que
nos permite desplegar nuestra aplicación web estática (HTML, CSS y
JavaScript) y también nos permite desplegar aplicaciones web que se
ejecutan en el servidor (Node.js).
- [Netlify](https://www.netlify.com/) al igual que Vercel, es una
plataforma de _despliegue_ que nos permite desplegar nuestra aplicación
web estática (HTML, CSS y JavaScript) y también nos permite desplegar
aplicaciones web que se ejecutan en el servidor (Node.js).

## 8. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

- [ ] Protipo de alta fidelidad en Figma
- [ ] Cumple con todos los [criterios mínimos de aceptación](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [ ] Está subido a GitHub
- [ ] Esta [desplegado](#7-despliegue)
- [ ] Tiene un README con la definición del producto.

Recuerda que debes hacer una autoevaluación de objetivos de aprendizaje
y life skills desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista
para tu sesión de Project Feedback.

## 9. Pistas, tips y lecturas complementarias

Súmate al canal de Slack
[#project-movie-challenge-fw](https://claseslaboratoria.slack.com/archives/C04A0GS1WJX)
para conversar y pedir ayuda del proyecto.

### Prototipo de alta fidelidad

Tomando como base el prototipo de baja fidelidad entregado, crea uno de alta
fidelidad en Figma. Define una paleta de colores y un diseño grafico. Procura
que esto te tome entre 1 o 2 días.

### Explora y consume The Movie Database API

Explora la
[documentación](https://developer.themoviedb.org/docs)
de The Movie Database API. Inicia leyendo la sección
[_Getting Started_](https://developer.themoviedb.org/docs/getting-started),
luego
[_AUTHENTICATION_ --> _Application_](https://developer.themoviedb.org/docs/authentication-application)
y finalmente las referencias de endpoints
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
y
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).

Luego crear una cuenta y genera una llave
(key) de acceso para consumir la API.

Finalmente, realiza peticiones HTTP de prueba a la API usando herramientas como
[Postman](https://www.postman.com/)
o
[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).
Identifica los headers, body, verbos, códigos de respuesta y encodings las peticiones.

### Explora la documentacion del framework  elegido

La comunidad de desarrolladoras de cada framework se ha forzado mucho por crear
documentaciones amigables para quienes inician con cada tecnología. Por lo tanto,
date la oportunidad de explorar la documentación y probar sus ejemplos y tutoriales.

### Planifica la implementación de la primera historia de usuaria

Toma la primera historia de usuaria y
divídela en tareas más pequeñas. Identifica
el orden y prioridad de cada tarea.
Documenta tu planificacion en Trello o Github Project.

### Implementa tu primer componente

Toma la primera vista de prototipo de alta e implementala.
Te sugerimos seguir los siguientes
pasos independiente del framework  que uses:

- Paso 1: Separa la UI en una jerarquía de componentes
- Paso 2: Construye una versión estática de la UI sin añadir ninguna
interactividad aún
- Paso 3: Encuentra la representación mínima pero completa del estado de la UI.
Piensa en el estado como el conjunto mínimo de datos cambiantes que
la aplicación necesita recordar.
- Paso 4: Después de identificar los datos mínimos de estado de tu aplicación,
debes identificar qué componente es responsable de cambiar este estado,
o posee el estado.
- Paso 5: Identifica el flujo de comunicación entre cada componente:
padre a hijo o hijo a padre. Implementa la estrategia identificada tal como
te sugiere el framework.

### Frameworks / libraries

- [React](https://react.dev/)
- [Angular](https://angular.io/)
- [ViteJs](https://vitejs.dev/)