<template>
	<div>
		<section class="b-mainWrapper b-doc">
			<div class="b-secondary v-page">
				<div v-if="error" class="m-alert m-alert_error">
					{{ error }}
				</div>
				<div class="is-loading" v-if="loading">
					<img src="src/common/images/loader.gif" alt="">
				</div>
				<div v-else>
					<transition name="slide">
						<div v-if="page" :key="page.id">
							<article class="m-contentBox">
								<div class="m-contentBox_title clearfix2">
									<h1 v-if="page.title">{{ page.title.rendered }}</h1>
									<time class="m-contentBox_date">{{ page.modified }}</time>
								</div>
								<div v-if="page.content" v-html=" page.content.rendered " class="m-contentBox_text">
									{{ page.content.rendered }}
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
			jsonPath: 'http://doc.local/wp-json/wp/v2/',
			loading: false,
			error: null
		}
	},
	computed: {
		page: function() {
			return this.$store.getters.getPage;
		}
	},
	created: function() {
		this.fetchPage();
	},
	watch: {
		'$route': 'fetchPage'
	},
	methods: {
		fetchPage: function() {
			var self = this;
			self.error = null; 
			self.loading = true;
			request.get(self.jsonPath +'pages/' + this.$route.params.id)
				.end(function(err, res) {
					self.loading = false
					if (err || !res.ok) { 
						self.error = 'Can not load content...';
					} else {
						self.error = null;
						self.$store.dispatch('updatePage', res.body);
					}
				});
		}
	},
	name: 'page-view'
}
</script>
