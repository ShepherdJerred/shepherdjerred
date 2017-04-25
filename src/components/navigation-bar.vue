<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__item">
      Home
    </router-link>
    <router-link to="/about" class="navbar__item">
      About
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'SidebarNavigation'
  }
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    align-items: center;
    background: #282830;
    padding: 20px;
    justify-content: flex-end;
  }

  .navbar__item {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
  }
</style>
