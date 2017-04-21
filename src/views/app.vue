<template>
  <div>
    <router-view></router-view>
    <!--<notification-block></notification-block>-->
    <footer-block></footer-block>
  </div>
</template>

<script>
  import notificationBlock from '../components/notification-block.vue'
  import footerBlock from '../components/footer-block.vue'
  export default {
    name: 'App',
    components: {
      notificationBlock,
      footerBlock
    }
  }
</script>

<style lang="scss">
  ::selection {
    color: #fff;
    background-color: lighten(#360033, 10%);
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
