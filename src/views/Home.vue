<template>
  <div class="home">
    <section class="main-content">
      <ImageBox
        class="main-content__img-box projects"
        :images="projects"
        :isLink="true"
        link="/project"
        :shouldAnimate="true" />

      <div class="main-content__left">
        <ImageBox
          class="main-content__img-box volunteer"
          :images="volunteering"
          :isLink="true"
          link="/project"
          :shouldAnimate="false" />

        <router-link
          class="main-content__img-link" 
          to="/about">

          <p class="main-content__img-link-text">
            About
          </p>

          <img
            class="main-content__img" 
            src="../assets/images/logo.png" />

        </router-link>
      </div>
    </section>

    <GinaLine />
  </div>
</template>

<script>
// @ is an alias to /src
import ImageBox from '@/components/ImageBox.vue'
import GinaLine from '@/components/GinaLine.vue'
import { volunteering, projects } from '../assets/constants.js'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    ImageBox,
    GinaLine
  },
  data() {
    return {
      volunteering,
      projects
    }
  },
  methods: {
    ...mapActions([
      'updateInfoPageData'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import "../lib/_colors.scss";
@import "../lib/_mixins.scss";

.home {
  height: 100%;

  @include tablet {
		height: calc(100vh - 111px);
	}
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 100%;
  width: 100vw;
  margin: 0 auto;
  padding: 10px 10px 36px 10px;
  
  @include tablet {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 0;
    padding: 20px;
    height: 100%;
    border-bottom: 1px solid $orange;
  }

  &__left {
    width: 100%;
    height: 49%;

    @include tablet {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 39.4%;
    }
  }

  &__img-box {
    height: 49%;

    @include tablet {
      width: 70%;
      position: relative;
    }

    &.projects {
      width: 100%;

      @include tablet {
        margin: 0;
        float: right;
        height: 100%;
        width: 59.4%;
      }
    }

    &.volunteer {
      width: 50%;
      height: 100%;
      float: right;

      @include tablet {
        width: 100%;
        height: 64%;
      }
    }
  }

  &__img-link {
    width: 45%;
    max-height: 100%;
    display: inline-block;
    overflow: hidden;

    @include tablet {
      height: 35%;
      width: auto;
    }
  }

  &__img-link-text {
    position: absolute;
    margin: 0;
    color: $orange;
    font-weight: 500;
		font-size: 18px;
  }

  &__img {
    @include tablet {
      height: 100%;
      width: auto;
      top: 0;
    }
  }
}
</style>
