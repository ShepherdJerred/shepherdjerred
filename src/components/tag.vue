<template>
  <a href=""
     class="tag">{{ title }}</a>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tag {
    background-color: rgba(0, 0, 0, .75);
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    font-size: 12px;
  }
</style>
