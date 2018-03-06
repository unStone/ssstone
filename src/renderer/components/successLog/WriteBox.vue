<template>
  <div class="txtEditorBox" v-bind:style="style">
    <Write
      :textAlign="textAlignItem.textAlign"
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
    </div>
  </div>
</template>

<script>
  import Write from './Write.vue';

  let textAlignIndex = 0;
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

  export default {
    name: 'write-box',
    components: { Write },
    data() {
      return {
        textAlignItem: textAlign[textAlignIndex],
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
    height: 35px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: bisque;
  }
  .mouseHover {
    cursor: pointer;
    padding: 5px;
  }
  .mouseHover:hover {
    background-color: azure;
    color: #bbb;
  }
</style>
