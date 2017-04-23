<template>
  <div class="home">
    <hero-block title="Jerred Shepherd"
                subtitle="a web developer"
                class="home__hero"></hero-block>
    <div class="pure-g home__feature">
      <div class="pure-u-1-12 pure-u-lg-1-4"></div>
      <div class="pure-u-5-6 pure-u-lg-1-2">
        <feature-block title="Projects"></feature-block>
      </div>
    </div>
    <div class="pure-g home__contact">
      <div class="pure-u-1-12 pure-u-lg-3-8"></div>
      <div class="pure-u-5-6 pure-u-lg-1-4">
        <contact-block title="Get in touch"></contact-block>
      </div>
    </div>
  </div>
</template>

<script>
  import heroBlock from '../components/hero-block.vue'
  import featureBlock from '../components/feature-block.vue'
  import contactBlock from '../components/contact-block.vue'
  export default {
    name: 'HomePage',
    components: {
      heroBlock,
      featureBlock,
      contactBlock
    },
    computed: {
      featureItems: function () {
        return this.$store.projects
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home__hero {
    height: 100vh;
    background: #0b8793;
    background: -webkit-linear-gradient(to top, #0b8793, #360033);
    background: linear-gradient(to top, #0b8793, #360033);
  }

  .home__feature {
    min-height: 100vh;
    background: #0b8793;
  }

  .home__contact {
    min-height: 100vh;
    background: #0b8793;
  }
</style>
