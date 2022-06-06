import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueMq from 'vue-mq'

Vue.config.productionTip = false
Vue.use(VueMq, {
  breakpoints: {
    mobile: 576,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
