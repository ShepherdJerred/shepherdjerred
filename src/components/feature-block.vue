<template>
  <div class="feature">
    <area-title :text="title"></area-title>
    <template v-for="item in items">
      <feature-item :title="item.title"
                    :description="item.description"
                    :link="item.link"
                    :icon="item.icon"
                    :color="item.color"
                    :reverse="item.reverse"></feature-item>
    </template>
  </div>
</template>

<script>
  import areaTitle from '../components/area-title.vue'
  import featureItem from '../components/feature-item.vue'
  export default {
    name: 'FeatureBlock',
    components: {
      areaTitle,
      featureItem
    },
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feature {
    > .feature-item {
      margin-bottom: 80px;
    }
  }
</style>
