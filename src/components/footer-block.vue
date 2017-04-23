<template>
  <footer class="footer">
    <div class="footer__attribution">
      <a href="http://shepherdjerred.com"
         class="attribution__link">Site created by Jerred Shepherd</a>
    </div>
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
  $background: #282830;
  $fontColor: #fff;

  .footer {
    text-align: center;
  }

  .footer__attribution {
    background-color: $background;
    padding: 25px 0;
    color: $fontColor;
    font-size: 12px;
    font-family: "Lato", sans-serif;
  }

  .attribution__link {
    color: $fontColor;
    text-decoration: none;
  }

  .footer__social {
    background-color: darken($background, 5%);
    padding: 10px 0;
  }

  .social__icon {
    color: $fontColor;
    text-decoration: none;
  }
</style>
