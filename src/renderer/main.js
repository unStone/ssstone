import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';

import App from './App';
import router from './router';
import store from './store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// 全局增加 moment 方法
Vue.prototype.moment = moment;

// 禁止页面缩放
require('electron').webFrame.setZoomLevelLimits(1, 1);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
