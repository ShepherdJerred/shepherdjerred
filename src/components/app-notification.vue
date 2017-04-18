<template>
  <div class="app-notification">
    <h1 class="title">{{ title }}</h1>
    <p class="body">
      {{ body }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      body: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-notification {
    background-color: lighten(#282830, 10%);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, .5);
    position: relative;

    > .title {
      font-family: 'Lato', sans-serif;
      font-size: 20px;
      margin: 0;
    }

    > .body {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      margin: 0;
    }
  }
</style>
