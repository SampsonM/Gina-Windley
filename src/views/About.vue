<template>
  <section class="about">
    <div :style="imageStyle" class="about__img-container">
      <img 
        :src="require('../assets/images/gina.png')"
        alt="Gina Windley"
        class="about__img">
    </div>

    <div class="about__text-div">
      <p class="about__text">
        <b>Hello</b>, my name is Gina.<br><br>
        I was born in the North West and I am now based in Manchester, UK where I hope to seek part II experience after recently graduating from my Sustainable Architecture MArch. Please enjoy this selection of work from my architectural academic journey so far. If you have any questions or just want a chat please don’t hesitate to <a href="mailto:gina.windley@gmail.com">get in touch</a><br><br>
        <b>Education</b><br>
        Sustainable Architecture MArch (2:1 TBC) Centre for Alternative Technology Graduate School for the Environment, 2017-2019<br>
        Architecture Ba Hons (2:1) Northumbria University, 2012-2015<br><br>
        <b>Work Experience</b><br>
        Stanton Andrews Architects, Clitheroe, 2017-2018<br>
        ADL Architects, Windermere, 2015-2016
      </p>
    </div>

    <footer :style="imageStyle">
      <a href="https://www.linkedin.com/in/ginawindley/">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="50" height="50" viewBox="0 0 60 60" style=" fill:#ff6632;">
          <path style="background-color: black" d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
        </svg>
      </a>
    </footer>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { patternGen } from '../helpers';

export default {
  name: 'Projects',
  data() {
    return {
      imageStyle: {
        backgroundImage: `url(${patternGen().png()})`
      }
    }
  },
  computed: {
    ...mapState([
      'projectPageData'
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
  justify-content: space-around;

  @include desktop {
    flex-direction: row;
    padding: 30px 20px 120px 20px;
  }

  h2 {
    margin: 0 0 10px 0;
  }

  &__img-container {
    border-radius: 50%;
    height: 80vw;
    width: 80vw;

    @include tablet {
      height: 500px;
      width: 500px;
    }
  }

  &__text-div {
    overflow: scroll;
    margin-top: 10px;
    text-align: justify;
    margin-bottom: 50px;

    @include tablet {
      text-align: left;
      margin-left: 10px;
      width: 60vw;
    }

    a {
      color: $orange;
    }
  }

  &__img {
    height: 80vw;
    border-radius: 50%;
    padding: 15px;

    @include tablet {
      height: auto;
      width: 500px;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid $orange;
    padding-left: 10px;
    padding-top: 4px;
    color: $orange;

    svg {
      margin-right: 5px;
      float: left;
    }

    i {
      font-size: 20px;
    }
  }
}
</style>

