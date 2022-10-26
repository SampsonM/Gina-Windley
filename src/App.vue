<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./lib/_fonts.scss";
@import "./lib/_colors.scss";
@import "./lib/_mixins.scss";

* {
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252525;
  max-width: 100vw;
  height: 100vh;
  padding-top: 52px;

  @include tablet {
    padding-top: 66px;
  }

  &:before {
    content: ' ';
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-image: url('./assets/images/FINALBRIGHTMAP.jpg');
    background-attachment: fixed;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.03;
  }
}

a {
  color: $orange;

  &:visited {
    color: $dull-orange
  }
}
</style>
