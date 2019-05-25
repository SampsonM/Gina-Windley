<template>
  <div class="projects">
    <VueperSlides :disableArrowsOnEdges="true" :touchable="true" :slide-ratio="0.3">
      <VueperSlide
        v-for="(image, i) in images"
        :key="i"
        v-lazy:background-image="imageURL(image)">
      </VueperSlide>
    </VueperSlides>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel';
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Projects',
  data() {
    return {
    }
  },
  components: { VueperSlides, VueperSlide },
  computed: {
    ...mapState([
      'infoPageData'
    ]),
    images() {
      return this.infoPageData.images
    },
    imageMarkup() {
      return '<div>hello</div>'
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
.vueperslides {
  height: 500px;
}

.vueperslides__parallax-wrapper {
  height: 500px;
}
</style>

