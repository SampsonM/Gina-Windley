<template>
  <div class="about">
    <h2>About</h2>

    <img 
      :src="require('../assets/images/gina.png')"
      alt="Gina Windley"
      class="about__img">

    <p class="about__text">
      I am not a crook
    </p>
  </div>
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
.about {
  &__img {
    width: 100vw;
  }
}
</style>

