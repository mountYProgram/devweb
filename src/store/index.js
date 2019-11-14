import vue from 'vue';
import vuex from 'vuex';

import test from './module/test.js';

vue.use(vuex);

export default new vuex.Store ({
	modules: {
		test
	}
});