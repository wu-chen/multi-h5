<template>
  <div>
    <h2 class="title">
      h5页面预览
    </h2>
    <!-- <button @click="dian">
      dian
    </button> -->
    <div class="main">
      <van-cell-group>
        <van-cell @click="toH5(item.link)" :title="item.name" is-link v-for="(item,index) in H5List" :key="index" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  name: 'Index',
  data () {
    return {
      H5List: [
        {
          name: '交易记录',
          link: 'record.html'
        },
        {
          name: '充值',
          link: 'pay.html'
        },
        {
          name: '排行榜',
          link: 'ranking.html'
        },
        {
          name: '投诉',
          link: 'report.html'
        },
        {
          name: '隐私协议',
          link: 'policy.html'
        },
        {
          name: '用户协议',
          link: 'userAgreement.html'
        },
        {
          name: '我的主页',
          link: 'my.html'
        },
        {
          name: '收入报告',
          link: 'incomeReport.html'
        },
        {
          name: 'Vip',
          link: 'vip.html'
        },
        {
          name: '邀请好友',
          link: 'invite.html'
        },
      ]
    }
  },
  methods: {
    toH5 (val) {
      location.href = process.env.BASE_URL + val
    },
    dian () {
      let params = {} //需要传给客户端的参数
      this.$bridge.callhandler("init", params, (data) => {
        alert(data)
        // 处理返回数据
      })
    }
  },
}
</script>

<style lang="less" scoped>
.title {
  padding: 36px;
}
.main {
  padding: 36px;
}
</style>
