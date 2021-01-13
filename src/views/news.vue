<template>
  <div>
    <!-- 底部导航栏 -->
    <toptab title="新闻"></toptab>
    <div class="box">
      <!-- 轮播图开始 -->
      <h3 class="hotText">今日热点</h3>
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../assets/img/news2.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/news1.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/new3.jpg" alt="" />
        </mt-swipe-item>
      </mt-swipe>
      <!-- 轮播图结束 -->
      <!-- 新闻栏 -->
      <h3 class="hotText">
        <span>今日新闻</span>
        <span class="more" @click="handleMore">more>></span>
      </h3>
      <div class="news">
        <div
          class="newsItem"
          v-for="(item, index) in newsData"
          :key="index"
          @click="handleNews(item.url)"
        >
          <div class="titPot">
            <h4 class="newsTitle">{{ item.title }}</h4>
            <img :src="item.thumbnail_pic_s" alt="" />
          </div>
          <p class="newsText">
            <span>{{ item.author_name }}</span>
            <span class="time">{{ item.date }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toptab from "../components/topTab";
import { MessageBox } from "mint-ui";
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      newsData: [],
    };
  },
  mounted() {
    this.getNewsData();
  },
  methods: {
    // 获取新闻数据
    getNewsData() {
      this.$axios({
        method: "get",
        url: "/xinwen?",
        params: {
          key: "a90b1575956890a25d3a8603d754d059",
        },
      }).then((res) => {
        this.newsData = res.data.result.data;
        // console.log(this.newsData);
      });
    },
    // 新闻跳转
    handleNews(url) {
      MessageBox.confirm("将会离开此页面，是否确定？").then((action) => {
        window.location.href = url;
      });
    },
    // more提示
    handleMore() {
      Toast('此功能未完善');
    },
  },
  components: {
    toptab,
  },
};
</script>

<style scoped lang="less">
/deep/ .box {
  // position: absolute;
  // top: 40px;
  // bottom: 55px;
  // overflow-y: auto;
  // width: 100%;
  // height: 640px;
  .hotText {
    display: flex;
    justify-content: space-between;
    padding: 13px 15px 13px 15px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    text-shadow: 1px 1px 1px#193BF4;
    border-bottom: 1px solid #ccc;
    font-family: "宋体";
    .more {
      color: #ccc;
      display: inline-block;
      padding-top: 5px;
      text-shadow: none;
      font-size: 14px;
    }
  }
  .mint-swipe {
    height: 190px;
  }
  img {
    width: 100%;
    overflow: hidden;
  }
  .titPot {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    img {
      width: 30%;
      margin-right: 5px;
      margin: 0 0 0 10px;
    }
  }
  .news {
    padding: 0 8px;
  }

  .newsItem {
    padding: 16px 5px;
    border-bottom: 1px solid #ccc;
    .newsTitle {
      margin-bottom: 12px;
      font-weight: 400;
      font-size: 17px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .newsText {
      display: flex;
      justify-content: space-between;
      span {
        &:first-child {
          width: 70%;
        }
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .time {
        color: #cecdcf;
      }
    }
  }
}
</style>>
