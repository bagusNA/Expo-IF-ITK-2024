<script setup lang="ts">
</script>

<template>
  <section id="hero">
    <div class="catchphrase">
      <p class="subtitle">Program Studi</p>
      <h1 class="title">Informatika</h1>
    </div>

    <div class="shape-wrapper">
      <img src="/img/shape-cube.png" alt="" class="shape-cube">
      <img src="/img/shape-triangle.png" alt="" class="shape-triangle">
      <img src="/img/laptop.png" alt="" class="shape-laptop">
    </div>

    <div class="bottom-shape">

    </div>
  </section>
</template>

<style lang="scss" scoped>
#hero {
  min-height: 800px;
  padding-top: 96px;
  background: linear-gradient(180deg, $background 0, #d5d5b1 60%, #d2d2d2 100%);
  position: relative;

  .catchphrase {
    padding: 0 32px;
    text-transform: uppercase;
    position: relative;
    z-index: 4;

    .title {
      font-size: 2rem;
      font-weight: bolder;
    }

    .subtitle {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }

  .shape-wrapper {
    position: relative;
    height: 300px;
    width: 300px;
    .shape-cube,
    .shape-triangle,
    .shape-laptop {
      position: absolute;
      z-index: 2;
      animation: bop 10s infinite;
    }

    .shape-triangle {
      right: 25%;
    }

    .shape-cube {
      top: 40%;
      right: 40%;
      animation-delay: 6000ms;
    }

    .shape-laptop {
      z-index: 3;
      top: -40%;
      right: -240px;
      animation-delay: 2000ms;
    }
  }

  .bottom-shape {
    position: absolute;
    bottom: -15%;
    right: -20%;
    height: 400px;
    width: 130%;
    background-color: $background;
    border-radius: 100% 0 0 0;
  }
}

@keyframes bop {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(18px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
