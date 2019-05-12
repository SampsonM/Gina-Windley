<template>
	<transition name="fade">
		<div
			@click="handleClick()"
			class="image"
			:key="imageURL"
			:alt="image.alt" 
			v-lazy:background-image="imageURL">

			<p class="image__text">
				{{ image.section }}
			</p>
		</div>
	</transition>
</template>
<script>
import { mapActions } from 'vuex';

export default {
	props: {
		image: Object,
		isLink: Boolean
	},
	computed: {
		imageURL() {
			console.log(this.image.URL)
			return this.image.isLocalImg ? this.getImgUrl(this.image.URL) : this.image.URL
		}
	},
	methods: {
		getImgUrl(url) {
			let images = require.context('../assets/images', true, /\.jpg$/)
			return images(url)
		},
		...mapActions([
			'updateInfoPageData'
		]),
		handleClick() {
			if (this.isLink) {
				this.updateInfoPageData(this.image)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../lib/_colors.scss";

.image {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	margin: 0 auto;
	background-size: cover;
	background-position: center center;

	&__text {
		color: $orange;
		font-weight: 500;
		font-size: 18px;
		margin: 0;
		position: absolute;
		bottom: 4px;
		right: 11px;
	}
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 1400ms linear;
}

.fade-enter-to, .fade-leave {
	opacity: 1;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	opacity: 0;
}
</style>
