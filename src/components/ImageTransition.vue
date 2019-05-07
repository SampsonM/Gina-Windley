<template>
	<transition name="fade">
		<div
			@click="updateInfoPageData(image.Alt)"
			class="image"
			:key="image.URL"
			:style="imageBG"
			:alt="image.Alt" >
			
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
		image: Object
	},
	computed: {
		imageBG() {
			return { backgroundImage: 'url(' + this.getImgUrl(this.image.URL) + ')'}
		}
	},
	methods: {
		getImgUrl(url) {
			let images = require.context('../assets/images', true, /\.png|\.jpg$/)
			return images(url)
		},
		...mapActions([
			'updateInfoPageData'
		])
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
	transition: opacity 3000ms linear;
}

.fade-enter-to, .fade-leave {
	opacity: 1;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	opacity: 0;
}
</style>
