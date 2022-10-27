<template>
  <div class="projects-list">
    <div
      class="projects-list__project"
      v-for="(image, i) in images"
      :key="i">
      
      <router-link class="projects-list__project-image" :to="image.link">
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

    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      images: [],
    }
  },
	props: {
		projects: Array
  },
  created() {
    this.images = this.getProjectImages()
  },
  methods: {
    ...mapActions([
			'updateProjectPageData'
		]),
    getImgUrl(url) {
			let imagesDirContext = require.context('../assets/images', true, /\.jpg|\.png$/)
			return imagesDirContext(url)
    },
    handleClick(image) {
      this.updateProjectPageData(image)
    },
    getProjectImages() {
      let projectImages = []

      for (let i = 0; i < this.projects.length; i++) {
        const project = this.projects[i]
        projectImages.push(project.images[0])
      }

      return projectImages
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
  scroll-padding: 1rem;
  border-top: 1px solid $orange;
  padding-top: 10px;

  &__project {
    width: 100%;
    position: relative;
    transition: 400ms;
    background-color: #f9853325;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 10px;

    @include tablet {
      background-color: #f98433;
      width: calc(50% - 20px);
      height: 500px;
      margin: 10px;
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

    & a {
      text-decoration: none;
      color: white;
    }
  }

  &__project-image {
    height: 100px;
    width: 200%;
  }

  &__project-bg {
    transition: 300ms;
    height: 230px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.4;

    @include tablet {
      opacity: 1;
      height: 500px;
    }

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
      opacity: 1;
      text-shadow: 0px 1px 40px #575757;

      @include tablet {
        opacity: 0;
      }
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
