
// 删除订单
const delOrder = '/dg/api/order/del'
// 获取订单参数
const getOrderParams = '/dg/api/order/orderInfo'
// 确认收货
const postMakeSureGoods = '/dg/api/order/updateOrderType'
// 获取支付参数
const getWxPayParam = '/dg/api/wxJsapiPay/wxJsapiPay'

// 获取店铺商品列表
const getStoreGoodsList = '/dg/api/dgUserXcx/myShop'
// 获取代购信息
const getHomeUserInfo = '/dg/api/dgUserXcx/shop/title'

// 创建订单
const createOrder = '/dg/api/order/OrderPay'

// 获取商品信息
const getGoodsInfo = '/dg/api/goods/shareInfo'

// 获取订单列表
const getOrderList = '/dg/api/order/queryXcxOrderList'

// 微信登录
const loginWx = '/dg/api/dgUserXcx/login'
export {
  getOrderParams as getOrderParamsApi,
  getWxPayParam as getWxPayParamApi,
  getStoreGoodsList as getStoreGoodsListApi,
  getHomeUserInfo as getHomeUserInfoApi,
  getGoodsInfo as getGoodsInfoApi,
  createOrder as createOrderApi,
  getOrderList as getOrderListApi,
  loginWx as loginWxApi,
  postMakeSureGoods as postMakeSureGoodsApi,
  delOrder as delOrderApi
}
