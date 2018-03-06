<template>
  <textarea class="txtEditor" v-bind:style="{textAlign, fontSize}" />
</template>

<script>
  export default {
    name: 'write',
    props: ['textAlign', 'fontSize'],
    data() {
      return {
      };
    },
    watch: {

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
  textarea {
    resize:none 
  }
  textarea:focus {
    outline: none;
  }
</style>
