<template>
  <section class="about">
    <img 
      :src="require('../assets/images/gina.png')"
      alt="Gina Windley"
      class="about__img">


    <div class="about__text-div">
      <p class="about__text">
        <b>Hello</b>, my name is Gina.<br><br>
        I am a creative, practical architect with a love for functional sustainable architecture. I strive to create truly bespoke projects that benefit both the environment and people. Please enjoy a selection of my work. If you have any questions or just want a chat please don’t hesitate to <a href="mailto:gina.windley@gmail.com">get in touch</a>.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
@import "../lib/_mixins.scss";
@import "../lib/_colors.scss";

.about {
  padding: 10px 20px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  @include desktop {
    flex-direction: row;
  }

  h2 {
    margin: 0 0 10px 0;
  }

  &__text-div {
    overflow: scroll;
    margin-top: 10px;
    text-align: justify;

    @include tablet {
      text-align: left;
      margin-left: 10px;
      width: 60vw;
      overflow: hidden;
    }

    a {
      color: $orange;
    }
  }

  &__img {
    height: 60vw;
    border-radius: 5px;
    margin: 20px;

    @include tablet {
      height: auto;
      width: 500px;
    }
  }
}
</style>

