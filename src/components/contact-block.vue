<template>
  <div class="contact-block">
    <area-title :text="title"></area-title>
    <div class="contact-inner">
      <transition name="fade">
        <template v-if="showStatus">
          <div class="status">
            <template v-if="statusSuccess">
              <i class="fa fa-fw fa-check-circle fa-5x"></i>
            </template>
            <template v-else>
              <i class="fa fa-fw fa-times-circle fa-5x"></i>
            </template>
            <h1 class="message">{{ statusMessage }}</h1>
          </div>
        </template>
      </transition>
      <form class="form pure-form">

        <fieldset class="pure-group">
          <input type="text"
                 class="pure-input-1"
                 placeholder="Name"
                 v-model="name">

          <input type="email"
                 class="pure-input-1"
                 placeholder="Email"
                 v-model="email"
                 required>
        </fieldset>

        <fieldset class="pure-group">
          <input type="text"
                 class="pure-input-1"
                 placeholder="Subject"
                 v-model="subject">

          <textarea class="pure-input-1 message"
                    placeholder="Message"
                    v-model="content"
                    required></textarea>
        </fieldset>

        <vue-recaptcha :sitekey="recaptchaKey"></vue-recaptcha>

        <button type="button"
                class="pure-button pure-input-1 submit"
                @click="submit">Send <i class="fa fa-fw fa-paper-plane"></i>
        </button>
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
    data: function () {
      return {
        name: '',
        subject: '',
        email: '',
        content: '',
        showStatus: false,
        statusSuccess: null,
        statusMessage: ''
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
        var email = {}

        email.name = this.name
        email.subject = this.subject
        email.email = this.email
        email.content = this.content

        this.$http.post('/contact', email).then(response => {
          this.statusSuccess = true
          this.statusMessage = response.statusText
        }, response => {
          this.statusSuccess = false
          this.statusMessage = response.statusText
        })
        this.resetForm()
        this.toggleStatus()
        setTimeout(this.toggleStatus, 3000)
      },
      toggleStatus: function () {
        this.showStatus = !this.showStatus
      },
      resetForm: function () {
        this.name = ''
        this.subject = ''
        this.email = ''
        this.content = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .contact-block {
    > .contact-inner {
      background-color: #fff;
      box-shadow: 2px 2px 0 0 rgba(0, 0, 0, .5);
      border-radius: 5px;
      padding: 20px;
      position: relative;

      > .status {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #282830;
        border-radius: 5px;
        color: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > .message {
          font-family: 'Lato', sans-serif;
        }
      }

      > .form {

        .message {
          min-height: 120px;
        }

        .submit {
          background-color: #282830;
          color: #fff;
          margin-top: 10px;
        }
      }
    }
  }
</style>
