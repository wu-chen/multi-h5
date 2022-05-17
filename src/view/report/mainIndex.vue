<template>
  <div>
    <!-- <div class="title_bar">
      <img src="@/assets/svg/record_back.svg" class="back_img" @click="toIndex">
      Report This User
    </div> -->
    <div class="problem_bar">
      <div class="tips">
        Choose your problems :
      </div>
      <div class="pro_list">
        <div class="unchecked" v-for="(item,index) in proList" :key="index" :class="{checked:item.id===activeId}" @click="choose(item)">
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="shadow_bar"></div>
    <div class="input_bar">
      <div class="tips">
        Complaints ：
      </div>
      <van-field v-model="message" rows="6" type="textarea" placeholder="Please enter the content~" maxlength="500" show-word-limit />
    </div>

    <div class="submit_btn">
      <van-button size="large" round type="info" color="linear-gradient(312deg, #A54AF4 0%, #C84AF4 100%)" @click="report">Submit</van-button>
    </div>
  </div>
</template>

<script>
// import VConsole from 'vconsole'
// new VConsole()
// import { toIndex } from '@/common/util'
import { typeList } from '@/api'
import { Field, Button, Toast } from 'vant';
export default {
  name: 'Report',
  components: {
    vanField: Field,
    vanButton: Button,
  },
  data () {
    return {
      proList: [],
      message: '',
      activeId: ''
    }
  },
  created () {
    // this.$store.dispatch('setUid')
    // typeList({}).then(res => {
    //   this.proList = res.data
    // })
    this.axios.post('/user/complaint/type_list', {}).then(res => {
      this.proList = res.data
    })
  },
  methods: {
    // toIndex,
    choose (val) {
      this.activeId = val.id
    },
    report () {
      // window.location.href = process.env.BASE_URL + 'pay.html'
      this.$bridge.callhandler("back", null, () => { })
      if (!this.activeId) {
        Toast.fail('请选择举报类型')
        return
      }
      this.axios.post('/user/complaint/send', {
        id: this.activeId,
        content: this.message,
        uid: this.$route.query.uid,
      }).then(res => {
        if (res.code === 200) {
          Toast.success(res.message)
          this.$bridge.callhandler("close", null, () => { })
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
// .title_bar {
//   width: 100%;
//   height: 88px;
//   font-size: 32px;
//   font-family: PingFangSC-Regular, PingFang SC;
//   font-weight: 400;
//   color: #0e0e0e;
//   line-height: 88px;
//   position: relative;
//   .back_img {
//     position: absolute;
//     top: 20px;
//     left: 32px;
//   }
// }

.problem_bar {
  padding: 24px 32px 8px;
  .tips {
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    line-height: 40px;
    text-align: left;
  }
  .pro_list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    .unchecked {
      height: 72px;
      background: #f5f5f5;
      border-radius: 36px;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #0e0e0e;
      padding: 14px 24px;
      margin-right: 24px;
      margin-bottom: 24px;
    }
    .checked {
      background: #a54af4;
      color: #ffffff;
    }
  }
}

.shadow_bar {
  width: 100%;
  height: 20px;
  background: #eef2f9;
}

.input_bar {
  width: 100%;
  padding: 32px;
  .tips {
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    line-height: 40px;
    text-align: left;
  }
}

.van-field {
  background: #f5f5f5;
  margin-top: 16px;
}

.submit_btn {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 100px;
  width: 670px;
}
</style>
