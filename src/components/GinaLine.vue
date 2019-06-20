<template>
  <div class="GinaLine">
    <span class="G">G</span>
    <span>I</span>
    <span>N</span>
    <span>A</span>
    <span>&nbsp;</span>
    <span>W</span>
    <span>I</span>
    <span>N</span>
    <span>D</span>
    <span>L</span>
    <span>E</span>
    <span class="Y">Y</span>
  </div>
</template>

<script>
export default {
  name: 'GinaLine',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import "../lib/_colors.scss";
@import "../lib/_mixins.scss";

.GinaLine {
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  border: 1px solid $orange;
  background:#ffffffce;
  color: $orange;
  position: sticky;
  letter-spacing: 5px;
  font-weight: 500;
  position: fixed;
  bottom: 0;
  top: auto;

  @include tablet {
    position: fixed;
    border: none;
    bottom: auto;
    top: 65px;
    border-bottom: 1px solid $orange;
    height: 27px;
    padding-top: 4px;
  }
}

.G {
  margin-left: 10%;
}

.Y {
  margin-right: 10%;
}

</style>
