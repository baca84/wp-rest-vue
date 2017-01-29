<template>
	<div>
		<header class="b-header" id="js-header">
			<div class="b-header_primary clearfix2">
				<div class="b-header_wrapper clearfix2">
					<div itemscope="" itemtype="http://schema.org/Organization" class="m-logo">
						<a itemprop="url" href="/">
							<img src="src/common/images/logos/logo.png" alt="">
						</a>
					</div>
					<h1 class="m-typo m-typo_primary">
						ENP Atoms
					</h1>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import request from 'superagent';
import store from '../vuex/store';

export default {
	data() {
		return {
			
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
