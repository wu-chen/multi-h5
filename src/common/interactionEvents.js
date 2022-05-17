import { appCommunicate } from './bridge.js';

const interactionEvents = {
  // token失效
  tokenFailure: params => {
    appCommunicate('tokenFailure', params)
  },
  // 会员支付
  memberPay: params => {
    appCommunicate('memberPay', params)
  },
  // 会员协议
  memberAgreement: params => {
    appCommunicate('memberAgreement', params)
  },
  // 刷新页面
  reload: () => {
    window.reload = function() {
      location.reload()
    }
  },
  // 货源商详页联系商家
  contactMerchant: params => {
    appCommunicate('contactMerchant', params)
  },
  // 实名认证认证成功
  authSuccess: params => {
    appCommunicate('authSuccess', params)
  },
  // 失效商品页面下载推荐商品
  downRecommendGoodsResourceImg: params => {
    appCommunicate('downRecommendGoodsResourceImg', params)
  },
  // 失效商品页面分享推荐商品
  shareRecommendGoodsResource: params => {
    appCommunicate('shareRecommendGoodsResource', params)
  },
  // 失效商品页面原生跳转
  jumpAppGoods: params => {
    appCommunicate('jumpAppGoods', params)
  },
  // 失效商品页抢购
  goodsSnapUp: params => {
    appCommunicate('goodsSnapUp', params)
  },
  // 货源商详页是否关注过店铺
  isFocusStore: params => {
    appCommunicate('isFocusStore', params)
  },
  // 货源板块商详页分享
  shareGoodsResource: params => {
    // window.shareGoodsResource = function(callback) {
    appCommunicate('shareGoodsResource', params)
    // }
  },
  // 举报成功
  successReport: params => {
    appCommunicate('successReport', params)
  },
  // 跳转至货源板块
  jumpGoodsResource: params => {
    appCommunicate('jumpGoodsResource', params)
  },
  // 跳转至立即认证页面
  jumpPersonalAuthentication: params => {
    appCommunicate('jumpPersonalAuthentication', params)
  },
  // 跳转软件介绍H5页面
  softwareIntroduced: params => {
    appCommunicate('softwareIntroduced', params)
  },
  // 跳转用户协议H5页面
  userAgreement: params => {
    appCommunicate('userAgreement', params)
  },
  // 跳转隐私协议H5页面
  privacyAgreement: params => {
    appCommunicate('privacyAgreement', params)
  },
  // 调用原生拨号
  contactPhone: params => {
    appCommunicate('contactPhone', params)
  },
  // 保存长图至手机相册
  saveShareLinkNote: params => {
    appCommunicate('saveShareLinkNote', params)
  },
  // 分享长图至微信朋友圈
  shareWxCircleFriends: params => {
    appCommunicate('shareWxCircleFriends', params)
  },
  // 分享长图至微信好友
  shareWx: params => {
    appCommunicate('shareWx', params)
  },
  // 跳转至发布该笔记的代购店铺
  jumpStore: params => {
    appCommunicate('jumpStore', params)
  },
  // 跳转至发布该笔记的代购聊天界面
  jumpOnlineChat: params => {
    appCommunicate('jumpOnlineChat', params)
  },
  // 跳转至确认下单页面
  confirmOrderPurchasingAgency: params => {
    appCommunicate('confirmOrderPurchasingAgency', params)
  },
  // 认证成功通知原生
  authenticationSuccess: params => {
    appCommunicate('authenticationSuccess', params)
  },
  // 保存二维码图片至手机相册
  savePrivateConsultantQrCode: params => {
    appCommunicate('savePrivateConsultantQrCode', params)
  },
  // 货源商详页下载图片
  downGoodsResourceImg: params => {
    appCommunicate('downGoodsResourceImg', params)
  },
  // 货源商详页立即购买
  goingBuy: params => {
    appCommunicate('goingBuy', params)
  },
  // 弹出预览图片
  previewImage: params => {
    appCommunicate('previewImage', params)
  },
  // 笔记详情分享
  shareLink: params => {
    appCommunicate('shareLink', params)
  },
  // 笔记详情跳转到平台担保
  jumpGuarantees: params => {
    appCommunicate('jumpGuarantees', params)
  },
  // 使用指南跳转到
  jumpUseGuideDetail: params => {
    appCommunicate('jumpUseGuideDetail', params)
  },
  // 加入购物车
  addCart: params => {
    appCommunicate('addCart', params)
  },
  // 是否收藏
  isCollect: params => {
    appCommunicate('isCollect', params)
  },
  // 刷新货源商详页
  refreshGoods: params => {
    appCommunicate('refreshGoods', params)
  }
}

export default interactionEvents
