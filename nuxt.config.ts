// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    ['github:sondh0127/nuxt-ssr-layer-src', { giget: { install: true } }],
  ],
})
