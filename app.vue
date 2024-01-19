<script setup lang="ts">
onMounted(() => {
  document.body.style.overflow = 'hidden'
})
</script>

<template>
  <div id="app" class="app">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/main.scss";

.app {
  color: $text-light;
  background-color: $background;
  font-family: Montserrat, Inter, serif;
}
</style>
