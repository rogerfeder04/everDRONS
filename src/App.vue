<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
// App.vue simplificado - solo maneja el router-view
</script>

<style>
/* Estilos globales básicos */
#app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Reset básico */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', Arial, sans-serif;
}
</style>