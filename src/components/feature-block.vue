<template>
  <div class="feature">
    <area-title :text="title"></area-title>
    <div class="pure-g">
      <div class="pure-u-1-12 pure-u-md-1-4"></div>
      <div class="pure-u-5-6 pure-u-md-1-2">
        <div class="pure-g">
          <div class="pure-u-1">
            <feature-item title="Raspastat"
                          description="Turn a Raspberry Pi into a smart thermostat, controlled with a REST API"
                          buttonLink="https://github.com/ShepherdJerred/raspastat-core"
                          iconClass="fa-thermometer-full"
                          highlightColor="#97CE68"></feature-item>
          </div>
          <div class="pure-u-1">
            <feature-item title="Siphon"
                          description="Improved navigation for Harding's Pipeline website"
                          buttonLink="https://github.com/ShepherdJerred/siphon-vue"
                          iconClass="fa-university"
                          highlightColor="#22313f"
                          :reverse="true"></feature-item>
          </div>
          <div class="pure-u-1">
            <feature-item title="The Button"
                          description="Web application made with Vue and the Java Spark framework"
                          buttonLink="https://github.com/ShepherdJerred/thebutton"
                          iconClass="fa-circle"
                          highlightColor="#e84545"></feature-item>
          </div>
        </div>
      </div>
    </div>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feature {
    .feature-item {
      margin-bottom: 80px;
    }
  }
</style>
