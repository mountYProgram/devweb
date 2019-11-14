import Vue from 'vue';
import VueRoter from 'vue-router';

Vue.use(VueRoter);

import DataView from '../components/home/dataview/dataview.vue';
import FormList from '../components/home/formlist/formlist.vue';

const router = new VueRoter({
	routes: [
		{ path: '/', component: DataView },
		{ path: '/formlist', component: FormList }
	]
});

// 路由开始跳转
router.beforeEach(function (to, from, next) {
	// console.log(to, from);
  	// console.log("----------- router beforeEach-------------");
  	next();
});

// // 路由跳转结束
router.afterEach(function (to) {
  // console.log("-----------router afterEach-------------");
})

export default router;
