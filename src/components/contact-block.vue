<template>
  <div class="contact">
    <div class="pure-g">
      <div class="pure-u-1-12 pure-u-md-10-24"></div>
      <div class="pure-u-5-6 pure-u-md-1-6">
        <div class="contact__inner">
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

              <textarea class="pure-input-1"
                        placeholder="Message"
                        v-model="content"></textarea>
            </fieldset>

            <vue-recaptcha sitekey="6Lff6xsTAAAAAJz6DLCysZZw70vapFYaFhvhPLIU"
                           @verify="verify"></vue-recaptcha>

            <button type="button"
                    class="pure-button pure-input-1"
                    @click="submit">Send <i class="fa fa-fw fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
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

  $fontColor: #A9B7C6;
  $fontHightlight: #CC7832;
  $fontFamily: 'Fira Mono', 'Consolas', monospace;

  .contact {
    .contact__inner {

    }
  }
</style>
