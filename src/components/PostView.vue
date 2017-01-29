<template>
	<div>
		<section class="b-mainWrapper b-doc">
			<div class="b-secondary v-post">
				<div v-if="error" class="m-alert m-alert_error">
					{{ error }}
				</div>
				<div class="is-loading" v-if="loading">
					<img src="src/common/images/loader.gif" alt="">
				</div>
				<div v-else>
					<transition name="slide">
						<div v-if="post" :key="post.id">
							<article class="m-contentBox">
								<div class="m-contentBox_title clearfix2">
									<h1 v-if="post.title">{{ post.title.rendered }}</h1>
									<time class="m-contentBox_date">{{ post.modified }}</time>
								</div>
								<div v-if="post.content" v-html=" post.content.rendered " class="m-contentBox_text">
									{{ post.content.rendered }}
								</div>
								<a href="/" class="m-btn m-btn_secondary">Powrót</a>
							</article>
						</div>
					</transition>
				</div>
			</div> 
		</section>
	</div>
</template>

<script>
import request from 'superagent';
import store from '../vuex/store';
import AppMenu from './AppMenu.vue';

export default {
	data() {
		return {
			loading: false,
			error: null
		}
	},
	computed: {
		post: function() {
			return this.$store.getters.getPost;
		},
		api() {
			return this.$store.getters.getApi
		}
	},
	created: function() {
		this.fetchPost();
	},
	watch: {
		'$route': 'fetchPost'
	},
	methods: {
		fetchPost: function() {
			var self = this;
			self.error = null;
			self.loading = true;
			request.get(self.api + 'posts/' + this.$route.params.id)
				.end(function(err, res) {
					self.loading = false
					if (err || !res.ok) {
						self.error = err.toString();
					} else {
						self.error = null;
						self.$store.dispatch('updatePost', res.body);
					}
				});
		}
	},
	name: 'post-view'
}
</script>
