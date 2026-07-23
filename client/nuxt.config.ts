import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    public: {
      apiBase: process.env.BASE_API_URL,
      origin: process.env.ORIGIN_URL,
    },
  },

  modules: ['nuxt-socket-io', 'socket.io-client'],

  // Socket io config
  io: {
    sockets: [
      {
        name: 'main',
        url: process.env.SOCKET_URL,
      },
    ],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/animations/_transitions.scss'),
    resolve('./assets/scss/app.scss'),
    resolve('./assets/scss/tailwindDefault.scss'),
  ],

  plugins: ['@/plugins/axios', '@/plugins/api'],
});
