<template>
  <div class="projects">
    <VueperSlides class="projects__slides" speed="10000" :autoplay="true" :touchable="true" :slide-ratio="0.3" v-if="images.length > 1">
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

    <div class="text-box"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'Projects',
  components: { VueperSlides, VueperSlide },
  created() {
    this.getLocalStorageProjectInfo()
  },
  mounted() {
    if (this.projectPageData.images) {
      document.querySelector('.text-box').innerHTML = this.projectPageData.description
    }
  },
  computed: {
    ...mapState([
      'projectPageData'
    ]),
    images() {
      return this.projectPageData.images
    }
  },
  methods: {
    ...mapActions([
      'getLocalStorageProjectInfo'
    ]),
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
  height: 65%;
  overflow: hidden;
}

.projects {
  height: 100%;
  overflow: hidden;

  &__slides {
    background-color: $orange;
    height: 60%;

    @include tablet {
      float: left;
      height: 100%;
      width: 60%;
    }
  }
}

.no-slider-image {
  width: 100%;
  height: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 20%;
}

.text-box {
  width: 100%;
  height: 38%;
  margin-bottom: 5px;
  padding: 0 10px 10px 10px;
  overflow: scroll;
  text-align: justify;

  @include tablet {
    width: 40%;
    height: 100%;
    padding: 15px 30px;
  }
}

p {
  margin: 0;
}
</style>

