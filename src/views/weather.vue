<template>
  <div>
    <!-- 顶部栏 -->
    <toptab title="天气"></toptab>
    <!-- 内容 -->
    <div class="box">
      <mt-search v-model="value" @mouseout.native="searchCity"></mt-search>
      <h3 class="hotText">{{ weaterData.city }}</h3>

      <div v-for="(item, index) in weaterData.future" :key="index">
        <h3 class="hotText">{{ item.date }}</h3>
        <mt-cell title="风向">
          <span>{{item.direct}}</span>
          <img slot="icon" src="../assets/icon_agotahjb768/fengxiang.png" width="24" height="24" />
        </mt-cell>

        <mt-cell title="温度">
          <span>{{item.temperature}}</span>
          <img slot="icon" src="../assets/icon_agotahjb768/thermometer_icon.png" width="24" height="24" />
        </mt-cell>

        <mt-cell title="天气情况">
          <span>{{item.weather}}</span>
          <img slot="icon" src="../assets/icon_agotahjb768/qihoubianhua.png" width="24" height="24" />
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
import toptab from "../components/topTab";

export default {
  data() {
    return {
      weaterData: {
        city: "北海",
        future: [],
      },
      value: "",
      city: "北海",
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      return this.$axios({
        method: "get",
        url: "/tianqi",
        params: {
          city: this.city,
          key: "24e7ac9601c5e443f3b3489f84a81ff7",
        },
      }).then((res) => {
        this.weaterData = res.data.result;
      });
    },
    searchCity() {
      this.city = this.value;
       this.getWeather();
    },
  },
  components: {
    toptab,
  },
};
</script>

<style scoped lang='less'>
/deep/ .mint-searchbar {
  background: whitesmoke;
}
/deep/ .mint-search {
  height: 47px;
}
.hotText {
    display: flex;
    justify-content: space-between;
    padding: 13px 15px 13px 15px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    text-shadow: 1px 1px 1px#5c5d63;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    font-family: "宋体";
    }

</style>

