<template>

  <div class="wrapper">
    index
    
    <button @click="jumpTo('successLog-page')">成功日志</button>
  </div>
</template>

<script>
  export default {
    name: 'index-page',
    methods: {
      jumpTo(name) {
        this.$router.push({
          name,
        });
      },
    },
  };
</script>


<style>

</style>
