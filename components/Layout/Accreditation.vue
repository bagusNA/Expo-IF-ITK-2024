<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline()

  tl.from('.accreditation__wrapper', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: '.accreditation__wrapper',
      start: '+=100 +=70%',
      end: 'center +=70%',
      scrub: true,
    }
  })

  tl.from('.accreditation__shape--right-top', {
    opacity: 0,
    yPercent: 50,
    scrollTrigger: {
      trigger: '.accreditation__wrapper',
      start: '-=200 +=70%',
      end: 'center +=70%',
      scrub: true,
    }
  })

  tl.from('.accreditation__shape--left', {
    opacity: 0,
    yPercent: 50,
    scrollTrigger: {
      trigger: '.accreditation__wrapper',
      start: '80 +=70%',
      end: 'center +=70%',
      scrub: true,
    }
  })

  tl.from('.accreditation__shape--right-center', {
    opacity: 0,
    yPercent: 50,
    scrollTrigger: {
      trigger: '.accreditation__wrapper',
      start: '+=180 +=70%',
      end: 'center +=70%',
      scrub: true,
    }
  })

  tl.from('.accreditation__shape--right-bottom', {
    opacity: 0,
    yPercent: 50,
    scrollTrigger: {
      trigger: '.accreditation__wrapper',
      start: '+=250 +=70%',
      end: 'center +=70%',
      scrub: true,
    }
  })

  tl.from('.bg', {
    opacity: 0,
    yPercent: 50,
    scrollTrigger: {
      trigger: '.accreditation__wrapper',
      start: '-=250 +=70%',
      end: 'center +=70%',
      scrub: true,
    }
  })
})
</script>

<template>
  <section id="accreditation">
    <div class="accreditation">
      <div class="accreditation__wrapper">
        <p class="accreditation__subtitle">Dengan</p>
        <h2 class="accreditation__title">Akreditasi "Baik"</h2>
      </div>

      <img src="/img/shape-brick-long.png" alt="" class="accreditation__shape accreditation__shape--left">
      <img src="/img/shape-gon.png" alt="" class="accreditation__shape accreditation__shape--right-top">
      <img src="/img/shape-brick-smol.png" alt="" class="accreditation__shape accreditation__shape--right-center">
      <img src="/img/shape-brick-chonky.png" alt="" class="accreditation__shape accreditation__shape--right-bottom">
    </div>

    <div class="bg"></div>
    <div class="bg bg--left"></div>
  </section>
</template>

<style lang="scss" scoped>
#accreditation {
  position: relative;
  height: 1600px;
  margin-top: -350px;
  z-index: 1;

  .bg {
    --size: 550px;
    content: "";
    position: absolute;
    top: 20%;
    right: 0;
    width: var(--size);
    height: var(--size);
    clip-path: polygon(0 0, 100% 70%, 0% 100%);
    background-color: $accent;
    transform: scaleX(-1);

    &--left {
      right: revert;
      left: 10%;
      top: 50%;
      transform: scaleX(1);
    }
  }
}

.accreditation {
  display: grid;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 5;
  height: 100%;
  backdrop-filter: blur(120px);

  &__wrapper {
    padding: 300px 0;
  }

  &__title {
    margin-top: 0.35rem;
    font-size: 2.25rem;
    font-weight: 900;
  }

  &__subtitle {
    font-size: 1.35rem;
    font-weight: 600;
  }

  &__shape {
    position: absolute;
    animation: bop 8s infinite;

    &--left {
      top: 22%;
      left: -15rem;
    }

    &--right-top {
      top: 13%;
      right: -16rem;
    }

    &--right-center {
      top: 30%;
      right: -16rem;
    }

    &--right-bottom {
      top: 50%;
      right: -13rem;
    }
  }
}
</style>
