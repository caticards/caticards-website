export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Cati Cards, La carte High-Tech qui vous démarque !',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'description', name: 'description', content: 'Découvrez Cati Cards, la solution innovante de cartes de visite NFC écologiques. Personnalisez vos cartes en temps réel et échangez vos informations de contact en un simple balayage.' },
            { hid: 'keywords', name: 'keywords', content: 'Cati Cards, cartes de visite, NFC, écologique, innovant, personnalisable' },
            { hid: 'og:title', property: 'og:title', content: 'Cati Cards - La solution innovante de cartes de visite NFC écologiques' },
            { hid: 'og:description', property: 'og:description', content: 'Découvrez Cati Cards, la solution innovante de cartes de visite NFC écologiques. Personnalisez vos cartes en temps réel et échangez vos informations de contact en un simple balayage.' },
            { hid: 'og:image', property: 'og:image', content: 'https://www.example.com/images/caticards-logo.jpg' },
            { hid: 'og:url', property: 'og:url', content: 'https://www.example.com/caticards' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" },
            { rel: "stylesheet", href: "https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/scss/main.scss'
    ],

    styleResources: {
        scss: []
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            '~/components',
            '~/components/advantages',
            '~/components/products',
            '~/components/user',
        ]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'fr'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}