<template>
  <div class="project">
    <div class="pure-u-1-12"></div>
    <div class="pure-u-5-6">
      <div class="pure-g">

        <div class="pure-u-1 pure-u-md-4-5 project__content">
          <div class="info">
            <h1 class="info__title">{{ title }}</h1>
            <p class="info__summary">
              {{ summary }}
            </p>
          </div>

          <div class="about">
            <h1 class="about__title">About</h1>
            <p class="about__description">
              {{ description }}
            </p>
          </div>

          <div class="process">
            <h1 class="process__title">Process</h1>
            <template v-for="(item, index) in process">
              <div class="entry">
                <h2 class="entry__title">0{{ index }} {{ item.title }}</h2>
                <p class="entry__description">
                  {{ item.description }}
                </p>
              </div>
            </template>
          </div>
        </div>

        <div class="pure-u-1 pure-u-md-1-5 sidebar">
          <div class="sidebar__inner">
            <template v-for="link in links">
              <a :href="link.link"
                 class="sidebar__link"
                 :style="{ background: color  }">{{ link.name }}</a>
            </template>
          </div>
        </div>

      </div>
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
      },
      color: {
        type: String,
        default: '#fff'
      }
    }
  }
</script>

<style lang="scss" scoped>
  $background: #2B2B2B;
  $fontColor: #A9B7C6;
  $fontHightlight: #CC7832;
  $fontFamily: 'Fira Mono', 'Consolas', monospace;

  .project {
    background: $background;
    color: $fontColor;
    .project__content {
      font-family: $fontFamily;

      .info {
        padding: 40px 0;
        .info__title {
          margin: 0;
        }
      }

      .about {
        padding: 40px 0;
        .about__title {
          margin: 0;
        }
      }

      .process {
        .process__title {
          margin: 0;
        }

        .entry {
          padding: 15px 0;
          .entry__title {

          }
          .entry__description {

          }
        }
      }
    }
  }

  .sidebar {
    .sidebar__inner {
      margin: 0 10px 20px;
      .sidebar__link {
        text-align: center;
        margin-bottom: 10px;
        display: block;
        padding: 10px 5px;
        width: 100%;
        color: #fff;
        text-decoration: none;
      }
    }
  }
</style>
