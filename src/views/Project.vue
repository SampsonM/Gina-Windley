<template>
  <div class="projects">
    <!-- <VueperSlides v-if="images.length > 1" class="projects__slides" transition-speed="350" :autoplay="false" :touchable="true" :slide-ratio="0.3">
      <VueperSlide
        v-for="(slide, i) in slideContent"
        :key="i"
        :image="slide.image" />
    </VueperSlides> -->

    <ImageSlider class="projects__slides" :propImages="images" />

    <!-- <div v-else
      class="projects__slides no-slider-image"
      v-lazy:background-image="imageURL(images[0])">
    </div> -->

    <div class="text-box"></div>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { VueperSlides, VueperSlide } from 'vueperslides'
import ImageSlider from "@/components/ImageSlider.vue"

export default {
  name: 'Projects',
  components: {
    VueperSlides,
    VueperSlide,
    ImageSlider
  },
  created() {
    this.getLocalStorageProjectInfo()
  },
  mounted() {
    window.scrollTo(0,1)
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
    },
    slideContent() {
      return this.images.reduce((a, b) => {
        return [...a, {
          content: b.alt,
          image: this.imageURL(b)
        }]
      }, [])
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
  width: 100%;
  overflow: hidden;
}

.projects {
  @include desktop {
    display: flex;
    height: calc(100vh - 66px);
    width: 100vw;
    justify-content: space-evenly;
    flex-direction: row;
  }

  &__slides {
    height: 40vh;
    position: fixed;
    background-color: #00000063;
    z-index: 10;

    @include desktop {
      height: 65vh;
      width: 45vw;
      max-width: 850px;
      margin: auto 0;
      position: relative;
      border-radius: 5px;
      -webkit-box-shadow: 0px 0px 22px 2px rgb(154, 154, 154);
      -moz-box-shadow: 0px 0px 22px 2px rgb(154, 154, 154);
      box-shadow: 0px 0px 22px 2px rgb(154, 154, 154);
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
  margin-bottom: 5px;
  padding: 40vh 10px 10px 10px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: justify;
  display: inline-block;

  @include tablet {
    padding: 41vh 30px 10px 30px;
  }

  @include desktop {
    width: 40%;
    height: 65vh;
    padding: 0;
    display: inline;
    margin: auto 0;
  }
}

p {
  margin: 0;
}
</style>

