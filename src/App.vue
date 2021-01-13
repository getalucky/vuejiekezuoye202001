<template>
  <div id="app">
    <router-view />
    <bottab></bottab>
  </div>
</template>

<script>
import bottab from "./components/BotTab.vue";
export default {
  components: {
    bottab,
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.box {
 position: absolute;
  top: 40px;
  bottom: 55px;
  overflow-y: auto;
  width: 100%;
  height: 625px;
  padding-bottom: 60px;
}
</style>
