<template>
  <div class="projects-list">
    <div
      class="projects-list__project"
      v-for="(image, i) in nestedImages"
      :key="i" :class="{ 'no-hover' : image.link === '' }">
      
      <router-link :to="image.link" v-if="image.link">
        <div
          v-lazy:background-image="image.isLocalImg 
            ? getImgUrl(image.URL)
            : image.URL"
          class="projects-list__project-bg"
          lazy="loading"
          @click="handleClick(image)">
        </div>

        <p @click="handleClick(image)"
          class="projects-list__project-bg--text">
          {{ image.section }}
        </p>
      </router-link>

      <canvas :class="`canvas-${image.id}`" v-if="!image.link"></canvas>

    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { patternGen } from '../helpers';

export default {
  data() {
    return {
      nestedImages: [],
    }
  },
	props: {
		images: Array
  },
  created() {
    this.nestedImages = this.getShuffledImages()
  },
  mounted() {
    this.updateCanvasPatterns()
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
    },
    getShuffledImages() {
      let imgs = []

      for (let i = 0; i < 5; i++) {
        imgs.push({ id: i })
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
    updateCanvasPatterns() {
      for (let i = 0; i < 5; i++) {
        const pattern = patternGen();
        pattern.canvas(document.querySelector(`.canvas-${i}`))
      }
    },
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
    overflow: hidden;

    @include tablet {
      margin-bottom: 0;
      height: auto;
      width: auto;
    }

    &:hover {
      transition: 500ms;
      background-color: #fdd0a3;

      & .projects-list__project-bg {
        transition: 300ms ease-in;
        opacity: 0.08;
        transform: scale(1.05);
      }

      & .projects-list__project-bg--text {
        transition: 300ms ease-in;
        opacity: 1;
      }
    }

    &.no-hover {
      .projects-list__project-bg {
        opacity: 1;
        transform: scale(1)
      }

      .projects-list__project-bg--text {
        opacity: 0;
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

    canvas {
      height: 100%;
      width: 100%;
    }
  }

  &__project-bg {
    transition: 300ms;
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
