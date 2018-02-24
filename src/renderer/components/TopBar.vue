<template>
  <div class="topBar">
    <div>{{isCanBack}}</div>
  </div>
</template>

<script>
  export default {
    name: 'top-bar',
    props: ['canBack'],
    data() {
      return {
        isCanBack: this.canBack,
      };
    },
  };
</script>

<style>
  .topBar {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    width: 100%;
    background-color: bisque;
  }
</style>
