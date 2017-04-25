<template>
  <div class="project">
    <router-link :to="link" class="project__title">{{ title }}</router-link><br>
    {{ description }}
  </div>
</template>

<script>
  export default {
    name: 'ProjectItem',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#000'
      }
    }
  }
</script>

<style lang="scss" scoped>
  $fontFamily: 'Fira Mono', 'Consolas', monospace;
  $fontColor: #A9B7C6;

  .project {
    text-align: center;
    font-family: $fontFamily;
    padding: 10px 0;

    .project__title {
      color: $fontColor;
    }
  }
</style>
