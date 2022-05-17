<template>
  <div>
    <div class="header">
      <div class="top_main">
        <div class="info">
          <div class="photo">
            <img src="@/assets/jpeg/one.jpeg">
          </div>
          <div class="data">
            <h3 class="nick">Claire🍑🍒</h3>
            <div class="country">
              China
              <div class="sex_bg">
                <img src="@/assets/svg/girl.svg">
                24
              </div>
            </div>
            <div class="id_bar">ID：12345678</div>
          </div>
          <div class="edit">
            <img src="@/assets/svg/my_edit.svg">
          </div>
        </div>
        <div class="vip_bar">
          <div class="text_bar">
            <h3><img src="@/assets/svg/hg.svg">The honourable VIP</h3>
            <h4>Luxury and noble privllege</h4>
          </div>
          <div class="btn_bar">
            Activate
            <img src="@/assets/svg/right.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="my_dia">
      <div class="diamond">
        <div class="left">
          <img src="@/assets/webp/my_d_big.webp">
          My diamond
        </div>
        <div class="right">
          888
          <img src="@/assets/webp/my_d_small.webp" class="my_d_small">
          <img src="@/assets/webp/my_right.webp" class="my_right">
        </div>
      </div>
    </div>
    <div class="menu_list">
      <div class="list" v-for="(item,index) in menuList" :key="index">
        <div class="left">
          <img :src="require(`@/assets/webp/${item.img}`)">
          {{item.name}}
        </div>
        <div class="right">
          <img src="@/assets/webp/my_right.webp" class="my_right">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  data () {
    return {
      menuList: [
        {
          name: 'My videos',
          img: 'm_v.webp'
        },
        {
          name: 'Face authentication',
          img: 'f_a.webp'
        },
        {
          name: 'Trading record',
          img: 't_r.webp'
        },
        {
          name: 'Customer Service',
          img: 'c_s.webp'
        },
        {
          name: 'Settings',
          img: 'set.webp'
        },
      ]
    }
  },
  methods: {

  },
}
</script>

<style lang="less">
.header {
  background-image: url("@/assets/webp/my_bg.webp");
  height: 450px;
  background-size: 100% 100%;
  padding-top: 184px;
  .top_main {
    // margin-top: 184px;
  }
  .info {
    padding: 0 32px;
    display: flex;
    align-items: center;
    .photo {
      width: 136px;
      height: 136px;
      border-radius: 50%;
      border: 4px solid rgba(187, 132, 255, 0.5);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .data {
      flex: 1;
      text-align: left;
      padding-left: 44px;
      .nick {
        font-size: 36px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #0e0e0e;
      }
      .country {
        font-size: 28px;
        font-family: PingFangSC;
        color: #666666;
        line-height: 40px;
        display: flex;
        margin-top: 16px;
      }
      .sex_bg {
        margin-left: 30px;
        background-image: url("@/assets/webp/sex_bg.webp");
        width: 80px;
        height: 36px;
        background-size: 100% 100%;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #fafafa;
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        align-items: center;
        img {
          width: 26px;
          height: 26px;
        }
      }
      .id_bar {
        font-size: 40px;
        font-family: PingFangSC;
        color: #999999;
        transform: scale(0.5);
        transform-origin: 0;
      }
    }
    .edit {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .vip_bar {
    background-image: url("@/assets/webp/my_vip.webp");
    width: 722px;
    height: 192px;
    background-size: 100% 100%;
    margin: 32px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .text_bar {
      h3 {
        font-size: 38px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #442506;
        line-height: 52px;
        img {
          width: 40px;
          height: 40px;
          vertical-align: middle;
          margin-right: 6px;
        }
      }
      h4 {
        margin-top: 8px;
        font-size: 28px;
        font-family: PingFangSC;
        color: #442506;
        line-height: 40px;
      }
    }
    .btn_bar {
      width: 164px;
      height: 52px;
      background: linear-gradient(135deg, #7e4900 0%, #482300 100%);
      box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.5);
      border-radius: 26px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      display: flex;
      align-items: center;
      padding: 0 16px;
      justify-content: space-between;
      font-size: 28px;
      font-family: PingFangSC;
      color: #e2c277;
    }
  }
}
.my_dia {
  height: 236px;
  border-bottom: 20px solid #eef2f9;
  display: flex;
  align-items: flex-end;
  .diamond {
    width: 100%;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    .left {
      font-size: 34px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #333333;
      img {
        width: 56px;
        height: 56px;
        vertical-align: middle;
        margin-right: 20px;
      }
    }
    .right {
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #a54af4;
      .my_d_small {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-left: 8px;
      }
      .my_right {
        width: 36px;
        height: 36px;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }
}

.menu_list {
  .list {
    width: 100%;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    .left {
      font-size: 34px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #333333;
      img {
        width: 56px;
        height: 56px;
        vertical-align: middle;
        margin-right: 20px;
      }
    }
    .right {
      .my_right {
        width: 36px;
        height: 36px;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }
}
</style>
