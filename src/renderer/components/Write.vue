<template>
  <textarea class="txtEditor" v-bind:style="style" />
</template>

<script>
  export default {
    name: 'write',
    data() {
      return {
        style: {},
      };
    },
  };
</script>


<style>
  .txtEditor {
    position: relative;
    width: 100%;
    height: 100%;
		padding:0px;
		margin:0px;
		border:0px;
		font-size: 18px;
    background-color: transparent;
  }
  textarea:focus {
    outline: none;
  }
</style>
