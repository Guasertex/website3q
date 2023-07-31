// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: false },
  typescript: {
    shim: false,
  },
  modules: [
    "nuxt-quasar-ui",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxt/content",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "nuxt-security",
  ],
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
  security: {
    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginEmbedderPolicy: "require-corp",
      contentSecurityPolicy: {
        "base-uri": ["'self'"],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "upgrade-insecure-requests": true,
      },
      originAgentCluster: "?1",
      referrerPolicy: "no-referrer",
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
      },
      xContentTypeOptions: "nosniff",
      xDNSPrefetchControl: "off",
      xDownloadOptions: "noopen",
      xFrameOptions: "SAMEORIGIN",
      xPermittedCrossDomainPolicies: "none",
      xXSSProtection: "0",
      permissionsPolicy: {
        camera: ["()"],
        "display-capture": ["()"],
        fullscreen: ["()"],
        geolocation: ["()"],
        microphone: ["()"],
      },
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
    },
    rateLimiter: {
      tokensPerInterval: 100,
      interval: "hour",
      fireImmediately: true,
    },
    xssValidator: {},
    corsHandler: {
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflight: {
        statusCode: 204,
      },
    },
    allowedMethodsRestricter: "*",
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
  },
  experimental: {
    componentIslands: true,
  },
});
