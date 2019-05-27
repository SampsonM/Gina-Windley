<template>
  <div class="projects">
    <VueperSlides class="projects__slides" :autoplay="true" :touchable="true" :slide-ratio="0.3" v-if="images.length > 1">
      <VueperSlide
        class="vueperslide"
        v-for="(image, i) in images"
        :key="i"
        v-lazy:background-image="imageURL(image)">
      </VueperSlide>
    </VueperSlides>

    <div v-else
      class="no-slider-image"
      v-lazy:background-image="imageURL(images[0])">
    </div>

    <p>{{projectPageData.description}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Projects',
  components: { VueperSlides, VueperSlide },
  computed: {
    ...mapState([
      'projectPageData'
    ]),
    images() {
      return this.projectPageData.images
    }
  },
  methods: {
    imageURL(image) {
			return image.isLocalImg ? this.getImgUrl(image.URL) : image.URL
	  },
    getImgUrl(url) {
			let images = require.context('../assets/images', true, /\.jpg|\.png$/)
			return images(url)
		},
  }
}
</script>

<style lang="scss" scoped>
@import "../lib/_colors.scss";
@import "../lib/_mixins.scss";

.vueperslides {
  height: 500px;
}

.projects {
  &__slides {
    background-color: $orange;
    height: 500px;
  }
}

.no-slider-image {
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 20%;
}
</style>

