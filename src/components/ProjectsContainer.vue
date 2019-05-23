<template>
  <div class="projects-list">
    <div class="projects-list__project" v-for="(image, i) in nestedImages" :key="i">
      <router-link to="/project">
        <div v-lazy:background-image="image.isLocalImg 
              ? getImgUrl(image.URL)
              : image.URL"
              class="projects-list__project-bg"
              lazy="loading"
              @click="handleClick(image)">
        </div>
        <p class="projects-list__project-bg--text">{{ image.section }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import Trianglify from 'trianglify'
import { colors } from '../assets/constants'

export default {
	props: {
		images: Array
  },
  computed: {
    nestedImages() {
      let imgs = []

      for (let i = 0; i < 5; i++) {
        let pattern = Trianglify({
          height: window.innerHeight,
          width: window.innerWidth,
          cell_size: 600 + Math.random() * 65,
          x_colors: colors
        })

        imgs.push({
          URL: pattern.png()
        })
      }

      for (let i = 0; i < this.images.length; i++) {
        imgs.push(...this.images[i].images)
      }

      function shuffleImages(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]]
        }
        return a
      }

      return shuffleImages(imgs)
    },
  },
  methods: {
    ...mapActions([
			'updateInfoPageData'
		]),
    getImgUrl(url) {
			let images = require.context('../assets/images', true, /\.jpg|\.png$/)
			return images(url)
    },
    handleClick(image) {
      this.updateInfoPageData(image)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../lib/_colors.scss";
@import "../lib/_mixins.scss";

.projects-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: scroll;
  scroll-snap-type: both mandatory;
  grid-gap: 10px;
  scroll-padding: 1rem;

  @include tablet {
    display: grid;
    padding: 10px;
    grid-template-columns: repeat(4, 30vw);
    grid-template-rows: repeat(5, 20vw);
  }

  &__project {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    list-style: none;
    scroll-snap-align: start;
    position: relative;
    transition: 400ms;
    background-color: #f98433;

    @include tablet {
      margin-bottom: 0;
      height: auto;
      width: auto;
    }

    &:hover {
      transition: 500ms;
      background-color: #fdd0a3;

      & .projects-list__project-bg {
        transition: 500ms;
        opacity: 0.08;
        transform: scale(1.015);
      }

      & .projects-list__project-bg--text {
        transition: 500ms;
        opacity: 1;
      }
    }

    & a {
      text-decoration: none;
      color: white;
    }

    & p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      font-weight: 500;
      font-size: 25px;
      opacity: 0;
    }
  }

  &__project-bg {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &[lazy=loading] {
      background-color: $orange;
    }
  }
}
</style>
