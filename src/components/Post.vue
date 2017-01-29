<template>
	<div class="m-contentBox_item" v-if="category == 0 || post.category == category">
		<h2 class="m-contentBox_title">
			<router-link :to="{ name: 'post', params: { slug: post.slug, id: post.id }}">
				{{ post.title.rendered }}
			</router-link>
		</h2>
		<time class="m-contentBox_date">{{ post.date }}</time>
		<div class="m-contentBox_text" v-html="post.excerpt.rendered">{{ post.excerpt.rendered }}</div>
	
		<p class="m-contentBox_more">
			<router-link :to="{ name: 'post', params: { slug: post.slug, id: post.id }}" class="m-btn m-btn_secondary">
				Czytaj więcej
			</router-link>
		</p>
	</div>
</template>

<script>
import store from '../vuex/store'

export default {
	store,
	props: ['post'],
	computed: {
		
	}
}
</script>
