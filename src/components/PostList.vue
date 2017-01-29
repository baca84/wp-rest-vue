<template>
	<div>
		
			<div class="b-secondary v-postList">
				<div class="m-contentBox clearfix">
					<div v-if="error" class="m-alert m-alert_error">
						{{ error }}
					</div>
				   <div class="is-loading" v-if="loading">
				   		<img src="src/common/images/loader.gif" alt="">
				   </div>
				   <div v-else>
						<div v-if="postFiltered">
							<post v-for="post in postFiltered" :post="post"></post>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script>

import request from 'superagent';
import store from '../vuex/store';
import Post from './Post.vue';


export default {
	data() {
			return {
				loading: false,
				error: null
			}
		},
	
		methods: {
			featchPosts: function() {
				var self = this;
				self.error = null;
				self.loading = true;
				request.get(self.api+'posts?tags=4')
					.end(function(err, res) {
						self.loading = false;
						if (err || !res.ok) {
							self.error = err.toString();
						} else {
							self.error = null;
							self.$store.dispatch('updatePosts', res.body);
						}
					});
			},
		},
		computed: {
			postFiltered: function() {
				var posts_array = this.posts,
					searchString = this.searchString;

				if (!searchString) {
					return posts_array;
				}

				searchString = searchString.trim().toLowerCase();

				posts_array = posts_array.filter(function(post) {
					if (post.title.toLowerCase().indexOf(searchString) !== -1) {
						return post;
					}
				})

				return posts_array;
			},
			posts() {
				return this.$store.getters.getPosts
			},
			api() {
				return this.$store.getters.getApi
			}
		},
		created: function() {
			this.featchPosts();
			//setInterval(this.featchPosts, 30000);
		},
		components: {
			Post
		},
		name: 'post-list'
}

</script>
