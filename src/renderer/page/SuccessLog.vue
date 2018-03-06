<template>
  <div class="successLogWrapper">
    <top-bar :canBack="true" :date="date"/>
    <WriteBox></WriteBox>
  </div>
</template>

<script>
  import TopBar from '../components/TopBar.vue';
  import WriteBox from '../components/WriteBox.vue';
  import { setDocumentTitle } from '../../func/defaultSet';

  export default {
    name: 'successLog-page',
    components: { TopBar, WriteBox },
    data() {
      return {
        date: '',
        textAlignItems: ['left', 'center', 'right'],
        textAlignIndex: 2,
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

  .fucMenu {
    position: absolute;
    height: 40px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: steelblue;
  }
</style>