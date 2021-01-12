<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="1" @click.native="gotopage('news')">
      <img slot="icon" src="../assets/icon_agotahjb768/xinwen.png" />
      新闻
    </mt-tab-item>
    <mt-tab-item id="2" @click.native="gotopage('oilPrice')">
      <img slot="icon" src="../assets/icon_agotahjb768/youwei.png" />
      油价
    </mt-tab-item>
    <mt-tab-item id="3" @click.native="gotopage('weather')">
      <img slot="icon" src="../assets/icon_agotahjb768/tianqi.png" />
      天气预报
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  methods:{
    gotopage(url){
      if(this.$route.name != url)
      this.$router.push('/'+url);
    }
  }
};
</script>

<style>
</style>