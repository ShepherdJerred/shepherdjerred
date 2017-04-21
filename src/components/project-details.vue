<template>
  <div class="project-details">
    <hero-block :title="title" :subtitle="summary" :style="{ background: color}"></hero-block>
    <div class="pure-g">
      <div class="pure-u-1-5"></div>
      <div class="pure-u-3-5">
        <div class="pure-g">
          <div class="pure-u-3-5">
            <div class="description">
              <h1>About</h1>
              <p>
                {{ description }}
              </p>
            </div>
            <div class="process">
              <h1>Process</h1>
              <template v-for="(item, index) in process">
                <h2>#{{ index }} {{ item.title }}</h2>
                <p>
                  {{ item.description }}
                </p>
              </template>
            </div>
          </div>
          <div class="pure-u-2-5">
            <div class="project-links">
              <template v-for="link in links">
                <a :href="link.link" class="link">
                  <button class="pure-button button" :style="{ background: color }">{{ link.name }}</button>
                </a>
              </template>
            </div>
            <template v-for="tag in tags">
              <item-tag :text="tag"></item-tag>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import heroBlock from '../components/hero-block.vue'
  import itemTag from '../components/item-tag.vue'
  export default {
    name: 'ProjectDetails',
    components: {
      heroBlock,
      itemTag
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
      },
      color: {
        type: String,
        default: '#fff'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project-details {
    > .hero {
      height: 45vh;
    }
  }

  .project-links {
    .link {
      text-decoration: none;
    }

    .button {
      display: block;
      width: 100%;
      color: #fff;
    }
  }
</style>
