<template>
  <div class="projects-list">
    <div class="projects-list__project" v-for="(image, i) in nestedImages" :key="i">
      <router-link to="/projects">
        <div v-lazy:background-image="image.isLocalImg 
              ? getImgUrl(image.URL)
              : image.URL"
              class="projects-list__project-bg"
              @click="handleClick(image)">
          <p>{{image.alt}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
	props: {
		images: Array
  },
  computed: {
    nestedImages() {
      const imgs = this.images.reduce((acc, img) => {
        return [...acc, ...img.images]
      }, [])

      function shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a
      }

      return shuffleArray(imgs)
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
  display: grid;
  grid-template-columns: repeat(4, 60vw);
  grid-template-rows: repeat(4, 50vw);;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: scroll;
  scroll-snap-type: both mandatory;  
  grid-gap: 10px;
  scroll-padding: 1rem;

  @include tablet {
    grid-template-columns: repeat(4, 40vw);
    grid-template-rows: repeat(4, 30vw);;
  }

  &__project {
    width: auto;
    height: auto;
    list-style: none;
    scroll-snap-align: start;
    position: relative;

    & a {
      text-decoration: none;
      color: $orange;
    }

    & p {
      position: absolute;
      bottom: 10px;
      left: 15px;
      margin: 0;
    }
  }

  &__project-bg {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
