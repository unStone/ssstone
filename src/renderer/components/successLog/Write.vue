<template>
  <textarea
    contextmenu="supermenu"
    class="txtEditor"
    v-bind:style="{textAlign, fontSize}"
    placeholder="请输入内容"
  />
</template>

<script>
  const { remote } = require('electron');
  const { Menu, MenuItem } = remote;
  const menu = new Menu();
  const configDir = remote.app.getPath('userData');

  menu.append(
    new MenuItem({
      label: 'MenuItem1',
      click() {
        console.log('item 1 clicked');
      },
    }),
  );
  // menu.append(
  //   new MenuItem({ type: 'separator' }),
  // );
  menu.append(
    new MenuItem({
      label: 'MenuItem2',
      type: 'checkbox',
      checked: true,
      click(e) {
        console.log('item 2 clicked', e);
      },
    }),
  );
  
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
  }, false);

  console.log('configDir', configDir);
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
</style>
