import Vue from 'vue';
import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
require('element-ui/lib/theme-chalk/index.css');
import locale from 'element-ui/lib/locale/lang/ko';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(Element, {locale});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
