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
    color: #fff;
    background-color: darken(#6C7A89, 20%);
    padding: 5px 10px;
  }
</style>
