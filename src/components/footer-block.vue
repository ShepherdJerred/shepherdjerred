<template>
  <footer class="footer">
    <div class="footer__social">
      <a href="https://twitter.com/ShepherdJerred" class="fa fa-fw fa-twitter social__icon"></a>
      <a href="https://github.com/ShepherdJerred" class="fa fa-fw fa-github social__icon"></a>
      <a href="mailto:shepherdjerred@gmail.com" class="fa fa-fw fa-envelope social__icon"></a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterBlock'
  }
</script>

<style lang="scss" scoped>
  $background: #2B2B2B;
  $fontColor: #A9B7C6;
  $fontHightlight: #629755;

  .footer {
    text-align: center;
  }

  .footer__social {
    background-color: darken($background, 5%);
    padding: 5px 0;
  }

  .social__icon {
    color: $fontColor;
    text-decoration: none;
    padding: 5px;

    &:hover {
      color: $fontHightlight;
    }
  }
</style>
