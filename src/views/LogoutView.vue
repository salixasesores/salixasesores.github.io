<template>
  <div></div>
</template>
  
  <script>
  export default {
    name: 'logoutComponent',
  beforeCreate() {
    localStorage.setItem("token", '')
    this.$router.push('/')
    }
  }
  
  </script>