<template>
  <div class="contact">
    <contact-block></contact-block>
  </div>
</template>

<script>
  import ContactBlock from '../components/contact-block'
  export default {
    components: {
      ContactBlock
    },
    name: 'ContactPage'
  }
</script>

<style lang="scss" scoped>
  $background: #2B2B2B;

  .contact {
    background: $background;
  }
</style>
