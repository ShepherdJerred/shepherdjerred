<template>
  <div class="contact-block">
    <area-title :text="title"></area-title>
    <div class="contact-inner">
      <transition name="fade">
        <template v-if="showStatus">
          <div class="status">
            <i class="fa fa-fw fa-5x"
               :class="statusIconClass"></i>
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
                 v-model="email">
        </fieldset>

        <fieldset class="pure-group">
          <input type="text"
                 class="pure-input-1"
                 placeholder="Subject"
                 v-model="subject">

          <textarea class="pure-input-1 message"
                    placeholder="Message"
                    v-model="content"></textarea>
        </fieldset>

        <vue-recaptcha sitekey="6Lff6xsTAAAAAJz6DLCysZZw70vapFYaFhvhPLIU"></vue-recaptcha>

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
        statusMessage: '',
        statusIconClass: 'fa-cog fa-spin'
      }
    },
    props: {
      title: {
        type: String,
        default: 'Contact'
      }
    },
    computed: {
      emailJson: function () {
        return {
          name: this.name,
          email: this.email,
          subject: this.subject,
          content: this.content
        }
      }
    },
    methods: {
      submit: function () {
        this.$http.post('/contact', this.emailJson).then(response => {
          this.statusMessage = response.statusText
          this.statusIconClass = 'fa-check-circle'
          this.resetFormValues()
        }, response => {
          this.statusMessage = 'Error: ' + response.statusText
          this.statusIconClass = 'fa-times-circle'
        })
        this.toggleStatus()
        setTimeout(this.toggleStatus, 3000)
        this.resetStatus()
      },
      toggleStatus: function () {
        this.showStatus = !this.showStatus
      },
      resetFormValues: function () {
        this.name = ''
        this.subject = ''
        this.email = ''
        this.content = ''
      },
      resetStatus: function () {
        this.statusMessage = ''
        this.statusIconClass = 'fa-cog fa-spin'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s
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
