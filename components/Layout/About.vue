<template>
  <section id="about">
    <div class="about__heading">
      <h2>Mempersembahkan</h2>
      <img src="/img/logo-itk.png" alt="Logo Institut Teknologi Kalimantan" class="about__logo">
    </div>

    <div class="about__section">
      <h3 class="about__section__title">Tentang Prodi Informatika</h3>
      <p class="about__section__description">Informatika adalah studi tentang penggunaan dan pengelolaan informasi dengan teknologi komputer, termasuk pengembangan perangkat lunak, analisis data, dan keamanan informasi.</p>
    </div>

    <div class="about__section">
      <h3 class="about__section__title">Tentang Prodi Informatika</h3>
      <p class="about__section__description">Informatika adalah studi tentang penggunaan dan pengelolaan informasi dengan teknologi komputer, termasuk pengembangan perangkat lunak, analisis data, dan keamanan informasi.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  display: grid;
  gap: 32px;
  position: relative;
  z-index: 2;
}

.about {
  &__heading {
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: 0.9rem;
    font-size:1.6vw;
  }

  &__logo {
    width: 20vw;
    margin-top: 32px;
    margin-bottom: 24px;
    filter: brightness(0) invert(1);
  }

  &__section {
    &__title {
      width: fit-content;
      background-color: $surface;
      color: $background;
      padding: 6px 16px 6px 24px;
      margin-bottom: 18px;
      font-weight: 600;
      position: relative;
      font-size: 1.5vw;

      &:before,
      &:after {
        content: "";
        position: absolute;
      }

      &:before {
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: $background;
      }

      &:after {
        top: 0;
        bottom: 0;
        right: -18px;
        width: 18px;
        background-color: $surface;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
      }
    }

    &__description {
      padding: 1.2% 1%;
      font-size: 1.5vw;
      font-weight: 500;
    }
      
    }
  }
  @media (max-width: 480px){
      .about__logo{
        width:40vw;
      }
      .about__section__description{
        font-size:3vw;
      }
    }
</style>
<script setup lang="ts">
</script>
