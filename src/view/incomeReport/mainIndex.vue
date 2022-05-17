<template>
  <div class="main">
    <scroll-bar ref="scroll" />
    <div class="lb_bar">
      <swiper v-if="list.length" ref="mySwiper" class="swiper" :options="swiperOption" @slide-change-transition-start="handleClickSlide">
        <swiper-slide v-for="(item,index) in list" :key="item" :class="{small:index!==aIndex}">
          <div class="list" :class="{p50:index!==aIndex}">
            <div class="item" v-for="item1 in 4" :key="item1">
              <h5>Item{{item1}}:</h5>
              <div class="data_des" v-for="item in 4" :key="item">
                <span class="title">Data {{item}}: </span>
                <span class="des">1234</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="tip_bar">
      This is the earnings report for this week, April 11th to April 5th
    </div>
  </div>
</template>
 
<script>
import scrollBar from '@/components/scroll.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'IncomeReport',
  components: {
    scrollBar,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      aIndex: 0,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      lg: 20,
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 0,
        spaceBetween: 0
      }
    }
  },
  created () {
    this.swiperOption.initialSlide = this.list.length - 1
    this.aIndex = this.list.length - 1
  },
  mounted () {
    // this.swiper.slideTo(this.list.length, 1000, false)
    console.log(this.swiperOption)
  },
  watch: {
    aIndex (index) {
      this.swiper.slideTo(index, 100, false)
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    handleClickSlide () {
      console.log(this.swiper)
      this.aIndex = this.swiper.activeIndex
      this.$refs.scroll.toCheck(this.aIndex)
    },
  },
}
</script>
<style lang="less" scoped>
.main {
  background: #eef2f9;
  padding: 26px 0;
}
.swiper-slide {
  width: 620px;
  height: 1116px;
  background: #ffffff;
  border-radius: 24px;
  overflow: auto;
}
.small {
  transform: scale(0.9);
}
.lb_bar {
  margin-top: 46px;
}

.list {
  width: 100%;
  padding: 0 32px;
  .item {
    padding: 32px 0;
    border-bottom: 1px solid #e9e9e9;
    h5 {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 44px;
      text-align: left;
    }
    .data_des {
      display: flex;
      justify-content: space-between;
      font-size: 28px;
      margin-top: 16px;
      .title {
        font-family: PingFangSC;
        color: #999999;
        line-height: 40px;
      }
      .des {
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 40px;
      }
    }
  }
}

.p50 {
  padding: 0 50px;
}

.tip_bar {
  width: 536px;
  margin: 24px auto;
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #cccccc;
  line-height: 32px;
}
</style>