<template>
  <div class="hero">
    <h1 class="hero__title">{{ title }}</h1>
    <h2 class="hero__subtitle">{{ subtitle }}</h2>
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
  }

  .hero__title, .hero__subtitle {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
  }

  .hero__title {
    margin: 0;
    font-size: 7vh;
  }

  .hero__subtitle {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-size: 4vh;
    font-weight: 300;
  }
</style>
