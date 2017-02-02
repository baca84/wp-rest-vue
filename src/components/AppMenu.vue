<template>
	<div class="b-primary">
		<div class="b-doc_nav">
			<div class="b-doc_list">
				<ul class="m-menu">
					<li v-for="page in pages.items" class="m-menu_item">
						<template v-if="!page.children">
							<router-link :to="{ name: 'page', params: { slug: page.object_slug, id: page.object_id }}" class="m-menu_link">
								{{ page.title }}
							</router-link>
						</template>
						<template v-else>
							<p>{{ page.title }}</p>
						</template>
						<ul v-if="page.children" class="m-menu">
							<li v-for="subpage in page.children" class="m-menu_item">
								<router-link :to="{ name: 'page', params: { slug: subpage.object_slug, id: subpage.object_id }}" class="m-menu_link">
									{{ subpage.title }}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
import request from 'superagent';
import store from '../vuex/store'


export default {
	data() {
		return {
			loading: false,
			error: null
		}
	},

	methods: {
		fetchPages: function() {
			var self = this;
				self.error = null;
				self.loading = true;
				request.get(self.apiMenu + '3')
					.end(function(err, res) {
					
						self.loading = false;
						if (err || !res.ok) {
							self.error = err.toString();
						} else {
							self.error = null;
							self.$store.dispatch('updatePages', res.body);
							
						}
					});
		}
	},
	computed: {
		pages() {
			return this.$store.getters.getPages;
		},
		apiMenu(){
			return this.$store.getters.getApiMenu;
		}
	},
	created: function() {
		this.fetchPages();
	}
}
</script>
