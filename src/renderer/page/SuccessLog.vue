<template>
  <div class="successLogWrapper">
    <top-bar :canBack="true" :date="date"/>
    <div class="txtEditorBox">
      <textarea class="txtEditor"></textarea>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/TopBar.vue';
  import { setDocumentTitle } from '../../func/defaultSet';

  export default {
    name: 'successLog-page',
    components: { TopBar },
    data() {
      return {
        date: '',
      };
    },
    beforeCreate() {
      setDocumentTitle('成功日志');
    },
  };
</script>

<style>
  .successLogWrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .txtEditorBox {
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 5px;
    background-color: azure;
  }
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