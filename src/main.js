import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)

import messages from './locales'

const i18n = new VueI18n({
  locale: 'tr', // varsayılan dil
  fallbackLocale: 'en',
  messages,
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
