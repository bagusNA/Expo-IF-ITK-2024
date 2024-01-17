<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.timeline()
      .delay(0.5)
      .to('.loading__expand', {
        duration: 1,
        "--clip": "150%",
      })
      .to('.loading__logo', {
        duration: 1,
        opacity: 0,
      }, '<')
      .to('.loading__logo', {
        duration: 1.5,
        ease: "power2.out",
        opacity: 1,
        filter: "brightness(0%) invert(1)",
        zIndex: 10,
      }, '-=.5')
      .to('.loading', {
        duration: 1.5,
        opacity: 0,
        display: "none",
      })
      .call(() => {
        document.body.removeAttribute('style')
      }, [], '-=1')
})
</script>

<template>
  <!-- Loading pertama ketika page baru dibuka -->
  <div class="loading">
    <img src="/img/logo-if.png" alt="Logo Informatika ITK" class="loading__logo">
    <div class="loading__expand"></div>
  </div>
</template>

<style lang="scss">
.loading {
  position: fixed;
  background-color: $surface;
  display: grid;
  align-items: center;
  justify-content: center;
  z-index: 5;
  overflow-y: hidden;

  &,
  &__expand {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  &__logo {
    width: 200px;
    height: 200px;
  }

  &__expand {
    --clip: 0%;

    background-color: $background;
    position: fixed;
    overflow-y: hidden;
    clip-path: circle(var(--clip) at 100% 100%);
    z-index: 7;
  }
}

</style>
