<template>
  <div class="home">
    <GinaLine />

    <section class="main-content">
      <About />
      <ProjectsContainer :projects="projects" />
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
  mounted() {
    window.scrollTo(0,1)
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

.main-content {
  overflow: scroll;
  overflow-x: hidden;
  width: 100vw;
  padding: 20px 10px 10px 10px;
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
