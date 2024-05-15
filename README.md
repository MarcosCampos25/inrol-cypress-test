# Proyecto de Pruebas Cypress para inrol.uy

Este es un proyecto sencillo de pruebas automatizadas con Cypress para la web [inrol.uy](https://inrol.uy). El proyecto consta de dos archivos de pruebas principales:

1. **Smoke Test**: Realiza una visita a cada página de la web y verifica algunos elementos para asegurar que las pantallas carguen correctamente.
2. **Validar Toast**: Valida la presencia y el contenido de mensajes de error (toasts) en ciertos contextos.

## Requisitos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)

## Instalación

Sigue estos pasos para descargar y configurar el proyecto:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/MarcosCampos25/inrol-cypress-test.git
   cd inrol-cypress-test
   npm install

## Estructura del Proyecto
- cypress/integration/smoke_test.spec.js: Contiene las pruebas de smoke test.
- cypress/integration/validar_toast.spec.js: Contiene las pruebas para validar mensajes de error (toasts).
- cypress/fixtures/: Carpeta para almacenar datos de prueba.
- cypress/plugins/: Carpeta para añadir y configurar plugins.
- cypress/support/: Carpeta para añadir comandos personalizados y configuraciones globales.


## Ejecutar pruebas

- npx cypress open (con interfaz gráfica)
- npx cypress run (sin interfaz gráfica)
- Para más opciones de ejecución se puede consultar la [documentación](https://docs.cypress.io/guides/guides/command-line) 

## Configuracion
- En el archivo *cypress.config.js* está la configuración, en el parámetro *baseUrl* estará la url base que se usará para las pruebas (Ej: localhost:5000 para ambiente de desarrollo o inrol.uy para ambiente de producción)

### Notas
Este proyecto ignora el directorio node_modules para mantener el repositorio limpio. Asegúrate de ejecutar npm install después de clonar el repositorio para instalar las dependencias necesarias.

### Contribuciones
Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor abre un issue o envía un pull request.
