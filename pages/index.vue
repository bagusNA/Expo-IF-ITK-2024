<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline()

  const specialties = $gsap.utils.toArray(".specialty") as HTMLElement[]
  specialties.forEach((div, index) => {
    tl.from(div, {
      xPercent: index % 2 ? 100 : -100,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: div,
        start: '+=50 +=70%',
        end: 'bottom +=70%',
        scrub: 1,
      }
    })
  })

  const specialtyJobs = $gsap.utils.toArray(".specialty__job") as HTMLElement[]
  specialtyJobs.forEach((div, index) => {
    tl.from(div, {
      xPercent: index % 2 ? -100 : 100,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: specialties[index],
        start: '+=50 +=70%',
        end: 'bottom +=70%',
        scrub: 1,
      }
    })
  })

  tl.to(".catchline__title", {
    duration: 2,
    text: "Mengapa Harus Informatika?",
    scrollTrigger: {
      trigger: '.catchline__title',
      start: "top bottom",
      end: "bottom +=50%",
      scrub: 1,
    }
  })

  const prospects = $gsap.utils.toArray(".prospect") as HTMLElement[]
  prospects.forEach((div) => {
    tl.from(div, {
      yPercent: -50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: div,
        start: '+=50 +=85%',
        end: 'bottom +=85%',
        scrub: 1,
      }
    })
  })
})
</script>

<template>
  <div class="page">
    <Head>
      <Title>Expo IF ITK 2024</Title>
    </Head>

    <Loading />

    <LayoutHero />
    <LayoutAbout />
    <LayoutAccreditation />
    <LayoutAchievement />

    <div class="gradient-section">
      <svg class="wave" width="539" height="176" viewBox="0 0 539 176" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_401_69)">
          <mask id="mask0_401_69" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="539" height="176">
            <path d="M539 0H0V175.51H539V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_401_69)">
            <path d="M176 32.11L182.03 36.06C188.06 40.01 200.13 47.91 212.2 50.55C224.27 53.09 236.33 50.62 248.4 41.32C260.47 32.11 272.53 16.31 284.6 18.95C296.67 21.49 308.73 42.72 320.8 54.5C332.87 66.42 344.93 68.89 357 70.3C369.07 71.61 381.13 71.61 393.2 71.61C405.27 71.61 417.33 71.61 429.4 63.71C441.47 55.81 453.53 40.01 465.6 38.7C477.67 37.29 489.73 50.62 501.8 54.5C513.87 58.52 525.93 53.09 531.97 50.55L538 47.91V79.51H176V32.11Z" fill="#0D47A1"/>
            <path d="M-0.900024 63.11L10.78 65.69C22.46 68.47 45.83 73.34 69.2 57.89C92.57 42.15 115.93 6.06997 139.3 0.709975C162.67 -4.65003 186.03 21.67 209.4 37.13C232.77 52.88 256.13 57.75 279.5 65.7C302.87 73.35 326.23 84.08 349.6 78.72C372.97 73.36 396.33 52.88 419.7 57.9C443.07 63.12 466.43 94.32 489.8 104.7C513.17 115.28 536.53 104.55 559.9 104.7C583.27 104.55 606.63 115.28 630 107.33C653.37 99.68 676.73 73.35 688.42 60.53L700.1 47.51V125.51H-0.900024V63.11Z" fill="#FFBD59"/>
            <path d="M-222 136.31L-207.32 116.71C-192.64 97.11 -163.27 57.91 -133.9 64.46C-104.53 70.77 -75.17 123.44 -45.8 129.75C-16.43 136.3 12.93 97.1 42.3 84.06C71.67 70.77 101.03 84.24 130.4 70.95C159.77 57.9 189.13 18.7 218.5 15.46C247.87 11.97 277.23 45.04 306.6 70.95C335.97 97.1 365.33 116.7 394.7 106.9C424.07 97.1 453.43 57.9 482.8 51.35C512.17 45.04 541.53 70.77 570.9 87.3C600.27 103.84 629.63 109.96 644.32 113.45L659 116.7V175.5H-222V136.3V136.31Z" fill="white"/>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_401_69">
            <rect width="539" height="175.51" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <section id="specialties">
        <h2 class="specialties-title">Bidang Minat</h2>

        <div class="specialty-list">
          <div class="specialty">
            <h3 class="specialty__title">Rekayasa Perangkat Lunak</h3>
            <img src="/img/software-engineer.jpg" alt="Bidang Minat Rekayasa Perangkat Lunak" class="specialty__image shadow">
            <p class="specialty__description">Mempelajari tentang strategi membangun teknologi informasi sehingga teknologi yang dihasilkan mudah diperbaruhi di kemudian hari</p>
            <p class="specialty__job">Software Engineer</p>
          </div>

          <div class="specialty">
            <h3 class="specialty__title">Jaringan Komputer</h3>
            <img src="/img/network-engineer.jpg" alt="Bidang Minat Jaringan Komputer" class="specialty__image shadow">
            <p class="specialty__description">Mempelajari tentang aritmatika dan logika untuk membangun protokol komunikasi antar komputer sehingga informasi apa pun dapat disebarkan dengan cepat dan aman</p>
            <p class="specialty__job">Network Engineer</p>
          </div>

          <div class="specialty">
            <h3 class="specialty__title">Jaringan Komputer</h3>
            <img src="/img/network-engineer.jpg" alt="Bidang Minat Jaringan Komputer" class="specialty__image shadow">
            <p class="specialty__description">Mempelajari tentang aritmatika dan logika untuk membangun protokol komunikasi antar komputer sehingga informasi apa pun dapat disebarkan dengan cepat dan aman</p>
            <p class="specialty__job">Network Engineer</p>
          </div>

          <div class="specialty">
            <h3 class="specialty__title">Kecerdasan Buatan dan Data Analis</h3>
            <img src="/img/data-analyst.jpg" alt="Bidang Minat Kecerdasan Buatan" class="specialty__image shadow">
            <p class="specialty__description">Mempelajari tentang aritmatika dan logika untuk membentuk algoritma pemecahan masalah</p>
            <p class="specialty__job">Data Analyst</p>
          </div>
        </div>
      </section>

      <section id="why-us">
        <div class="catchline">
          <h2 class="catchline__title"></h2>
          <img src="/img/shape-torus.png" alt="" class="catchline__shape catchline__shape--left">
          <img src="/img/shape-torus-half.png" alt="" class="catchline__shape catchline__shape--right">
        </div>

        <div class="prospect-list">
          <div class="prospect">
            <h3 class="prospect__title">Peluang karir yang luas</h3>
            <p class="prospect__description">
              Dengan program studi informatika, dinilai akan memiliki banyak pilihan karier ketika sudah lulus nanti. Hal ini dikarenakan banyak perusahaan yang melakukan komputerisasi pada sistemnya sehingga membutuhkan banyak orang yang ahli pada bidang tersebut.
            </p>
            <img src="/img/shape-tube.png" alt="" class="prospect__shape prospect__shape--bottom-left">
          </div>

          <div class="prospect">
            <h3 class="prospect__title">Mampu Mengembangkan aplikasi buatan sendiri</h3>
            <p class="prospect__description">
              Selain mengembangkan aplikasi perusahaan, para lulusan program studi informatika pun mampu mengembangkan aplikasi buatan mereka sendiri sesuai dengan ide dan kreativitas yang di inginkan.
            </p>
            <img src="/img/shape-tube-laying.png" alt="" class="prospect__shape prospect__shape--top-right">
          </div>

          <div class="prospect">
            <h3 class="prospect__title">Mengikuti Perkembangan Teknologi</h3>
            <p class="prospect__description">
              Jika kamu memilih program studi informatika, maka kamu akan selalu update mengenai perkembangan teknologi yang terjadi saat ini.
            </p>
            <img src="/img/shape-tube-laying-short.png" alt="" class="prospect__shape prospect__shape--top-left">
            <img src="/img/shape-tube-medium.png" alt="" class="prospect__shape prospect__shape--bottom-right">
          </div>
        </div>
      </section>
    </div>

    <MenuButton class="menu-btn" />
  </div>
</template>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  overflow-x: hidden;
}

.menu-btn {
  position: fixed;
  top: -0.8rem;
  left: -1.65rem;
  z-index: 100;
}

.gradient-section {
  background: linear-gradient(180deg, white 600px, #6294CA 1600px, $background-light);
  color: $background;
  min-height: 2000px;
  position: relative;

  .wave {
    position: absolute;
    top: -150px;
    left: 0;
    right: 0;
    width: 100%;
    height: 175px;
  }
}

#specialties {
  --padding-x: 2rem;

  .specialties-title {
    padding: 0 var(--padding-x) 5rem;
    font-size: 2rem;
    position: relative;

    &:before,
    &:after {
      --height: 24px;

      content: "";
      position: absolute;
      bottom: 1.5rem;
      left: -0.5rem;
      width: 160px;
      height: var(--height);
      border-radius: calc(var(--height) / 2);
      background-color: $background-light;
    }

    &:after {
      bottom: 0;
      left: revert;
      right: -7rem;
    }
  }

  .specialty-list {
    display: grid;
    gap: 6rem;
    padding-top: 2rem;
    overflow-x: hidden;
    position: relative;
  }

  .specialty {
    display: grid;
    grid-template-areas:
        "title title"
        "image image"
        "desc desc";
    gap: 1rem;
    align-content: center;
    margin: 0 var(--padding-x);
    position: relative;
    z-index: 5;

    & > *:not(&__job) {
      z-index: 5;
    }

    &__title {
      grid-area: title;
      align-self: end;
    }

    &__image {
      height: 180px;
      width: 240px;
      object-fit: cover;
      object-position: center;
      border-radius: 8px;
      grid-area: image;
    }

    &__description {
      grid-area: desc;
    }

    &__job {
      position: absolute;
      top: 0;
      right: 0;
      width: 150px;
      transform: rotate(-90deg) translateY(-20px) translateX(-10px);
      transform-origin: center right;
      color: $background;
      opacity: 0.25;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: end;
      text-transform: uppercase;
      z-index: 1;
      transition: opacity 250ms;

      &:hover {
        opacity: 1;
      }
    }

    &:nth-child(odd) {
      justify-content: center;

      @media (min-width: 768px) {
        grid-template-areas:
        "image title"
        "image desc";
      }
    }

    &:nth-child(even) {
      text-align: right;

      @media (min-width: 768px) {
        grid-template-areas:
        "title image"
        "desc image";
      }

      .specialty__image {
        margin-left: auto;
      }

      .specialty__job {
        top: 0;
        right: revert;
        left: 0;
        transform: rotate(90deg) translateY(-20px) translateX(-10px);
        transform-origin: center left;
      }
    }

    @media (min-width: 768px) {
      .specialty__title {
        font-size: 1.5rem;
      }
    }
  }
}

#why-us {
  --padding-x: 2rem;
  --padding-y: 6rem;

  padding: var(--padding-y) 0;
  overflow: hidden;
  color: $surface;

  .catchline {
    display: grid;
    align-content: center;
    position: relative;
    height: 1000px;

    &__title {
      font-size: 1.8rem;
      text-align: center;
      padding: 0 var(--padding-x);
    }

    &__shape {
      position: absolute;
      filter: drop-shadow(0 4px 134.7px $accent);
      animation: bop 10s infinite;

      &--left {
        top: calc(50% - 32rem);
        left: -16rem;
      }

      &--right {
        top: calc(50% + 8rem);
        right: -4rem;
        width: 14rem;
        transform: rotate(-65deg);
        animation-delay: 4s;
      }
    }
  }

  .prospect-list {
    display: grid;
    gap: 8rem;
    padding-bottom: 4rem;
  }

  .prospect {
    margin: 0 var(--padding-x);
    position: relative;

    &__title,
    &__description {
      position: relative;
      z-index: 3;
    }

    &__title {
      font-weight: bolder;
      font-size: 1.5rem;
    }

    &__description {
      margin-top: 1.25rem;
      display: block;
      background-color: $accent;
      color: $background;
      padding: 1rem;
      border-radius: 1rem;
      font-weight: 500;
    }

    &__shape {
      position: absolute;
      animation: bop 8s infinite;
      width: 200px;
      z-index: 1;

      &--top-left {
        top: -3rem;
        left: -14rem;
        width: 350px;
      }

      &--top-right {
        top: 0;
        right: -8rem;
        animation-delay: 2s;
      }

      &--bottom-left {
        bottom: -8rem;
        left: -8rem;
        animation-delay: 4s;
      }

      &--bottom-right {
        bottom: -12rem;
        right: -12rem;
        width: 350px;
        animation-delay: 8s;
      }
    }
  }
}
</style>
