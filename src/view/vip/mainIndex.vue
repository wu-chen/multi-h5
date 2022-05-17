<template>
  <div>
    <div class="headerBar">
      <div class="back_bar">
        <img src="@/assets/svg/back.svg" class="back_img" @click="toIndex">
        <div class="charge">
          <img src="@/assets/webp/vip_dia.webp">
          <span>999</span>
          <img src="@/assets/webp/vip_right.webp">
        </div>
      </div>
      <div class="swiper_bar">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
          <van-swipe-item class="lb_list">
            <!-- <img src="@/assets/webp/viplb1.webp"> -->
            <svgaPlayer ref="lb1" :src="lb1" className="svg_p"></svgaPlayer>
            <div class="text">
              Get 5000 diamonds for free
            </div>
          </van-swipe-item>
          <van-swipe-item class="lb_list">
            <!-- <img src="@/assets/webp/viplb2.webp"> -->
            <svgaPlayer ref="lb2" :src="lb2" className="svg_p"></svgaPlayer>
            <div class="text">
              Can view all encrypted videos
            </div>
          </van-swipe-item>
          <van-swipe-item class="lb_list">
            <!-- <img src="@/assets/webp/viplb3.webp"> -->
            <svgaPlayer ref="lb3" :src="lb3" className="svg_p"></svgaPlayer>
            <div class="text">
              After opening, you can see the beauties in all groups
            </div>
          </van-swipe-item>
          <van-swipe-item class="lb_list">
            <img src="@/assets/webp/viplb4.webp">
            <!-- <svgaPlayer ref="lb4" :src="lb4" className="svg_p"></svgaPlayer> -->
            <div class="text">
              Get an avatar frame to show your distinguished status
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="buyBar">
      <div class="tips">
        Become VIP:
        <div class="vipList">
          <div class="vip_bar_hot">
            <div class="time_bar">
              <div class="count">
                <span class="count_d">$</span>9.99<span class="count_m">/mo</span>
              </div>
              <h3>
                1 Months
              </h3>
            </div>
            <div class="price">
              ¥9.99
            </div>
            <div class="tip">
              <img src="@/assets/vip/vip_hot.webp" class="hot_img">
              HOT
            </div>
          </div>
          <div class="vip_bar">
            <div class="time_bar">
              <div class="count">
                <span class="count_d">$</span>9.99<span class="count_m">/mo</span>
              </div>
              <h3>
                1 Months
              </h3>
            </div>
            <div class="price">
              ¥22.5
            </div>
            <div class="tip">
              Save 25%
            </div>
          </div>
        </div>
        <div class="btn_bar">
          <div class="btn_text">
            Buy now
          </div>
          <div class="dia_text">
            <img src="@/assets/webp/my_d_small.webp" class="dia_img">
            Get 2000 diamonds
          </div>
        </div>
        <div class="conclusion_title">
          Auto renewal cancel anytime
        </div>
        <div class="conclusion_text">
          If you choose to purchase a subscription, payment will be charged to your iTunes account. For auto-renewal, your account will be charged within 24-hours prior to the end of the current period. Auto-renewal may be canceled at any time by going to your settings in the iTunes store after purchase. For more information, please read our
          terms of Service and privacy policy
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lb1 from '@/assets/svga/vip_lb1.svga'
import lb2 from '@/assets/svga/vip_lb2.svga'
import lb3 from '@/assets/svga/vip_lb3.svga'
import lb4 from '@/assets/svga/vip_lb4.svga'
import { Swipe, SwipeItem } from 'vant';
import svgaPlayer from '@/components/svgaPlayer.vue';
export default {
  name: "Vip",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    svgaPlayer
  },
  data () {
    return {
      lb1,
      lb2,
      lb3,
      lb4,
      list: [
        {
          name: 'lb1'
        },
        {
          name: 'lb2'
        },
        {
          name: 'lb3'
        },
        {
          name: 'lb4'
        },
      ]
    }
  },
  methods: {
    toIndex () { },
    onChange (index) {
      console.log(index)
      if (index !== 3) {
        setTimeout(() => {
          this.$refs[this.list[index].name].startPlay()
        }, 100);                                                                                                                 
      }
    }
  },
}
</script>

<style lang="less" scoped>
.headerBar {
  background: url("@/assets/webp/vip_bg.webp");
  background-size: 100% 100%;
  height: 894px;
  padding-top: 88px;
  .back_bar {
    height: 88px;
    padding: 20px 32px;
    justify-content: space-between;
    display: flex;
    .back_img {
      width: 48px;
      height: 48px;
    }
    .charge {
      width: 160px;
      height: 48px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 24px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      padding: 6px 16px;
      display: flex;
      justify-content: space-between;
      img {
        width: 36px;
        height: 36px;
      }
      span {
        flex: 1;
        font-size: 24px;
        font-family: PingFangSC;
        color: #ffffff;
        line-height: 32px;
      }
    }
  }
  .swiper_bar {
    margin-top: 46px;
  }
  .lb_list {
    img {
      height: 438px;
    }
    .text {
      font-size: 24px;
      font-family: PingFangSC;
      color: #fafafa;
      height: 100px;
    }
  }
}

.buyBar {
  height: 802px;
  background: linear-gradient(135deg, #faf2ff 0%, #f4e5ff 100%);
  box-shadow: 0px 4px 24px 6px rgba(37, 19, 70, 0.3),
    inset 0px 4px 0px 0px #ffffff;
  border-radius: 24px 24px 0px 0px;
  margin-top: -72px;
  padding: 24px 32px;
  .tips {
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0e0e0e;
    line-height: 34px;
    text-align: left;
  }
  .vipList {
    margin-top: 50px;
    display: flex;
    .vip_bar_hot {
      margin-right: 24px;
      width: 212px;
      height: 260px;
      border-radius: 24px;
      background: linear-gradient(135deg, #ff9600 0%, #ff4100 100%);
      padding: 4px;
      position: relative;
      .time_bar {
        border-radius: 20px 20px 0 0;
        background-color: #fff;
        height: 180px;
        padding-top: 48px;
        h3 {
          font-size: 24px;
          font-family: PingFangSC;
          color: #666666;
          line-height: 34px;
          margin-top: 8px;
          text-align: center;
        }
      }
      .count {
        font-size: 44px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #0e0e0e;
        text-align: center;
        line-height: 60px;
        .count_d {
          font-size: 28px;
          line-height: 40px;
        }
        .count_m {
          font-size: 24px;
          line-height: 34px;
        }
      }
      .price {
        text-align: center;
        font-size: 36px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 50px;
        margin-top: 12px;
      }
      .tip {
        width: 128px;
        height: 48px;
        background: linear-gradient(315deg, #ff4000 0%, #ff9700 100%);
        // box-shadow: 0px 4px 8px 0px rgba(213, 114, 51, 0.5),
        // inset -2px -2px 4px 0px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        border: 3px solid rgba(255, 255, 255, 0.5);
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        justify-content: center;
        text-align: center;
        text-shadow: 0px 4px 8px rgba(213, 114, 51, 0.5);
        display: flex;
        align-items: center;
        .hot_img {
          width: 32px;
          height: 32px;
        }
      }
    }
    .vip_bar {
      opacity: 0.8;
      margin-right: 24px;
      width: 212px;
      height: 252px;
      background: #ffffff;
      box-shadow: inset 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
      border-radius: 24px;
      border: 4px solid #e1c8ed;
      position: relative;
      .time_bar {
        border-radius: 20px 20px 0 0;
        background-color: #fff;
        height: 180px;
        padding-top: 48px;
        h3 {
          font-size: 24px;
          font-family: PingFangSC;
          color: #cccccc;
          line-height: 34px;
          margin-top: 8px;
          text-align: center;
        }
      }
      .count {
        font-size: 44px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #999999;
        text-align: center;
        line-height: 60px;
        .count_d {
          font-size: 28px;
          line-height: 40px;
        }
        .count_m {
          font-size: 24px;
          line-height: 34px;
        }
      }
      .price {
        text-align: center;
        margin-top: 12px;
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #999999;
        line-height: 44px;
      }
      .tip {
        width: 168px;
        height: 48px;
        background: linear-gradient(312deg, #a54af4 0%, #c84af4 100%);
        border-radius: 10px;
        border: 3px solid rgba(255, 255, 255, 0.5);
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        justify-content: center;
        text-align: center;
        display: flex;
        align-items: center;
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
  .btn_bar {
    margin: 32px auto;
    background-image: url("@/assets/vip/vip_btn_bg.webp");
    width: 690px;
    height: 120px;
    background-size: 100% 100%;
    overflow: hidden;
    .btn_text {
      text-align: center;
      font-size: 40px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      margin-top: 12px;
      color: #442506;
      line-height: 56px;
      text-shadow: 0px 2px 4px rgba(190, 146, 41, 0.42);
    }
    .dia_text {
      .dia_img {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
      text-align: center;
      font-size: 22px;
      font-family: PingFangSC;
      color: #442506;
      line-height: 32px;
      margin-top: 2px;
    }
  }
  .conclusion_title {
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: rgba(0, 0, 0, 0.4);
    line-height: 34px;
    text-align: center;
  }
  .conclusion_text {
    width: 660px;
    height: 90px;
    text-align: center;
    overflow: auto;
    margin-top: 8px;
    margin: 0 auto;
    font-size: 24px;
    font-family: PingFangSC;
    color: rgba(0, 0, 0, 0.2);
    line-height: 28px;
    transform: scale(0.83);
  }
}

/deep/ .svg_p {
  width: 100%;
  height: 438px;
}
</style>
