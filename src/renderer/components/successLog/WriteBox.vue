<template>
  <div class="txtEditorBox" v-bind:style="style">
    <Write
      :textAlign="textAlignItem.textAlign"
      :fontSize="fontSizeItem.fontSize"
    />
    <div
      class="setBar"
    >
      <span
        class="textAlign mouseHover" 
        @click="changeTextAlign"
      >
        {{textAlignItem.text}}
      </span>
      <span
        class="fontSize mouseHover" 
        @click="changeFontSize"
      >
        {{fontSizeItem.text}}
      </span>
    </div>
  </div>
</template>

<script>
  import Write from './Write.vue';

  let textAlignIndex = 0;
  let fontSizeIndex = 0;
  const textAlign = [{
    text: '左',
    textAlign: 'left',
  }, {
    text: '中',
    textAlign: 'center',
  }, {
    text: '右',
    textAlign: 'right',
  }];
  const fontSize = [{
    text: '小',
    fontSize: '16px',
  }, {
    text: '中',
    fontSize: '24px',
  }, {
    text: '大',
    fontSize: '32px',
  }];

  export default {
    name: 'write-box',
    components: { Write },
    data() {
      return {
        textAlignItem: textAlign[textAlignIndex],
        fontSizeItem: fontSize[fontSizeIndex],
        style: {},
      };
    },
    methods: {
      changeTextAlign() {
        textAlignIndex += 1;
        if (textAlignIndex >= textAlign.length) {
          textAlignIndex = 0;
        }
        this.$data.textAlignItem = textAlign[textAlignIndex];
      },
      changeFontSize() {
        fontSizeIndex += 1;
        if (fontSizeIndex >= fontSize.length) {
          fontSizeIndex = 0;
        }
        this.$data.fontSizeItem = fontSize[fontSizeIndex];
      },
    },
  };
</script>


<style>
  .txtEditorBox {
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 5px 5px 35px;
    background-color: azure;
  }
  .setBar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 15px;
    height: 35px;
    line-height: 35px;
    background-color: bisque;
  }
  .mouseHover {
    cursor: pointer;
    padding-left: 5px;
    user-select:none;
  }
  .mouseHover:hover {
    background-color: azure;
    color: #bbb;
  }
</style>
