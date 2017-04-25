<template>
  <div class="contact">
    <form class="form">
      <input class="form__input"
             type="text"
             placeholder="Name"
             v-model="name">

      <input class="form__input"
             type="email"
             placeholder="Email"
             v-model="email">
      <input class="form__input"
             type="text"
             placeholder="Subject"
             v-model="subject">

      <textarea class="form__input form__message"
                placeholder="Message"
                v-model="content"></textarea>

      <vue-recaptcha sitekey="6Lff6xsTAAAAAJz6DLCysZZw70vapFYaFhvhPLIU"
                     @verify="verify"></vue-recaptcha>

      <button type="button"
              class="form__button"
              @click="submit"><i class="fa fa-fw fa-paper-plane"></i>
      </button>
    </form>
  </div>
</template>

<script>
  import vueRecaptcha from 'vue-recaptcha'
  export default {
    name: 'ContactBlock',
    components: {
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
        statusIconClass: 'fa-cog fa-spin',
        recaptchaResponse: ''
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
          content: this.content,
          'g-recaptcha-response': this.recaptchaResponse
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
      },
      verify: function (response) {
        this.recaptchaResponse = response
      }
    }
  }
</script>

<style lang="scss" scoped>
  $background: #2B2B2B;
  $fontColor: #A9B7C6;
  $fontHightlight: #CC7832;
  $fontFamily: 'Fira Mono', 'Consolas', monospace;

  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-basis: 0;
      .form__input {
        width: 284px;
        border: 0;
        margin-bottom: 10px;
        padding: 10px;
        color: #fff;
        font-family: $fontFamily;
        background: lighten($background, 20%);
        &::placeholder {
          color: lighten($background, 40%);
        }
      }
      .form__message {
        height: 100px;
      }
      .form__button {
        width: 304px;
        padding: 10px 0;
        background: darken($background, 5%);
        border: none;
        color: #fff;
        margin-top: 20px;
      }
    }
  }
</style>
