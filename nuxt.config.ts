// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/google-fonts',
      '@hypernym/nuxt-gsap',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *;'
        }
      }
    }
  },
  googleFonts: {
    download: true,
    families: {
      Montserrat: '200..900',
    }
  },
})
