<template>
  <Header />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
  },
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
  display: block;
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
  overflow: scroll;

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

html, body {
  height: 100%;
  position: fixed;
  min-height: -webkit-fill-available;
}
</style>
