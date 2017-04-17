<template>
  <div class="home">
    <hero-block title="Jerred Shepherd"
          subtitle="a web developer"></hero-block>
    <feature-block title="Projects"></feature-block>
    <!--<contact title="Get in touch"-->
             <!--recaptchaKey="6Lff6xsTAAAAAJz6DLCysZZw70vapFYaFhvhPLIU"></contact>-->
    <footer-block></footer-block>
  </div>
</template>

<script>
  import heroBlock from '../components/hero-block.vue'
  import featureBlock from '../components/feature-block.vue'
  import contactBlock from '../components/contact-block.vue'
  import footerBlock from '../components/footer-block.vue'
  export default {
    components: {
      heroBlock,
      featureBlock,
      contactBlock,
      footerBlock
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;

    > .hero {
      height: 100vh;
      background: #0b8793;
      background: -webkit-linear-gradient(to top, #0b8793, #360033);
      background: linear-gradient(to top, #0b8793, #360033);
    }

    > .feature {
      min-height: 100vh;
      background: #0b8793;
    }

    > .contact {
      min-height: 100vh;
      background: #0b8793;
    }
  }
</style>
