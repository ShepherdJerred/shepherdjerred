<template>
  <div class="item-tag">
    {{ text }}
  </div>
</template>

<script>
  export default {
    name: 'ItemTag',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item-tag {
    display: inline-block;
    background-color: #aaa;
    padding: 5px;
  }
</style>
