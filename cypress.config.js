const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí se registran las tareas
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        },
      });
    }
  }
});

