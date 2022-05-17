<template>
  <div class="main">
    <div class="header">
      <img src="@/assets/invite/tips.svg">
      <span>
        Congrats! a******b get a friend commission
      </span>
      <h6>
        $99.99
      </h6>
    </div>
    <div class="box1">
      <div class="event">
        Event Rules
      </div>
    </div>
    <div class="box2">
      <img src="@/assets/invite/my_i_c.webp">
      <div class="code_bar">
        88ZQ6Q
      </div>
      <div class="code_tip">
        Click to copy the invitation code
      </div>
      <div class="invite_btn">
        Invite Friends
      </div>
    </div>
    <div class="box3">
      <div class="title">
        My Invite
      </div>
      <div class="rank_bar">
        <div class="left text">
          <div class="num">$999999.99</div>
          <div class="des">Total revenue</div>
        </div>
        <div class="line"></div>
        <div class="right text">
          <div class="num">$999999.99</div>
          <div class="des">Total revenue</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invite'
}
</script>

<style lang="less" scoped>
@-webkit-keyframes flash {
  /*只用修改这里就可以实现不同动画。例如大小闪烁transform: scale(.9);*/
  0%,
  100%,
  50% {
    opacity: 1;
    transform: scale(1);
  }

  25%,
  75% {
    // opacity: 0.4;
    transform: scale(0.95);
  }
}

@keyframes flash {
  0%,
  100%,
  50% {
    // opacity: 1;
    transform: scale(1);
  }

  25%,
  75% {
    // opacity: 0.4;
    transform: scale(0.95);
  }
}
.main {
  background: #ff5b00;
}
.header {
  height: 64px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding: 0 32px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  img {
    width: 28px;
  }
  span {
    font-size: 24px;
    font-family: PingFangSC;
    color: #ffffff;
    margin-left: 16px;
  }
  h6 {
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffde00;
    margin-left: 10px;
  }
}

.box1 {
  width: 100%;
  height: 418px;
  background-image: url("@/assets/invite/riee.webp");
  background-size: 100% 100%;
  position: relative;
  .event {
    width: 212px;
    height: 100px;
    background-image: url("@/assets/invite/event_r.webp");
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    bottom: 46px;
    font-size: 28px;
    font-family: PingFangSC;
    color: #ffffff;
    line-height: 100px;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
    text-indent: 36px;
  }
}

.box2 {
  margin: 20px auto 0;
  width: 686px;
  height: 360px;
  background: #ffffff;
  box-shadow: 0px 4px 16px 0px rgba(255, 57, 57, 0.5),
    inset 0px 0px 8px 2px rgba(182, 78, 9, 0.5);
  border-radius: 24px;
  border: 4px solid #ffd733;
  > img {
    width: 424px;
    height: 78px;
    display: block;
    margin: -14px auto 0;
  }
  .code_bar {
    margin: 28px auto 0;
    width: 500px;
    height: 88px;
    background: #fff2e1;
    border-radius: 14px;
    font-size: 56px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #b15900;
    line-height: 88px;
    letter-spacing: 12px;
  }
  .code_tip {
    margin: 8px auto 0;
    font-size: 22px;
    font-family: PingFangSC;
    color: #666666;
    line-height: 32px;
  }
  .invite_btn {
    margin: 0 auto;
    width: 666px;
    height: 134px;
    background-image: url("@/assets/invite/invite_f.webp");
    background-size: 100% 100%;
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #b15900;
    line-height: 134px;
    animation: flash 1s infinite;
    -webkit-animation: flash 1s infinite;
  }
}
.box3 {
  width: 686px;
  height: 1098px;
  background: #ffffff;
  box-shadow: 0px 4px 16px 0px rgba(255, 57, 57, 0.5);
  border-radius: 24px;
  border: 4px solid #ffd733;
  margin: 78px auto 0;
  .title {
    background-image: url("@/assets/invite/my_i.webp");
    background-size: 100% 100%;
    width: 296px;
    height: 80px;
    display: block;
    margin: -20px auto 0;
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #b15900;
    line-height: 80px;
    text-shadow: 0px 0px 4px #ffffff;
  }
  .rank_bar {
    margin: 20px auto 0;
    width: 622px;
    height: 162px;
    background: #fff2e1;
    border-radius: 14px;
    display: flex;
    align-items: center;
    .line {
      width: 2px;
      height: 98px;
      background: #ffe2c6;
      border-radius: 2px;
    }
    .text {
      flex: 1;
      .num {
        font-size: 44px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #b15900;
        line-height: 60px;
      }
      .des {
        font-size: 24px;
        font-family: PingFangSC;
        color: #b15900;
        line-height: 34px;
      }
    }
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
}
</style>
