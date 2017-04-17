<template>
  <div class="contact">
    <area-title :text="title"></area-title>
    <div class="form-container">
      <form class="form-inner pure-form"
            method="POST"
            action="/contact/">
        <fieldset class="pure-group">
          <input type="text" class="pure-input-1" placeholder="Name">
          <input type="email" class="pure-input-1" placeholder="Email">
        </fieldset>

        <fieldset class="pure-group">
          <input type="text" class="pure-input-1" placeholder="Subject">
          <textarea class="pure-input-1" placeholder="Message"></textarea>
        </fieldset>

        <vue-recaptcha :sitekey="recaptchaKey"></vue-recaptcha>

        <button type="submit" class="pure-button pure-input-1 pure-button-primary">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
  import areaTitle from './area-title.vue'
  import vueRecaptcha from 'vue-recaptcha'
  export default {
    name: 'ContactBlock',
    components: {
      areaTitle,
      vueRecaptcha
    },
    props: {
      title: {
        type: String,
        default: 'Contact'
      },
      recaptchaKey: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact {
    .form-container {
      background-color: #fff;
      box-shadow: 2px 2px 0 0 rgba(0, 0, 0, .5);
      border-radius: 5px;
    }

    .form-inner {
      padding: 20px;

      textarea {
        min-height: 120px;
      }

      button {
        margin-top: 10px;
      }
    }
  }
</style>
