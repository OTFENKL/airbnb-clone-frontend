import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ko'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import '@/plugins/fontAwesomeIcon.js'

Vue.config.productionTip = false

Vue.use(Element, {locale});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
