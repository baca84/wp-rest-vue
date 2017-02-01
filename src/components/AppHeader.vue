<template>
	<div>
		<header class="b-header" id="js-header">
			<div class="b-header_primary clearfix2">
				<div class="b-header_wrapper clearfix2">
					<div itemscope="" itemtype="http://schema.org/Organization" class="m-logo">
						<a itemprop="url" href="/">
							<img :src="imgPath +'logos/logo.png'" :alt="title">
						</a>
					</div>
					<h1 class="m-typo m-typo_primary">
						{{title}}
					</h1>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import store from '../vuex/store';
import config from '../config';

export default {
	data() {
		return {
			title: 'ENP Atoms',
			imgPath: config.imagePath
		}
	},

	methods: {
		
	},
	computed: {
		
	},
	created: function() {
		
	},
	name: 'app-header'
}
</script>
