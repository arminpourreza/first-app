
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  build: {
    templates: [{
      type: 'app',
      src: 'app.html',
    }]
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },


      
      { rel: 'stylesheet', href: '/css/responsive.css' },
      { rel: 'stylesheet', href: '/css/light-1.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/css/prism.css' },
      { rel: 'stylesheet', href: '/css/chartist.css' },
      { rel: 'stylesheet', href: '/css/feather-icon.css' },
      { rel: 'stylesheet', href: '/css/flag-icon.css' },
      { rel: 'stylesheet', href: '/css/themify.css' },
      { rel: 'stylesheet', href: '/css/icofont.css' },
      { rel: 'stylesheet', href: '/css/fontawesome.css' },
     
    ],
    script: [

      { hid: 'stripe', src: '/js/jquery-3.2.1.min.js', defer: true },
      { hid: 'stripe', src: '/js/bootstrap/popper.min.js', defer: true },
      { hid: 'stripe', src: '/js/bootstrap/bootstrap.js', defer: true },
      { hid: 'stripe', src: '/js/icons/feather-icon/feather.min.js', defer: true },
      { hid: 'stripe', src: '/js/icons/feather-icon/feather-icon.js', defer: true },
      { hid: 'stripe', src: '/js/sidebar-menu.js', defer: true },
      { hid: 'stripe', src: '/js/config.js', defer: true },
      { hid: 'stripe', src: '/js/chart/chartist/chartist.js', defer: true },
      { hid: 'stripe', src: '/js/chart/knob/knob.min.js', defer: true },
      { hid: 'stripe', src: '/js/chart/knob/knob-chart.js', defer: true },
      { hid: 'stripe', src: '/js/prism/prism.min.js', defer: true },
      { hid: 'stripe', src: '/js/clipboard/clipboard.min.js', defer: true },
      { hid: 'stripe', src: '/js/counter/jquery.waypoints.min.js', defer: true },
      { hid: 'stripe', src: '/js/counter/jquery.counterup.min.js', defer: true },
      { hid: 'stripe', src: '/js/counter/counter-custom.js', defer: true },
      { hid: 'stripe', src: '/js/custom-card/custom-card.js', defer: true },
      { hid: 'stripe', src: '/js/notify/bootstrap-notify.min.js', defer: true },
      { hid: 'stripe', src: '/js/dashboard/default.js', defer: true },
      { hid: 'stripe', src: '/js/notify/index.js', defer: true },
      { hid: 'stripe', src: '/js/typeahead/handlebars.js', defer: true },
      { hid: 'stripe', src: '/js/typeahead/typeahead.bundle.js', defer: true },
      { hid: 'stripe', src: '/js/typeahead/typeahead.custom.js', defer: true },
      { hid: 'stripe', src: '/js/chat-menu.js', defer: true },
      { hid: 'stripe', src: '/js/height-equal.js', defer: true },
      { hid: 'stripe', src: '/js/tooltip-init.js', defer: true },
      { hid: 'stripe', src: '/js/typeahead-search/handlebars.js', defer: true },
      { hid: 'stripe', src: '/js/typeahead-search/typeahead-custom.js', defer: true },
      { hid: 'stripe', src: '/js/script.js', defer: true },
      { hid: 'stripe', src: '/js/theme-customizer/customizer.js', defer: true },
      // {
      //   src: '/js/theme-customizer/customizer.js',
      //   src: '/js/script.js',
      //   src: '/js/typeahead-search/typeahead-custom.js',
      //   src: '/js/typeahead-search/handlebars.js',
      //   src: '/js/tooltip-init.js',
      //   src: '/js/height-equal.js',
      //   src: '/js/chat-menu.js',
      //   src: '/js/typeahead/typeahead.custom.js',
      //   src: '/js/typeahead/typeahead.bundle.js',
      //   src: '/js/typeahead/handlebars.js',
      //   src: '/js/notify/index.js',

      //   src: '/js/dashboard/default.js',
      //   src: '/js/notify/bootstrap-notify.min.js',
      //   src: '/js/custom-card/custom-card.js',
      //   src: '/js/counter/counter-custom.js',
      //   src: '/js/counter/jquery.counterup.min.js',

      //   src: '/js/counter/jquery.waypoints.min.js',
      //   src: '/js/clipboard/clipboard.min.js',
      //   src: '/js/prism/prism.min.js',

      //   src: '/js/chart/knob/knob-chart.js',
      //   src: '/js/chart/knob/knob.min.js',
      //   src: '/js/chart/chartist/chartist.js',
      //   src: '/js/config.js',
      //   src: '/js/sidebar-menu.js',

      //   src: '/js/icons/feather-icon/feather-icon.js',
      //   src: '/js/icons/feather-icon/feather.min.js',
      //   src: '/js/bootstrap/bootstrap.js',
      //   src: '/js/bootstrap/popper.min.js',
      //   src: '/js/jquery-3.2.1.min.js',
      // }
    ],
  },
  /*
  ** Global CSS
  */
 
  


  css: [


  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
