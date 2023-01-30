<script setup>
import cabecera from './components/cabecera.vue'
import contenido from './components/contenido.vue'
import pie from './components/pie.vue'
</script>

<template>
  <cabecera />

  <main>
    <router-view />
  </main>

  <pie />
</template>

<style scoped>

</style>
