<template>
  <h1 class="area-title">{{ text }}</h1>
</template>

<script>
export default {
  name: 'AreaTitle',
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="scss" scoped>
  .area-title {
    text-align: center;
    margin: 0;
    padding: 10vh 0;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 3em;
    font-weight: 400;
  }
</style>
