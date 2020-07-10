import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/tailwind.css';
import './registerServiceWorker';

import ApiService from './common/services/api.service';
import DateFilter from './common/filters/datetime.filter';

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faClock);
library.add(faAngleRight);

Vue.filter('datetime', DateFilter);

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
