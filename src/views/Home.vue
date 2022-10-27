<template>
  <div class="home">
    <GinaLine />

    <section class="main-content">
      <About />

      <ProjectsContainer
        :projects="projects"
        class="main-content__img-box" />
    
    </section>
    
    <Footer />

  </div>
</template>

<script>
import GinaLine from '@/components/GinaLine.vue'
import ProjectsContainer from '@/components/ProjectsContainer.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import projects from '../assets/projects.json'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    GinaLine,
    ProjectsContainer,
    About,
    Footer
  },
  data() {
    return {
      projects
    }
  },
  methods: {
    ...mapActions([
      'updateProjectPageData'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import "../lib/_colors.scss";
@import "../lib/_mixins.scss";

.home {
  overflow: scroll;
}

.main-content {
  width: 100vw;
  padding: 10px;
  display: inline-block;

  &__img-box {
    height: 100%;
    width: 100%;

    @include tablet {
      position: relative;
      margin: 0;
      float: right;
    }
  }
}
</style>
