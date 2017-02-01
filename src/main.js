import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store';

import PostList from './components/PostList.vue';
import PostView from './components/PostView.vue';
import PageView from './components/PageView.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMenu from './components/AppMenu.vue';

import './common/css/style.scss';

Vue.use(VueRouter);

const router = new VueRouter({
	base: __dirname,
	routes: [{
			path: '/',
			component: PostList
		},
		{
			name: 'post',
			path: '/post/:slug/:id',
			component: PostView
		}, {
			name: 'page',
			path: '/page/:slug/:id',
			component: PageView
		}
	]
});

const app = new Vue({
	router,
	store,

	components: {
		AppHeader,
		AppFooter,
		AppMenu
	}
}).$mount('#app');