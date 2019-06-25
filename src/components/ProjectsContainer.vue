<template>
  <div class="projects-list">
    <div
      class="projects-list__project"
      v-for="(image, i) in nestedImages"
      :key="i" :class="{ 'no-hover' : image.link == undefined }">
      
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
			'updateProjectPageData'
		]),
    getImgUrl(url) {
			let images = require.context('../assets/images', true, /\.jpg|\.png$/)
			return images(url)
    },
    handleClick(image) {
      this.updateProjectPageData(image)
    },
    getShuffledImages() {
      let imgs = []
      let patternNum = 0;

      for (let i = 0; i < this.images.length; i++) {
        if (i > 0) {
          for(let j = 0; j < 2; j++) {
            if(this.images[i].images[j]) {
              imgs.push(this.images[i].images[j])
            }
          }
        }
      }

      imgs.unshift(...this.images[0].images)
      
      for(let i = 0; i < imgs.length; i++) {
        if(i%2!==0) {
          imgs.splice(i, 0, {id: patternNum})
          patternNum++
        }
      }

      imgs.push({id: patternNum})

      return imgs
    },
    updateCanvasPatterns() {
      for (let i = 0; i < 9; i++) {
        const pattern = patternGen()
        pattern.canvas(document.querySelector(`.canvas-${i}`))
      }
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
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(12, 20vh);
  }

  &__project {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    list-style: none;
    scroll-snap-align: start;
    position: relative;
    transition: 400ms;
    background-color: #f9853325;
    overflow: hidden;

    @include tablet {
      background-color: #f98433;
      margin-bottom: 0;
      height: auto;
      width: auto;
    }

    &:hover {
      transition: 500ms;
      background-color: #fdd0a3;

      & .projects-list__project-bg {
        @include tablet {
          transition: 300ms ease-in;
          opacity: 0.1;
          transform: scale(1.05);
        }
      }

      & .projects-list__project-bg--text {
        @include tablet {
          transition: 300ms ease-in;
          opacity: 1;
        }
      }
    }

    &.no-hover {
      opacity: 0.8;

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

    &--text {
      position: absolute;
      font-weight: 500;
      top: 50%;
      left: 50%;
      font-size: 30px;
      bottom: auto;
      transform: translate(-50%, -50%);
      margin: 0;
      color: #fff;
      opacity: 0;
    }
  }

  &__project-text {
    color: black;

    @include tablet {
      display: none;
    }
  }
}
</style>
