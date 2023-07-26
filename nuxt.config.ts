// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: false },
  typescript: {
    shim: false,
  },
  modules: ["nuxt-quasar-ui", "@vueuse/nuxt", "@unocss/nuxt", "@nuxt/content", "@nuxtjs/supabase"],
  css: [
    "~/assets/css/tailwind.css",
    "quasar/fonts",
    "quasar/animations",
    "quasar/icons",
    "quasar/css",
    "quasar/brand",
  ],
  build: {
    transpile: ["quasar"],
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: "dracula-soft",
    },
  },
  quasar: {
    plugins: [
      "AppFullscreen",
      "BottomSheet",
      "Dialog",
      "Loading",
      "LoadingBar",
      "Notify",
    ],
    extras: {
      font: "roboto-font",
      fontIcons: [
        "material-icons",
        "mdi-v7",
        "ionicons-v4", // last webfont was available in v4.6.3
        "eva-icons",
        "fontawesome-v6",
        "themify",
        "line-awesome",
        "bootstrap-icons",
      ],
      animations: "all",
    },
    config: {
      dark: true,
    },
  },
  app: {
    // head
    head: {
      title: "Our website",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "web for our",
          name: "My website",
          content: "For us",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: "123",
    // Config within public will be also exposed to the client
    public: {
      apiBase: "/api",
    },
  },
});
