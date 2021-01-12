<template>
  <div>
    <!-- 底部导航栏 -->
    <toptab title="新闻"></toptab>
    <div class="box">
      <!-- 轮播图开始 -->
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
      <div class="news">
        <div class="newsItem">
          <h4 class="newsTitle">文章标题文章标题文章标题文章标题</h4>
          <p class="newsText">
            <span
              >文章详情文章详情文章详情文章详情文章详情文章详情文章详情</span
            >
            <span>2012-01-01</span>
          </p>
        </div>
         <div class="newsItem">
          <h4 class="newsTitle">文章标题文章标题文章标题文章标题</h4>
          <p class="newsText">
            <span
              >文章详情文章详情文章详情文章详情文章详情文章详情文章详情</span
            >
            <span>2012-01-01</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toptab from "../components/topTab";
export default {
  mounted(){
    this.$axios({
      method:'get',
      url: '/toutiao/index',
      params:{
        key: 'a90b1575956890a25d3a8603d754d059'
      }
    }).then(res => {
      console.log(res);
    })
  },
  components: {
    toptab
  },
};
</script>

<style scoped lang="less">
.box {
  position: absolute;
  top: 40px;
  bottom: 55px;
  width: 100%;
  height: 190px;
  img {
    width: 100%;
    overflow: hidden;
  }

  .newsItem {
    padding: 23px 8px;
    .newsTitle {
      margin-bottom: 12px;
      font-weight: 400;
      font-size: 17px;
    }
    .newsText {
      display: flex;
      justify-content: space-between;
      span {
        &:first-child{
          width: 70%;
        }
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>>
