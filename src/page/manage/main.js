import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import axios from 'axios';
import router from './router/index.js';

import store from '../../store/index.js';
import App from './App.vue';

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

new Vue({
	render: h => h(App),
    router,
    store
}).$mount('#root');
