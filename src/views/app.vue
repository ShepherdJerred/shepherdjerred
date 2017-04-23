<template>
  <div>
    <router-view class="appView"></router-view>
    <footer-block></footer-block>
  </div>
</template>

<script>
  import footerBlock from '../components/footer-block.vue'
  export default {
    name: 'App',
    components: {
      footerBlock
    }
  }
</script>

<style lang="scss">
  .appView {
    min-height: calc(100vh - 103px);
  }

  ::selection {
    color: #fff;
    background-color: lighten(#360033, 10%);
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, button, input, select, textarea,
  .pure-g [class *= "pure-u"] {
    font-family: 'Open Sans', sans-serif;
  }
</style>
