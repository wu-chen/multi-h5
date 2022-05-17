<template>
  <div>
    <div class="header">
      <!-- <div class="title_bar">
        <img src="@/assets/svg/back.svg" class="back_img" @click="toIndex">
        My diamond
      </div> -->
      <div class="diamond_bar">
        <img src="@/assets/webp/diamond.webp" class="diamond_img">
      </div>
      <h2>9999</h2>
      <h3>Diamond</h3>
    </div>
    <div class="pay_main">
      <div class="describe">
        Select the recharge amount：
      </div>
      <div class="cost_list">
        <div class="list" v-for="(item,index) in payList" :key="index">
          <div class="first_re" v-if="item.isFirst">
            <span>
              First Recharge
            </span>
          </div>
          <img src="@/assets/webp/diamond_1.webp" class="img">
          <h3>
            100 <span class="vip_tips" v-if="item.isFirst">+3DAYS VIP</span>
          </h3>
          <div class="pay_btn" @click="buy">
            $9.9
          </div>
        </div>
      </div>
      <div class="pay_tips">
        Have a recharge problem?
        <span>
          Loco Service
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import VConsole from 'vconsole'
// new VConsole()
import { toIndex } from '@/common/util'
export default {
  name: 'Pay',
  data () {
    return {
      payList: [
        { isFirst: true }, { isFirst: false },
        { isFirst: true }, { isFirst: false }
      ]
    }
  },
  methods: {
    toIndex,
    buy () {
      // this.$bridge.callhandler("back", null, () => { })
    }
  },
}
</script>

<style lang="less">
.header {
  padding-top: 16px;
  width: 100%;
  height: 400px;
  background-image: url("@/assets/webp/diamond_bg.webp");
  background-size: 100% 100%;
  overflow: hidden;
  .title_bar {
    width: 100%;
    height: 88px;
    margin-top: 48px;
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
  .diamond_bar {
    width: 72px;
    height: 72px;
    background: #f6deff;
    margin: 7px auto 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .diamond_img {
      width: 66px;
    }
  }
  > h2 {
    font-size: 48px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    margin-top: 20px;
  }
  > h3 {
    font-size: 22px;
    font-family: PingFangSC;
    color: #ffffff;
    line-height: 16px;
    font-weight: normal;
    margin-top: 20px;
  }
}
.pay_main {
  width: 100%;
  background: #ffffff linear-gradient(135deg, #fcf8ff 0%, #f8eeff 100%);
  border-radius: 24px 24px 0px 0px;
  margin-top: -20px;
  padding: 0 32px;
  .describe {
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    line-height: 34px;
    text-align: left;
    padding: 24px 0;
  }
  .cost_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list {
      width: 332px;
      height: 400px;
      box-shadow: 0px 2px 16px 0px #ecd3ff;
      border-radius: 24px;
      border: 2px solid #ffffff;
      margin-bottom: 32px;
      position: relative;
      .first_re {
        width: 194px;
        height: 63px;
        background-image: url("@/assets/webp/first_re.webp");
        background-size: 100% 100%;
        position: absolute;
        left: -14px;
        top: 16px;
        > span {
          font-size: 28px;
          display: inline-block;
          transform: scale(0.8);
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 32px;
          text-shadow: 0px 2px 2px rgba(155, 96, 31, 0.27);
        }
      }
      .img {
        width: 176px;
        display: block;
        margin: 56px auto 0;
      }
      > h3 {
        font-size: 36px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        .vip_tips {
          font-size: 32px;
          color: #ff8500;
        }
      }
      .pay_btn {
        width: 284px;
        height: 88px;
        background: linear-gradient(312deg, #a54af4 0%, #c84af4 100%);
        box-shadow: 0px 2px 16px 0px #ecd3ff;
        border-radius: 44px;
        font-size: 40px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        margin: 14px auto 0;
        line-height: 88px;
        text-shadow: 0px 2px 16px #ecd3ff;
      }
    }
  }
}

.pay_tips {
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #999999;
  line-height: 32px;
  padding-bottom: 32px;
  > span {
    font-size: 22px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #a54af4;
    line-height: 32px;
  }
}
</style>
