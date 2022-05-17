<template>
  <div>
    <!-- <div class="title_bar">
      <img src="@/assets/svg/record_back.svg" class="back_img" @click="toIndex">
      Transaction Record
    </div> -->
    <div class="tabs_main">
      <div class="left" :class="{active:isLeft}" @click="tabSelect(true)">
        Points record
      </div>
      <div class="right" :class="{active:!isLeft}" @click="tabSelect(false)">
        Diamond record
      </div>
    </div>
    <div class="record_list" v-for="(val,index) in recordList" :key="index">
      <div class="time_bar">
        Today
      </div>
      <div class="record" v-for="item in val" :key="item">
        <div class="des_bar">
          <span class="des">[Chat] Restore the message</span>
          <span class="count" v-if="isLeft">+20</span>
          <div v-else>
            <img src="@/assets/webp/diamond_record.webp" class="dia_img">
            <span class="dia_count">
              -20
            </span>
          </div>
        </div>
        <div class="date_bar">
          <span>
            January/03/2022 12:12
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toIndex } from '@/common/util'
export default {
  name: 'Record',
  data () {
    return {
      isLeft: true,
      recordList: [1, 2, 3]
    }
  },
  methods: {
    toIndex,
    tabSelect (val) {
      if (this.isLeft !== val) {
        this.isLeft = val
      }
      if (val) {
        this.recordList = [1, 2, 3]
      } else {
        this.recordList = [3, 2, 1]
      }
    }
  },
}
</script>

<style lang="less" scoped>
.title_bar {
  width: 100%;
  height: 88px;
  font-size: 32px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #0e0e0e;
  line-height: 88px;
  position: relative;
  .back_img {
    position: absolute;
    top: 20px;
    left: 32px;
  }
}
.tabs_main {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 34px;
  margin: 0 auto;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 686px;
  height: 72px;
  background: #eef2f9;
  border-radius: 34px;
  font-size: 30px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 400;
  color: #666666;
  margin-top: 16px;
  margin-bottom: 16px;
  .left {
    line-height: 60px;
    width: 50%;
  }
  .right {
    width: 50%;
    line-height: 60px;
  }
  .active {
    background: #ffffff;
    box-shadow: 0px 0px 4px 0px rgba(53, 69, 96, 0.17);
    border-radius: 32px;
    font-weight: 500;
    color: #0e0e0e;
  }
}
.record_list {
  .time_bar {
    width: 100%;
    height: 64px;
    background: #eef2f9;
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    line-height: 64px;
    text-align: left;
    padding-left: 32px;
  }
  .record {
    width: 100%;
    height: 132px;
    padding-left: 28px;
    padding-right: 32px;
  }
  .des_bar {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    .des {
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #0e0e0e;
      line-height: 44px;
    }
    .count {
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #ff8500;
      line-height: 44px;
    }
    .dia_img {
      width: 32px;
      vertical-align: text-top;
    }
    .dia_count {
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #a54af4;
      line-height: 44px;
    }
  }
  .date_bar {
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    line-height: 32px;
    text-align: left;
    margin-top: 8px;
    position: relative;
    font-size: 22px;
    // > span {
    //   font-size: 44px;
    //   transform: scale(0.5);
    //   display: inline-block;
    // }
  }
}
</style>
