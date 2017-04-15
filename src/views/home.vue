<template>
  <div class="home">
    <hero title="Jerred Shepherd"
          subtitle="a web developer"></hero>
    <feature title="Projects"></feature>
    <!--<contact title="Get in touch"-->
             <!--recaptchaKey="6Lff6xsTAAAAAJz6DLCysZZw70vapFYaFhvhPLIU"></contact>-->
    <site-footer></site-footer>
  </div>
</template>

<script>
  import Hero from '../components/hero.vue'
  import Feature from '../components/feature.vue'
  import Contact from '../components/contact.vue'
  import SiteFooter from '../components/site-footer.vue'
  export default {
    components: {
      Hero,
      Feature,
      Contact,
      SiteFooter
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
