<template>
	<div class="image-box">
		<i class="fas fa-chevron-left"
			:class="{ 'fas__hide' : this.images.length < 2 }"
			@click="slideImgLeft()">
		</i>
		
		<router-link
			v-if="isLink"
			:to="link">
			<ImageTransition :image="image" :isLink="true" />
		</router-link>

		<span v-else>
			<ImageTransition :image="image" />
		</span>

		<i class="fas fa-chevron-right"
			:class="{ 'fas__hide' : this.images.length < 2 }"
			@click="slideImgRight()">
		</i>
	</div>
</template>
<script>
import ImageTransition from './ImageTransition.vue'

export default {
	name: 'Image-Box',
	props: {
		images: Array,
		isLink: Boolean,
		link: String,
		shouldAnimate: Boolean
	},
	components: {
		ImageTransition
	},
	data() {
		return {
			imgNum: 0,
			interval: null
		}
	},
	computed: {
		image() {
			return this.images[this.imgNum]
		}
	},
	methods: {
		slideImgLeft() {
			this.shouldAnimate && this.resetInterval()

			this.imgNum =
				this.imgNum === 0 ? this.images.length - 1 : this.imgNum - 1
		},
		slideImgRight() {
			this.shouldAnimate && this.resetInterval()

			this.imgNum =
				this.imgNum === this.images.length - 1 ? 0 : this.imgNum + 1
		},
		slideImgRightAuto() {
			this.imgNum =
				this.imgNum === this.images.length - 1 ? 0 : this.imgNum + 1
		},
		getImgUrl(url) {
			let images = require.context('../assets/images', true, /\.png|\.jpg$/)
			return images(url)
		},
		resetInterval() {
			if (this.interval !== null) {
				clearInterval(this.interval)
			}

			this.interval = setInterval(this.slideImgRightAuto, 15000)
		}
	},
	mounted() {
		if (this.shouldAnimate) {
			this.resetInterval()
		}
	}
}
</script>
<style scoped lang="scss">
@import "../lib/_colors.scss";
@import "../lib/_mixins.scss";

.image-box {
	position: relative;
	height: 100%;
	width: 100%;
	border: 1px solid $orange;
	overflow: hidden;
}

.fas {
	display: inline;
	position: absolute;
	top: 42%;
	cursor: pointer;
	font-size: 20px;
	font-size: 20px;

	@include tablet {
		font-size: 30px;
	}

	&__hide {
		display: none;
	}
}

.fa-chevron-left {
	left: 0;
	z-index: 2;
	margin-left: 5px;
}

.fa-chevron-right {
	right: 0;
	margin-right: 5px;
}
</style>
