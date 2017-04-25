<template>
  <div class="contact">
    <h1 class="contact__title">Contact</h1>
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
  $fontColor: #A9B7C6;
  $fontFamily: 'Fira Mono', 'Consolas', monospace;

  .contact {
    background: $background;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .contact__title {
      color: $fontColor;
      font-family: $fontFamily;
        margin: 0 0 30px;
    }
  }
</style>
