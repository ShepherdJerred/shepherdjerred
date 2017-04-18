<template>
  <div class="app-notification">
    <h1>{{ title }}</h1>
    <p>
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

</style>
