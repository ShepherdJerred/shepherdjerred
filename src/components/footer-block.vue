<template>
  <footer class="footer">
    <div class="attribution">
      <a href="http://shepherdjerred.com"
         class="footer-link">Site created by Jerred Shepherd</a>
    </div>
    <div class="social">
      <a href="https://twitter.com/ShepherdJerred" class="fa fa-fw fa-twitter social-icon"></a>
      <a href="https://github.com/ShepherdJerred" class="fa fa-fw fa-github social-icon"></a>
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

  .attribution {
    background-color: $background;
    padding: 40px 0;
    color: $fontColor;
    font-size: 14px;
    font-family: "Lato", sans-serif;

    > .footer-link {
      color: $fontColor;
      text-decoration: none;
    }
  }

  .social {
    background-color: darken($background, 5%);
    padding: 20px 0;
    > .social-icon {
      color: $fontColor;
      text-decoration: none;
    }
  }
</style>
