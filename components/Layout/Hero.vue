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

    <div class="bottom-shape"></div>
  </section>
</template>

<style lang="scss" scoped>
#hero {
  min-height: 650px;
  padding-top: 96px;
  background: linear-gradient(180deg, $background 0, #d5d5b1 60%, #d2d2d2 100%);
  position: relative;
  overflow: hidden;

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
      font-size: 0.9rem;
      font-weight: bold;
    }
  }

  .shape-wrapper {
    position: relative;
    height: 300px;
    .shape-cube,
    .shape-triangle,
    .shape-laptop {
      position: absolute;
      z-index: 2;
      animation: bop 10s infinite;
    }

    &:before,
    &:after {
      --size: 32px;

      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      background-color: $surface;
      animation: bop 8s infinite;
    }

    &:before {
      --size: 24px;
      top: revert;
      bottom: -2rem;
      right: 50%;
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
    height: 320px;
    width: 130%;
    background-color: $background;
    border-radius: 100% 0 0 0;
  }
}

@media (min-width: 640px) {
  #hero {
    display: flex;
    align-items: start;

    .catchphrase {
      padding: 100px 72px 0;

      .title {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1rem;
      }
    }

    .shape-wrapper {
      flex-grow: 1;
    }
  }
}
</style>
