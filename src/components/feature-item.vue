<template>
  <div class="feature-item pure-g" :class="{ 'feature-reverse' : reverse }">
    <div class="feature-content pure-u-1 pure-u-md-2-3">
      <div class="content-inner">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ description }}</p>
        <a :href="buttonLink">
          <button class="button"
                  :style="{ background: highlightColor }">{{ buttonText }}</button>
        </a>
      </div>
    </div>
    <div class="feature-icon pure-u-1 pure-u-md-1-3"
         :style="{ background: highlightColor }">
      <i class="fa fa-fw fa-3x icon"
         :class="iconClass"></i>
    </div>
  </div>
</template>

<script>
  export default {
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
        default: 'View'
      },
      buttonLink: {
        type: String,
        required: true
      },
      highlightColor: {
        type: String,
        default: '#000'
      },
      iconClass: {
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
  .feature-item {
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;

    > .feature-content {
      text-align: center;

      .content-inner {
        padding: 60px;

        > .title {
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          margin: 0;
        }

        > .description {
          font-family: "Open Sans", sans-serif;
        }

        > a .button {
          color: #fff;
          border: none;
          padding: 10px 40px;
          border-radius: 5px;
        }
      }
    }

    > .feature-icon {
      display: flex;
      justify-content: center;
      align-items: center;

      > .icon {
        color: #fff;
      }
    }
  }

  .feature-reverse {
    flex-direction: row-reverse;
  }
</style>
