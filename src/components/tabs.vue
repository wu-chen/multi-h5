<template>
  <div class="tabs_main">
    <div class="left" :class="{active:isLeft}" @click="tabSelect(true)">
      Daily
    </div>
    <div class="right" :class="{active:!isLeft}" @click="tabSelect(false)">
      Weekly
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLeft: true
    }
  },
  methods: {
    tabSelect (val) {
      if (this.isLeft !== val) {
        this.isLeft = val
      }
    }
  },
}
</script>

<style lang="less" scoped>
.tabs_main {
  width: 376px;
  height: 68px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 34px;
  margin: 0 auto;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fafafa;
  .left {
    padding: 0 40px;
    line-height: 60px;
  }
  .right {
    padding: 0 50px;
    line-height: 60px;
  }
  .active {
    background: #f89423;
    border-radius: 39px;
  }
}
</style>