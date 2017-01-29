import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        post: [],
        page: [],
        posts: [],
        pages: [],
        currentCategory: [],
        restApi: 'http://'+window.location.hostname+'/wp-json/wp/v2/',
        restApiMenu: 'http://'+window.location.hostname+'/wp-json/wp-api-menus/v2/menus/'
    },
    mutations: {
        post_update: function(state, post) {
            store.state.post = post;
        },
        posts_update: function(state, posts) {
            store.state.posts = posts;
        },
        page_update: function(state, page) {
            store.state.page = page;
        },
        pages_change: function(state, category) {
            store.state.currentCategory = category;
        },
        pages_update: function(state, pages) {
            store.state.pages = pages;
        }
    },
    getters: {
        getPost: function() {
            return store.state.post;
        },
        getPosts: function() {
            return store.state.posts;
        },
        getPages: function() {
            return store.state.pages;
        },
        getPage: function() {
            return store.state.page;
        },
        getCurrentCategory: function() {
            return store.state.currentCategory;
        },
        getApi: function() {
            return store.state.restApi;
        },
        getApiMenu: function() {
            return store.state.restApiMenu;
        }
    },
    actions: {
        updatePost({
            commit
        }, post) {
            commit('post_update', post);
        },
        updatePosts({
            commit
        }, posts) {
            commit('posts_update', posts);
        },
        updatePage({
            commit
        }, page) {
            commit('page_update', page);
        },
        updatePages({
            commit
        }, pages) {
            commit('pages_update', pages);
        },
        changeCategory({
            commit
        }, category) {
            commit('pages_change', category);
        }
    }
});

export default store;