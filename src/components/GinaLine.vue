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
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  border: 1px solid $orange;
  border-width: 0 1px 1px 1px;
  background:#ffffffce;
  color: $orange;
  letter-spacing: 5px;
  font-weight: 400;
}

.G {
  margin-left: 10%;
}

.Y {
  margin-right: 10%;
}

</style>
