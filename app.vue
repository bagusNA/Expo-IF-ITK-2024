<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/main.scss";

.app {
  min-height: 100vh;
  display: grid;
  overflow-x: hidden;

  color: $text-light;
  background-color: $background;
  font-family: Montserrat, Inter, serif;
}
</style>
