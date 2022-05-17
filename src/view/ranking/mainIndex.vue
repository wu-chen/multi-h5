<template>
  <div>
    <div class="header">
      <!-- <div class="title_bar">
        <img src="@/assets/svg/back.svg" class="back_img" @click="toIndex">
        Rich list
      </div> -->
      <tabs />
      <div class="top_three">
        <div class="first">
          <div class="first_v profile">
            <img src="@/assets/jpeg/one.jpeg">
          </div>
          <h3>User name</h3>
          <h4><img src="@/assets/webp/star.webp" class="star_img"> 22222 </h4>
        </div>
        <div class="sec_third">
          <div class="second">
            <div class="second_v profile">
              <img src="@/assets/jpeg/two.jpeg">
            </div>
            <h3>User name</h3>
            <h4><img src="@/assets/webp/star.webp" class="star_img">22222 </h4>
          </div>
          <div class="third">
            <div class="third_v profile">
              <img src="@/assets/jpeg/three.jpeg">
            </div>
            <h3>User name</h3>
            <h4><img src="@/assets/webp/star.webp" class="star_img">22222 </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="rank_list">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="list" v-for="(item,index) in list" :key="index">
          <div class="main">
            <div class="order">{{3+index}}</div>
            <div class="icon">
              <img src="@/assets/jpeg/four.jpeg" class="four_img">
            </div>
            <div class="user_name">{{item.nickname}}</div>
          </div>
          <div class="stars"><img src="@/assets/webp/star.webp" class="star_img">{{item.diamond}} </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
// import VConsole from 'vconsole'
import { toIndex } from '@/common/util'
import Tabs from '@/components/tabs.vue';
// new VConsole()
import { List } from 'vant';
export default {
  name: 'Ranking',
  data () {
    return {
      loading: false,
      finished: false,
      list: [],
    }
  },
  mounted () {

  },
  components: {
    Tabs,
    [List.name]: List
  },
  methods: {
    toIndex,
    loadList () {
      this.axios.post('/user/ranking/list', {
        page: '1',
        size: '1',
        type: '1',
      }).then(res => {
        console.log(res)
        this.list = [...this.list, ...res.data]
        this.loading = false;
      })
    },
    onLoad () {
      if (this.list.length >= 60) {
        this.finished = true;
      }
      this.loadList()
    },
  },
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: auto;
  background: linear-gradient(316deg, #ff9927 0%, #f8b223 100%);
  overflow: hidden;
  padding-top: 16px;
  .title_bar {
    width: 100%;
    height: 88px;
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #fafafa;
    line-height: 88px;
    position: relative;
    .back_img {
      position: absolute;
      top: 20px;
      left: 32px;
    }
  }
  .top_three {
    width: 100%;
    padding-top: 42px;
    height: 584px;
    background-image: url("@/assets/webp/top_three.webp");
    background-size: 100% 100%;
    .first {
      width: 212px;
      margin: 0 auto;
      > h3 {
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #fafafa;
        line-height: 40px;
      }
      > h4 {
        font-size: 22px;
        color: #ffde00;
        line-height: 32px;
      }
    }
    .profile {
      width: 100%;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }
    .first_v {
      height: 216px;
      background-image: url("@/assets/webp/first.webp");
      img {
        margin-top: 48px;
        width: 148px;
        height: 148px;
        border-radius: 50%;
      }
    }
    .second_v {
      height: 176px;
      background-image: url("@/assets/webp/sec.webp");
      img {
        margin-top: 38px;
        width: 112px;
        height: 112px;
        border-radius: 50%;
      }
    }
    .third_v {
      height: 176px;
      background-image: url("@/assets/webp/third.webp");
      img {
        margin-top: 38px;
        width: 112px;
        height: 112px;
        border-radius: 50%;
      }
    }
    .sec_third {
      padding: 0 46px;
      display: flex;
      justify-content: space-between;
      margin-top: -180px;
      h3 {
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #fafafa;
        line-height: 40px;
      }
      h4 {
        font-size: 22px;
        color: #ffde00;
        line-height: 32px;
      }
      .second {
        width: 176px;
      }
      .third {
        padding-top: 20px;
        width: 176px;
      }
    }
  }
}
.star_img {
  width: 24px;
  margin-right: 6px;
}
.rank_list {
  width: 100%;
  height: 816px;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  margin-top: -4px;
  padding-top: 20px;
  .list {
    width: 100%;
    box-sizing: border-box;
    height: 116px;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .main {
      display: flex;
      align-items: center;
    }
    .order {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #0e0e0e;
      text-align: left;
      width: 50px;
    }
    .icon {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      margin-right: 24px;
    }
    .four_img {
      width: 88px;
      height: 88px;
      border-radius: 50%;
    }
    .user_name {
      font-size: 32px;
      font-family: PingFangSC;
      color: #333333;
    }
    .stars {
      font-size: 22px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #ffde00;
    }
  }
}
</style>
