<template>
  <swiper class="swiper" :options="swiperOption" ref="sonSwiper">
    <swiper-slide v-for="(item,index) in $parent.list" :key="item">
      <div class="small" :class="{list:index===$parent.aIndex}" @click="toCheck(index)">
        Apr/{{item}}
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'swiper-example-centered-slides',
  title: 'Centered slides',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 6,
        centeredSlides: true,
        initialSlide: 0,
      }
    }
  },
  created () {
    this.swiperOption.initialSlide = this.$parent.list.length - 1
  },
  mounted () {
    console.log(this.$parent.aIndex)
  },
  computed: {
    swiper () {
      return this.$refs.sonSwiper.$swiper
    }
  },
  methods: {
    toCheck (index) {
      this.swiper.slideTo(index, 100, false)
      this.$parent.aIndex = index
    }
  },
}
</script>

<style lang="less" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.small {
  width: 96px;
  height: 96px;
  background: #ffffff;
  color: #666666;
  line-height: 96px;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  border-radius: 50%;
}

.list {
  width: 116px;
  height: 116px;
  border: 4px solid #a54af4;
  color: #a54af4;
  line-height: 116px;
}
</style>