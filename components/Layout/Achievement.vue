<template>
  <section id="achievement" class="achievement">
    <h2 class="achievement__title">Dengan Beragam Prestasi</h2>
    <div class="achievement__gallery">
      <img src="/img/achievement-1.png" alt="Prestasi 1" height="200">
      <img src="/img/achievement-2.jpg" alt="Prestasi 2" height="200">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.achievement {
  width: 100%;
  margin-top: 64px;

  &__title,
  &__gallery {
    padding-left: 12px;
  }

  &__title {
    width: fit-content;
    margin-bottom: 18px;
    font-size: 1rem;
  }

  &__gallery {
    display: flex;
    gap: 12px;
    overflow-x: auto;

    & > img {
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);}
  }
}
</style>
<script setup lang="ts">
</script>
