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
        I'm Gina Windley, in July 2015 I graduated with an Upper Second Class Honours in Architecture BA (Hons) from Northumbria University. 
        <br><br>
        I am now on the next chapter of my Architecture accreditation in my final year of studying an MArch Sustainable Architecture degree at the Centre for Alternative Technology Graduate School for the Environment. After a year out volunteering building following working as a Part I Architectural Assistant in the Lake District.
        <br><br>
        My architectural interest lies in sustainable design as a response to both social and historical contexts of the site and environment.  Using innovative design strategies I overcome challenges that occur throughout the design process, with the aim of creating beautiful spaces for people to occupy.
        <br><br>
        Thank you for taking the time to view my portfolio, please feel free to contact me using the information provided in the Contact page.
      </p>
    </div>
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
      'infoPageData'
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

  @include tablet {
    flex-direction: row;
    padding: 30px 20px;
  }

  h2 {
    margin: 0 0 10px 0;
  }

  &__img-container {
    border-radius: 50%;
    height: 90vw;

    @include tablet {
      height: 500px;
    }
  }

  &__text-div {
    overflow: scroll;
    margin-top: 10px;
    margin-left: 10px;
    text-align: justify;

    @include tablet {
      text-align: left;
      width: 60vw;
    }
  }

  &__img {
    width: 100%;
    border-radius: 50%;
    padding: 15px;

    @include tablet {
      width: 500px;
    }
  }
}
</style>

