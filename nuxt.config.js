const env = require ('./env');
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },
  env: {
    baseUrl: env[process.env.NODE_ENV].baseUrl,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/mian.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui', '@/plugins/comment', '~/plugins/route'],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  /*
   ** Nuxt.js router重定向
   */
  router: {
    routeNameSplitter: '/',
    extendRoutes (routes) {
      routes.unshift (
        {path: '/login', redirect: '/login/login'},
        {path: '/mian', redirect: '/mian/home'},
        {path: '*', redirect: '/mian/home'},
        {path: '/', redirect: '/mian/home'}
      );
    },
    linkActiveClass: 'active-link',
    mode: 'history',
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4200',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {},
  },
};
