<template>
  <div class="projects">
    <div class="projects__inner">
      <h1 class="projects__title">Projects</h1>
      <div class="pure-g">
        <div class="pure-u-1-12 pure-u-md-1-4"></div>

        <div class="pure-u-5-6 pure-u-md-1-2">
          <div class="projects__list">
            <template v-for="(value, key, index) in items">
              <project-item :title="value.title"
                            :description="value.summary"
                            :link="'projects/' + key"
                            :icon="value.icon"
                            :color="value.color"
                            :reverse="index % 2 === 1"></project-item>
            </template>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import ProjectItem from '../components/project-item'
  export default {
    components: {
      ProjectItem
    },
    name: 'ProjectsPage',
    computed: {
      items: function () {
        return this.$store.state.projects
      }
    }
  }
</script>

<style lang="scss" scoped>
  $background: #2B2B2B;
  $fontColor: #A9B7C6;
  $fontHightlight: #CC7832;
  $fontFamily: 'Fira Mono', 'Consolas', monospace;

  .projects {
    background: $background;
    color: $fontColor;
    font-family: $fontFamily;

    .projects__inner {
      padding-top: 20px;

      .projects__title {
        margin: 0;
        margin-bottom: 10px;
        text-align: center;
      }

      .project__list {

      }
    }
  }
</style>
