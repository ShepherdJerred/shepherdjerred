<template>
  <nav class="navbar">
    <div class="pure-g">
      <div class="pure-u-1-8"></div>
      <div class="pure-u-3-4 navbar__inner">
        <router-link to="/" class="navbar__item">Home</router-link>
        <router-link to="/projects" class="navbar__item">Projects</router-link>
        <router-link to="/contact" class="navbar__item">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
  $background: #2B2B2B;
  $fontColor: #A9B7C6;

  .navbar {
    position: fixed;
    width: 100%;
    background-color: $background;
    z-index: 100;

    .navbar__inner {
      display: flex;
      align-items: stretch;
      justify-content: flex-start;

      @media screen and (max-width: 48em) {
        justify-content: center;
      }

      .navbar__item {
        font-family: 'Fira Mono', 'Consolas', sans-serif;
        color: $fontColor;
        text-decoration: none;
        padding: 10px;

        &:hover {
          background-color: lighten($background, 3%);
        }
      }
    }
  }
</style>
