<template>
  <div class="itemTag">
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
  .itemTag {
    display: inline-block;
    background-color: #aaa;
    padding: 5px;
  }
</style>
