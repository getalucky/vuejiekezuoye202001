<template>
  <div>
    <!-- 顶部栏 -->
    <toptab title="油价"></toptab>

    <div class="box">
      <h3 class="hotText">地区选择</h3>
      <mt-picker :slots="cityData" @change="onValuesChange"></mt-picker>

      <h3 class="hotText city">{{ cityOli.city }}</h3>
      <mt-cell title="0h">
        <span>{{cityOli._0h}}</span>
        <img slot="icon" src="../assets/icon_agotahjb768/map-oil.png" width="24" height="24" />
      </mt-cell>

      <mt-cell title="98h">
        <span>{{cityOli._98h}}</span>
        <img slot="icon" src="../assets/icon_agotahjb768/map-oil.png" width="24" height="24" />
      </mt-cell>

      <mt-cell title="95h">
        <span>{{cityOli._95h}}</span>
        <img slot="icon" src="../assets/icon_agotahjb768/map-oil.png" width="24" height="24" />
      </mt-cell>

      <mt-cell title="92h">
        <span>{{cityOli._92h}}</span>
        <img slot="icon" src="../assets/icon_agotahjb768/map-oil.png" width="24" height="24" />
      </mt-cell>
    </div>
  </div>
</template>

<script>
import toptab from "../components/topTab";
import { MessageBox } from 'mint-ui';

export default {
  data() {
    return {
      oldData: [
        { city: "北京", _92h: "5.95", _95h: "6.33", _98h: "7.31", _0h: "5.59" },
        { city: "上海", _92h: "5.92", _95h: "6.30", _98h: "7.00", _0h: "5.53" },
        { city: "江苏", _92h: "5.93", _95h: "6.31", _98h: "7.19", _0h: "5.53" },
        { city: "天津", _92h: "5.94", _95h: "6.27", _98h: "7.49", _0h: "5.55" },
        { city: "重庆", _92h: "6.03", _95h: "6.37", _98h: "7.18", _0h: "5.64" },
        { city: "江西", _92h: "5.92", _95h: "6.36", _98h: "7.36", _0h: "5.60" },
        { city: "辽宁", _92h: "5.92", _95h: "6.31", _98h: "6.88", _0h: "5.48" },
        { city: "安徽", _92h: "5.93", _95h: "6.37", _98h: "7.20", _0h: "5.59" },
      ],
      cityOli: {},
    };
  },
  mounted() {
    // this.getOilPrice();
  },
  computed: {
    // 存放城市
    cityData() {
      let arr = this.oldData.map((item) => {
        return item.city;
      });
      return [
        {
          values: arr,
          textAlign: "center",
        },
      ];
    },
    
  },
  methods: {
    // 请求油价数据
    getOilPrice() {
      this.$axios({
        method: "get",
        url: "/youjia?",
        params: {
          key: "1a93acc11c53e44bc5547ee38c11fb28",
        },
      }).then((res) => {
        console.log(res.data.result);
        this.oldData = res.data.result;
      });
    },
    // 监听选择栏
    onValuesChange(picker, values) {
      this.oldData.forEach((item, index) => {
        if (item.city == values) {
          this.cityOli = this.oldData[index];
        }
      });
    },
  },
  components: {
    toptab,
  },
};
</script>

<style scoped lang='less'>

.hotText {
  display: flex;
  justify-content: space-between;
  padding: 13px 15px 13px 15px;
  color: #000;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  text-shadow: 1px 1px 1px #5c5d63;
  border-bottom: 1px solid #ccc;
  font-family: "宋体";
}
.city {
  border-top: 1px solid #000;
}

</style>


