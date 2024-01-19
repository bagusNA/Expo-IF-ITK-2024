<script setup lang="ts">
const { $gsap } = useNuxtApp()

const achievements = [
  {
    src: '/img/achievement-1.png',
    alt: 'Best Mechanic Joints - Gamejam UGM',
    description: 'Tim Ouroboros Technologies meraih juara kategori Best Mechanics Joinst dalam GameJam UGM 2023 dengan game bertajuk Wizard Legacy Grand Tower.',
    type: 'Best Mechanic Joints Gamejam UGM',
  },
  {
    src: '/img/achievement-2.jpg',
    alt: 'Juara 1 Hackathon Balikpapan 2023',
    description: 'Dalam kompetisi Hackathon yang diselenggarakan oleh Diskominfo Balikpapan, tim mahasiswa dari Institut Teknologi Kalimantan (ITK) meraih prestasi luar biasa. Tim yang terdiri dari Muhammad Sabran, Jo Kevin Nathaniel, dan Kristoffer Timoty Sugiarto, dibimbing oleh Nur Fajri Azhar, M.Kom., CIISA, berhasil meraih Juara 1 dengan aplikasi inovatif bernama "TKids" (TK Information Data System).',
    type: 'Juara 1 Hackathon Balikpapan',
  },
  {
    src: '/img/achievement-3.jpg',
    alt: 'Juara 3 Lomba Cipta Game Hari Sumpah Pemuda ke 92',
    description: 'Lomba Cipta Game diselenggarakan pada tahun 2020 di kota Balikpapan dalam rangka memperingati hari Sumpah Pemuda yang ke-92 dan termasuk dalam rangkaian kegiatan Balikpapan Youth Festival 2020. Kegiatan Lomba Digital ini bertujuan untuk menggali potensi serta kreatifitas pemuda di Kota Balikpapan.',
    type: 'Juara 3 Lomba Cipta Game Hari Sumpah Pemuda',
  },
  {
    src: '/img/achievement-4.jpg',
    alt: 'Juara 2 Kompetisi Aplikasi Ekraf Balikpapan',
    description: 'Lomba Membuat Aplikasi Balikpapan Creative Festival 2021 dalam rangka memeriahkan peringatan Hari Jadi Kota Balikpapan ke-124. Lomba pengembangan aplikasi ini bertujuan untuk menguji kemampuan peserta dalam mengembangkan ide kreatif untuk memberikan solusi dan inovasi masalah Indonesia, khususnya Balikpapan dalam bentuk aplikasi berkualitas tinggi. Fokusnya adalah aspek inovasi yang kreatif dan pemanfaatan TIK untuk mencerdaskan masyarakat Indonesia sehingga aplikasi yang dihasilkan mampu memberikan dampak untuk kemandirian dan kecerdasan masyarakat umum.',
    type: 'Juara 2 Kompetisi Aplikasi Ekraf Balikpapan',
  },
]

const progress = useState<number>(() => 0)
const focusedImageIndex = computed(() => {
  const offsetPercent = 15
  const index = Math.floor((progress.value + offsetPercent) / Math.floor(100 / achievements.length))

  if (index < 0)
    return 0

  if (index >= achievements.length)
    return achievements.length - 1

  return index
})

function findOverallImageWidth() {
  const images = $gsap.utils.toArray('.achievement__gallery img') as HTMLImageElement[]

  return images
      .map((img, i) => i && img.width)
      .reduce((a, b) => a + b)
}

onMounted(() => {
  $gsap.to('.achievement__gallery', {
    x: () => -1 * findOverallImageWidth(),
    scrollTrigger: {
      trigger: '.achievement',
      start: "top +=200",
      end: "+=1000",
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
      onUpdate: ({ progress: scrollProgress }) => {
        progress.value = Math.round(scrollProgress * 100)
      }
    },
  })
})
</script>

<template>
  <section id="achievement">
    <div class="achievement">
      <h2 class="achievement__title">Dengan Beragam Prestasi</h2>
      <div class="achievement__gallery">
        <img v-for="(image, index) in achievements"
             :src="image.src"
             :alt="image.alt"
             width="200"
             :class="{ 'spotlight': focusedImageIndex === index }">
      </div>

      <Transition name="fade-replace">
        <p class="achievement__type" :key="focusedImageIndex">
          {{ achievements[focusedImageIndex].type }}
        </p>
      </Transition>

      <Transition name="fade-replace">
        <p class="achievement__description" :key="focusedImageIndex">
          {{ achievements[focusedImageIndex].description }}
        </p>
      </Transition>
    </div>
  </section>

</template>

<style lang="scss" scoped>
#achievement {
  position: relative;
  overflow-x: hidden;
}

.achievement {
  width: 100%;
  min-height: 700px;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  padding-bottom: 200px;

  &__title{
   
    padding:1rem;
  }
  &__gallery,
  &__description{
    font-size:1.5vw;
  }
  @media (max-width: 900px){
    .achievement__description{
      font-size:1rem;
    }
  }
  &__type {
    
    width: 100vw;
    padding-left: 1rem;
    
  }

  &__title {
    margin-bottom: 18px;
    font-size: 1.5rem;
    padding:1rem;
  }

  &__gallery {
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    justify-content: start;
    gap: 12px;

    & > img {
      width: 300px;
      height: 180px;
      object-fit: cover;
      object-position: center;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      filter: brightness(0.5);
      transition: filter 0.3s ease-in;

      &.spotlight {
        filter: brightness(1);
      }

      @media (min-width: 768px) {
        width: 400px;
        height: 240px;
      }
    }
  }

  &__description{
    width: 90%;
    padding:1rem;
    padding-right:8px;
    text-align: justify;
    text-justify: inter-word;
  }
  
  &__type {
    margin-top: 20px;
  }

  &__type {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    opacity: 0.7;

    & > p::first-letter {
      font-size: 3rem;
      font-weight: bold;
    }
  }
}

.bg {
  position: absolute;
  top: 400px;
  left: 0;
  width: 400px;
  z-index: 1;
  display: grid;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  opacity: 0.1;
  filter: brightness(0) invert(1);
  //width: 200px;

  & > p::first-letter {
    font-size: 3rem;
    font-weight: bold;
  }
}

.fade-replace-enter-active,
.fade-replace-leave-active {
  transition: opacity 0.25s;
}

.fade-replace-enter-from,
.fade-replace-leave-to {
  position: absolute;
  opacity: 0;
}
</style>
