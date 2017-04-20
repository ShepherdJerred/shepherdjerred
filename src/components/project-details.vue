<template>
  <div class="project">
    <hero-block :title="title" :subtitle="summary"></hero-block>
    <div>
      <template v-for="tag in tags">{{ tag }}</template>
    </div>
    <i class="fa fa-fw" :class="'fa-' + icon"></i>
    <p>
      {{ description }}
    </p>
    <template v-for="process in process">
      <h1>{{ process.title }}</h1>
      <p>
        {{ process.description }}
      </p>
    </template>
    <div>
      <template v-for="link in links">
        <a :href="link.link">
          <button class="pure-button">{{ link.name }}</button>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
  import heroBlock from '../components/hero-block.vue'
  export default {
    name: 'ProjectDetails',
    components: {
      heroBlock
    },
    props: {
      title: {
        type: String,
        required: true
      },
      summary: {
        type: String
      },
      description: {
        type: String,
        required: true
      },
      tags: {
        type: Array,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      links: {
        type: Array,
        required: true
      },
      process: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project {
    > .hero {
      height: 35vh;
      background: #0b8793;
      background: -webkit-linear-gradient(to top, #0b8793, #360033);
      background: linear-gradient(to top, #0b8793, #360033);
    }
  }
</style>
