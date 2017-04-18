<template>
  <div>
    <router-view></router-view>
    <!--<notification-block></notification-block>-->
  </div>
</template>

<script>
  import notificationBlock from '../components/notification-block.vue'

  export default {
    components: {
      notificationBlock
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
