<template>
  <div class="time_profit_warp">
    <div class="time_profit_center">
      <div v-for="(item, index) in iconArray" :key="index" :class="['profit_item', iconArray.length > 4 ? 'item_more_four' : '']">
        <div class="profit_img" @click="toPrpofit(item.target)">
          <!-- <img :src="item.img" alt="" /> -->
        </div>
        <div class="profit_word">横向滚动</div>
      </div>
    </div>
  </div>
</template>
 
<script>



export default {
  data () {
    return {
      iconArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
}
</script>
<style lang="less">
.time_profit_warp {
  padding-bottom: 24px;
  height: 220px;
  overflow: hidden;
  border: 1px solid white;
  .time_profit_center {
    height: 240px;
    display: flex;
    justify-content: flex-start;
    overflow: auto;
  }
  .profit_item {
    display: flex;
    padding-bottom: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-width: 168px;
    border: 1px solid green;
    .profit_img {
      width: 96px;
      height: 96px;
      border: 1px solid red;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .profit_word {
      margin-top: 16px;
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      line-height: 32px;
      white-space: nowrap;
      text-align: center;
    }
  }
  .profit_item:last-child {
    margin-right: 0;
  }
  .item_more_four {
    min-width: 150px;
  }
}
</style>