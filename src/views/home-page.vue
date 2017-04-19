<template>
  <div class="home">
    <hero-block title="Jerred Shepherd"
                subtitle="a web developer"></hero-block>
    <div class="pure-g feature-container">
      <div class="pure-u-1-12 pure-u-lg-1-4"></div>
      <div class="pure-u-5-6 pure-u-lg-1-2">
        <feature-block title="Projects" :items="featureItems"></feature-block>
      </div>
    </div>
    <div class="pure-g contact-container">
      <div class="pure-u-1-12 pure-u-lg-3-8"></div>
      <div class="pure-u-5-6 pure-u-lg-1-4">
        <contact-block title="Get in touch"></contact-block>
      </div>
    </div>
    <footer-block></footer-block>
  </div>
</template>

<script>
  import heroBlock from '../components/hero-block.vue'
  import featureBlock from '../components/feature-block.vue'
  import contactBlock from '../components/contact-block.vue'
  import footerBlock from '../components/footer-block.vue'
  import featureItems from '../featureItems'
  export default {
    components: {
      heroBlock,
      featureBlock,
      contactBlock,
      footerBlock
    },
    computed: {
      featureItems: function () {
        return featureItems.items
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    > .hero {
      height: 100vh;
      background: #0b8793;
      background: -webkit-linear-gradient(to top, #0b8793, #360033);
      background: linear-gradient(to top, #0b8793, #360033);
    }

    .feature-container {
      min-height: 100vh;
      background: #0b8793;
    }

    > .contact-container {
      min-height: 100vh;
      background: #0b8793;
    }
  }
</style>
