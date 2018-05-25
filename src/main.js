// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'style/reset.css';
import 'style/border.css';
import 'style/iconfont.css';
import fastClick from 'fastclick';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
