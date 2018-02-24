<template>

  <div class="wrapper">
    <top-bar :canBack="true" :date="date"/>
    successLog
    <button @click="now()">now</button>
  </div>
</template>

<script>
  import TopBar from '../components/TopBar.vue';

  export default {
    name: 'successLog-page',
    components: { TopBar },
    data() {
      return {
        date: '',
      };
    },
    methods: {
      now() {
        
      },
    },
  };
</script>

<style>

</style>