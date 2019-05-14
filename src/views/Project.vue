<template>
  <div class="projects">
    <p>{{ infoPageData.description }}</p>
    <div class="image-content">
      <ImageBox :images="images" />
    </div>
  </div>
</template>

<script>
import ImageBox from '@/components/ImageBox.vue'
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  components: {
    ImageBox
  },
  computed: {
    ...mapState([
      'infoPageData'
    ]),
    images() {
      return this.infoPageData.images
    }
  }
}
</script>

<style lang="scss" scoped>
.image-content {
  height: 500px;
}
</style>

