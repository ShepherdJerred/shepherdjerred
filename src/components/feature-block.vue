<template>
  <div class="feature">
    <block-title :text="title"></block-title>
    <template v-for="(value, key, index) in items">
      <feature-item :title="value.title"
                    :description="value.summary"
                    :link="'project/' + key"
                    :icon="value.icon"
                    :color="value.color"
                    :reverse="index % 2 === 1"></feature-item>
    </template>
  </div>
</template>

<script>
  import blockTitle from './block-title.vue'
  import featureItem from '../components/feature-item.vue'
  export default {
    name: 'FeatureBlock',
    components: {
      blockTitle,
      featureItem
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    computed: {
      items: function () {
        return this.$store.state.projects
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feature {
    margin-bottom: 80px;
  }
</style>
