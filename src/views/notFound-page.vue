<template>
  <div class="error">
    <p class="error__text">
      error 404: page not found
    </p>
  </div>
</template>

<script>
  import HeroBlock from '../components/hero-block'
  export default {
    components: {
      HeroBlock
    },
    name: 'NotFoundPage'
  }
</script>

<style lang="scss" scoped>
  $background: #2B2B2B;
  $fontColor: #A9B7C6;
  $fontHightlight: #CC7832;
  $fontFamily: 'Fira Mono', 'Consolas', monospace;
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $fontColor;
    background-color: $background;

    .error__text {
      font-size: 20px;
      font-family: $fontFamily;
    }
  }
</style>
