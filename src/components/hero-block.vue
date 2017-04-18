<template>
  <div class="hero">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'HeroBlock',
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > .title, .subtitle {
      color: #fff;
      font-family: 'Open Sans', sans-serif;
    }

    > .title {
      margin: 0;
      font-size: 3em;
    }

    > .subtitle {
      margin: 0;
      font-family: 'Lato', sans-serif;
      font-size: 2.5em;
      font-weight: 300;
    }
  }
</style>
