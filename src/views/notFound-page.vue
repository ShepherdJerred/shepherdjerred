<template>
  <div>
    <hero-block title="Error 404"
                subtitle="Page not found"
                class="error"></hero-block>
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
  .error {
    height: calc(100vh - 103px);
    background: #f85032;
    background: -webkit-linear-gradient(to top, #e73827, #f85032);
    background: linear-gradient(to top, #e73827, #f85032);
  }
</style>
