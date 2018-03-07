<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ssstone',
  };
</script>

<style>
  /* CSS */
  #app {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  textarea {
    resize:none 
  }
  textarea:focus {
    outline: none;
  }
  .userUnSelect {
    user-select:none;
  }
</style>
