<template>
  <section class="about">
    <img 
      :src="require('../assets/images/gina.png')"
      alt="Gina Windley"
      class="about__img">

    <div class="about__text-div">
      <p class="about__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  computed: {
    ...mapState([
      'infoPageData'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../lib/_mixins.scss";
@import "../lib/_colors.scss";

.about {
  padding: 10px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include tablet {
    padding: 30px 20px;
  }

  h2 {
    margin: 0 0 10px 0;
  }

  &__text-div {
    overflow: scroll;
    height: 100%;
    margin-top: 10px;

    @include tablet {
      width: 600px;
    }
  }

  &__img {
    width: 100%;

    @include tablet {
      width: 500px;
      border: 2px solid $orange;
    }
  }
}
</style>

