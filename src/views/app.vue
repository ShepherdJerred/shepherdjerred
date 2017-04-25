<template>
  <div>
    <navbar-block></navbar-block>
      <router-view class="appView"></router-view>
    <footer-block></footer-block>
  </div>
</template>

<script>
  import navbarBlock from '../components/navbar-block.vue'
  import footerBlock from '../components/footer-block.vue'
  export default {
    name: 'App',
    components: {
      navbarBlock,
      footerBlock
    }
  }
</script>

<style lang="scss">
  .appView {
    min-height: calc(100vh - 39px - 36px);
    padding-top: 39px;
  }

  ::selection {
    background-color: #214283;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
