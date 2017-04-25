<template>
  <div class="home">
    <div class="home__text">
      <h1 class="text__title">Jerred Shepherd</h1>
      <p class="text__desc">
        I'm a <span class="text__highlight">web</span> and <span class="text__highlight">Java</span> developer, but I try to learn new technologies when I have time.<br>
        I make websites and small applications to help people out.<br>
        This site showcases my projects and the processes behind them.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>

<style lang="scss" scoped>
  $background: #2B2B2B;
  $fontColor: #A9B7C6;
  $fontHightlight: #CC7832;
  $fontFamily: 'Fira Code', 'Consolas', monospace;

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $fontColor;
    background-color: $background;

    .home__text {

      .text__title {
        margin: 0 0 10px;
        font-family: $fontFamily;
        line-height: 35px;
      }

      .text__desc {
        font-family: $fontFamily;
        line-height: 25px;
      }

      .text__highlight {
        color: $fontHightlight
      }
    }
  }
</style>
