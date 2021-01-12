<template>
  <div>
    <!-- 底部栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <img slot="icon" src="../assets/icon_agotahjb768/xinwen.png" />
        新闻
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="../assets/icon_agotahjb768/youwei.png" />
        油价
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="../assets/icon_agotahjb768/tianqi.png" />
        天气预报
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    };
  },
  watch:{
      selected(){
          console.log(this.selected)
      }
  },
  components: {},
};
</script>

<style>
</style>