<template>
  <div class="project">
    <hero-block :title="title"
                :subtitle="summary"
                :style="{ background: color}"
                class="project__hero"></hero-block>
    <div class="pure-g">
      <div class="pure-u-1-5"></div>
      <div class="pure-u-3-5">
        <div class="pure-g">
          <div class="pure-u-3-5 projectContent">
            <h1 class="projectContent__title">About</h1>
            <div class="project__description">
              <p>
                {{ description }}
              </p>
            </div>

            <h1 class="projectContent__title">Process</h1>
            <div class="projectProcess">
              <template v-for="(item, index) in process">
                <h2 class="projectProcess__title">#{{ index }} {{ item.title }}</h2>
                <p>
                  {{ item.description }}
                </p>
              </template>
            </div>
          </div>

          <div class="pure-u-2-5 projectSidebar">
            <div class="projectSidebar__inner">
              <div class="projectLinks">
                <template v-for="link in links">
                  <a :href="link.link" class="projectLinks_link">
                    <button class="pure-button projectLinks_button" :style="{ background: color }">{{ link.name }}
                    </button>
                  </a>
                </template>
              </div>
              <div class="projectTags">
                <template v-for="tag in tags">
                  <item-tag :text="tag"
                            class="projectTags__tag"></item-tag>
                </template>
              </div>
            </div>
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
  .project__hero {
    height: 25vh;
    margin-bottom: 20px;
  }

  .projectContent {
    margin-bottom: 20px;
  }

  .projectContent__title {
    margin: 20px 0 5px;
  }

  .projectProcess__title {
    margin: 15px 0 5px;
  }

  .projectSidebar__inner {
    margin: 0 60px;
  }

  .projectLinks_link {
    text-decoration: none;
  }

  .projectLinks_button {
    display: block;
    width: 100%;
    color: #fff;
    margin: 10px 0;
  }

  .projectTags__tag {
    margin: 5px 5px;
  }
</style>
