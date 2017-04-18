<template>
  <div class="contact-block">
    <area-title :text="title"></area-title>
    <form class="form pure-form">

      <fieldset class="pure-group">
        <input type="text"
               class="pure-input-1"
               placeholder="Name"
               v-model="name">

        <input type="email"
               class="pure-input-1"
               placeholder="Email"
               v-model="email">
      </fieldset>

      <fieldset class="pure-group">
        <input type="text"
               class="pure-input-1"
               placeholder="Subject"
               v-model="subject">

        <textarea class="pure-input-1 message"
                  placeholder="Message"
                  name="message"
                  v-model="message"></textarea>
      </fieldset>

      <!--<vue-recaptcha :sitekey="recaptchaKey"></vue-recaptcha>-->

      <button type="submit"
              class="pure-button pure-input-1 submit"
              @click="submit">Send
      </button>
    </form>
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
    data: function () {
      return {
        name: '',
        subject: '',
        email: '',
        message: '',
        showStatus: false,
        sucessStatus: false
      }
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
    },
    methods: {
      submit: function () {
        this.showStatus = true
        this.sucessStatus = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact-block {
    > .form {
      background-color: #fff;
      box-shadow: 2px 2px 0 0 rgba(0, 0, 0, .5);
      border-radius: 5px;
      padding: 20px;

      .message {
        min-height: 120px;
      }

      .submit {
        margin-top: 10px;
      }
    }
  }
</style>
