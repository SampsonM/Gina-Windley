<template>
  <div class="home">

    <section class="main-content">
      <ProjectsContainer
        :images="projects"
        class="main-content__img-box" />
    </section>

    <GinaLine />
  </div>
</template>

<script>
// @ is an alias to /src
import GinaLine from '@/components/GinaLine.vue'
import ProjectsContainer from '@/components/ProjectsContainer.vue'
import { projects } from '../assets/constants.js'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    GinaLine,
    ProjectsContainer
  },
  data() {
    return {
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
    margin-top: 26px;
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
    padding: 15px;
    height: 100%;
    border-bottom: 1px solid $orange;
  }

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
