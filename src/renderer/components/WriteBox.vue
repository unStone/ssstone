<template>
  <div class="txtEditorBox" v-bind:style="style">
    <Write />
  </div>
</template>

<script>
  import Write from './Write.vue';

  export default {
    name: 'write-box',
    components: { Write },
    data() {
      return {
        style: {},
      };
    },
  };
</script>


<style>
  .txtEditorBox {
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 40px;
    left: 0;
    padding: 5px;
    background-color: azure;
  }
</style>
