<template>
	<div class="image-slider">
		<div
			:class="`img img1 ${this.move?.[0] || ''}`"
			alt="space"
			:style="{'background-image': `url(${getImageURL(this.images?.[0])})`}">
		</div>

		<div 
			:class="`img img2 ${this.move?.[1] || ''}`"
			alt="space"
			:style="{'background-image': `url(${getImageURL(this.images?.[1])})`}">
		</div>

		<div 
			:class="`img img3 ${this.move?.[2] || ''}`"
			alt="space"
			:style="{'background-image': `url(${getImageURL(this.images?.[2])})`}">
		</div>

		<div class="arrows">
			<svg class="image-slider__arrow-left" @click="() => handleArrowPress(this.directions.left)" viewBox="0 -1000 2100 3074"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
			<svg class="image-slider__arrow-right" @click="() => handleArrowPress(this.directions.right)" viewBox="-1700 -1000 2100 3074"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
		</div>

		<div class="image-slider__bullets-container">
			<div
				v-for="image,i in images"
				:class="['image-slider__bullets', i === visibleImageIndex ? 'image-slider__bullets--active' : '']">
			</div>
		</div>
	</div>
</template>

<script>
import {toRaw} from 'vue'

export default {
	name: 'ImageSlider',
	props: {
		propImages: Array
	},
	data() {
		return {
			images: this.propImages,
			OGimages: [...this.propImages],
			move: ['', '', ''],
			directions: {
				left: 'Left',
				right: 'Right'
			},
			visibleImageIndex: 0,
			classDirections: {
				Left: [
					'leftToNone',
					'middleToLeft',
					'rightToMiddle',
				],
				Right: [
					'leftToMiddle',
					'middleToRight',
					'rightToNone',
				]
			}
		}
	},
	methods: {
		handleArrowPress(direction) {
			this.move = [...this.classDirections[direction]]

			this[`handle${direction}Arr`]()
		},
		
		handleRightArr() {
			if (this.visibleImageIndex === this.images.length - 1) {
				this.visibleImageIndex = 0
			} else {
				this.visibleImageIndex++
			}
			setTimeout(() => {
				this.images = this.images.concat(this.images.splice(0, (this.images.length - 1)))
				this.move = []
			}, 500)
		},

		handleLeftArr() {
			if (this.visibleImageIndex === 0) {
				this.visibleImageIndex = this.images.length - 1
			} else {
				this.visibleImageIndex--
			}

			setTimeout(() => {
				this.images = this.images.concat(this.images.splice(0, Math.abs(1)))
				this.move = []
			}, 500)
		},

		getImageURL(image) {
			return image?.isLocalImg ? this.getLocalImageUrl(image?.URL) : image?.URL
	  },

		getLocalImageUrl(url) {
			let images = require.context('../assets/images', true, /\.jpg|\.png$/)
			return images(url)
		},
	},
	computed: {
		leftImageIndex() {
			if (this.visibleImageIndex === 0) {
				return this.images.length - 1
			} else {
				return this.visibleImageIndex - 1
			}
		},
		rightImageIndex() {
			if (this.visibleImageIndex === this.images.length-1) {
				return 0
			} else {
				return this.visibleImageIndex + 1
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../lib/_colors.scss";

.image-slider {
  width: 100vw;
  height: 100vh;

	&__bullets-container {
		display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    margin: 0 auto;
    z-index: 10;
    right: 0;
    left: 0;
    bottom: 0;
    top: auto;
    margin-right: auto;
    margin-left: auto;
	}

	&__bullets {
		width: 13px;
		height: 13px;
		border-radius: 30px;
		border: 2px solid #ff9350;
		background-color: transparent;
		-webkit-box-shadow: 0 0 2px rgba(26, 26, 26, .6), 0 0 5px rgba(26, 26, 26, 0.4);
		box-shadow: 0 0 2px rgba(26, 26, 26, .6), 0 0 5px rgba(26, 26, 26, .4);
		margin: 1.5em 0.4em;
		padding: 0;
		-webkit-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;

		&--active {
			border-width: 6px;
		}
	}

	&__arrow-left {
		transition: 0.2s;
		fill: $orange;
		margin: 0;
		width: 50%;
		height: 100%;
		position: absolute;
		left: 0;

		&:hover {
			fill: $light-orange;
		}
	}

	&__arrow-right {
		transition: 0.2s;
		fill: $orange;
		margin: 0;
		width: 50%;
		height: 100%;
		position: absolute;
		right: 0;

		&:hover {
			fill: $light-orange;
		}
	}
}

.img {
	background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-height: 100%;
	min-height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
	background-size: cover;
}

.img1 {
  opacity: 0;
  z-index: 2;
}

.img2 {
  z-index: 3;
	opacity: 1;
}

.img3 {
  opacity: 0;
  z-index: 1;
}

.arrows {
	width: 100%;
	height: 100%;
  position: absolute;
	cursor: pointer;
  right: 0;
  margin: auto;
  z-index: 10;
}

.leftToMiddle {
  animation: leftToMiddle 0.5s;
}

.middleToLeft {
  animation: middleToLeft 0.5s;
}

.rightToMiddle {
  animation: rightToMiddle 0.5s;
}

.middleToRight {
  animation: middleToRight 0.5s;
}

@keyframes leftToMiddle {
  from {
    z-index: 2;
    opacity: 0;
  }
  to {
    z-index: 3;
    opacity: 1;
  }
}

@keyframes middleToLeft {
  from {
    z-index: 3;
    opacity: 1;
  }
  to {
    z-index: 2;
    opacity: 0;
  }
}

@keyframes rightToMiddle {
  from {
    z-index: 1;
    opacity: 0;
  }
  to {
    z-index: 3;
    opacity: 1;
  }
}

@keyframes middleToRight {
  from {
    z-index: 3;
    opacity: 1;
  }
  to {
    z-index: 1;
    opacity: 0;
  }
}
</style>
