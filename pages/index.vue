<script setup lang="ts">
</script>

<template>
  <div class="page">
    <Head>
      <Title>Expo IF ITK 2024</Title>
    </Head>

    <Loading />

    <!-- Index -->
    <LayoutHero />

    <!-- Prestasi -->
    <div class="achievement">
      <div>Memiliki Prestasi</div>
      <div></div>
    </div>

    <MenuButton class="menu-btn" />
  </div>
</template>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
}

.menu-btn {
  position: fixed;
  top: -0.8rem;
  left: -1.65rem;
}
</style>
