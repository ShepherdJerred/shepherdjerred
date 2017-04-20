<template>
  <div class="notification-block">
    <div class="notification-inner"></div>
    <template v-for="notification in notifications">
      <app-notification :title="notification.title"
                        :body="notification.body"
                        class="notification-container"></app-notification>
    </template>
  </div>
</template>

<script>
  import appNotification from '../components/app-notification.vue'

  export default {
    name: 'NotificationBlock',
    components: {
      appNotification
    },
    computed: {
      notifications: function () {
        return [
          {
            title: 'Success!',
            body: 'Your message has been sent.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .notification-block {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 30%;
    display: flex;
    flex-direction: column-reverse;

    @media screen and (max-width: 48em) {
      width: 100%;
    }

    > .notification-inner {
      margin: 10px;

      .notification-container {
        margin-bottom: 10px;
      }
    }

  }
</style>
