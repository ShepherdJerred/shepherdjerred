<template>
  <project-details :title="title" :summary="summary" :description="description" :tags="tags" :icon="icon" :links="links"
                   :process="process"></project-details>
</template>

<script>
  import projectDetails from '../components/project-details.vue'
  import projects from '../projects'
  export default {
    components: {
      projectDetails
    },
    name: 'ProjectPage',
    componenets: {
      projectDetails
    },
    computed: {
      projects: function () {
        return projects.projects
      },
      routeName: function () {
        return this.$route.params.project
      },
      title: function () {
        if (Object.keys(this.projects).includes(this.routeName)) {
          return this.projects[this.routeName].title
        }
      },
      summary: function () {
        if (Object.keys(this.projects).includes(this.routeName)) {
          return this.projects[this.routeName].summary
        }
      },
      description: function () {
        if (Object.keys(this.projects).includes(this.routeName)) {
          return this.projects[this.routeName].description
        }
      },
      tags: function () {
        if (Object.keys(this.projects).includes(this.routeName)) {
          return this.projects[this.routeName].tags
        }
      },
      icon: function () {
        if (Object.keys(this.projects).includes(this.routeName)) {
          return this.projects[this.routeName].icon
        }
      },
      links: function () {
        if (Object.keys(this.projects).includes(this.routeName)) {
          return this.projects[this.routeName].links
        }
      },
      process: function () {
        if (Object.keys(this.projects).includes(this.routeName)) {
          return this.projects[this.routeName].process
        }
      }
    }
  }
</script>
