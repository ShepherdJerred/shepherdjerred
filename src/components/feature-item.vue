<template>
  <div class="feature pure-g" :class="{ 'feature--reverse' : reverse }">
    <div class="feature__contentHolder pure-u-1 pure-u-md-2-3">
      <div class="feature__content">
        <h1 class="feature__title">{{ title }}</h1>
        <p class="feature__description">{{ description }}</p>
        <router-link :to="link">
          <button class="feature__button"
                  :style="{ background: color }">{{ buttonText }}

          </button>
        </router-link>
      </div>
    </div>
    <div class="iconHolder pure-u-1 pure-u-md-1-3"
         :style="{ background: color }">
      <i class="fa fa-fw fa-3x iconHolder__icon"
         :class="'fa-' + icon"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FeatureItem',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        default: 'Details'
      },
      link: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#000'
      },
      icon: {
        type: String,
        required: true
      },
      reverse: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feature {
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, .5);
    position: relative;
  }

  .iconHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .iconHolder__icon {
    padding: 60px;
    color: #fff;
  }

  .feature__contentHolder {
    text-align: center;
  }

  .feature__content {
    padding: 60px;
  }

  .feature__title {
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin: 0;
  }

  .feature__description {
    font-family: "Open Sans", sans-serif;
    margin: 10px 0;
  }

  a .feature__button {
    color: #fff;
    border: none;
    padding: 10px 50px;
    border-radius: 5px;
    margin-top: 10px;

    &.feature__button {
      font-size: 14px;
      font-family: "Lato", sans-serif;
      font-weight: 700;
    }
  }

  .feature--reverse {
    flex-direction: row-reverse;
  }
</style>
