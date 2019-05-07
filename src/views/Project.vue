<template>
  <div class="projects">
    <p>{{ infoPageData }}</p>
  </div>
</template>

<script>
import GinaLine from '@/components/GinaLine.vue'
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  components: {
    GinaLine
  },
  computed: {
    ...mapState([
      'infoPageData'
    ])
  }
}
</script>

