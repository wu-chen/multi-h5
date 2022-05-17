const Util = {
  /**
   * 判断是否为空
   * @param {Object} value
   */
  isBlank: function (value) {
    return value === undefined || value === null || value === '';
  },
  // 随机生成12位订单号
  randomOrder: function () {
    const times = new Date().getTime()
    const lastNum = new Date()
      .getTime()
      .toString()
      .slice(-6)
    const year = new Date(times)
      .getFullYear()
      .toString()
      .slice(-2)
    let month = new Date(times).getMonth() + 1
    month = month.toString().length == 1 ? '0' + month : 'month';
    const date = new Date(times).getDate()
    // console.log(lastNum);
    // console.log(new Date(times).getFullYear());
    return year + month + date + lastNum
  },
  // 过滤说明
  filterDesc: function (desc) {
    if (!desc) {
      return '';
    }
    var regx = /<[^>]+>/g
    var escape = /&[^;]+;/g
    if (!regx.test(desc)) {
      return desc
    } else {
      console.log(escape.test(desc))
      if (escape.test(desc)) {
        // console.log(1)
        return desc.replace(regx, '').replace(escape, ' ')
      }
      return desc.replace(regx, '')
    }
  },
  // 时间戳转换
  formatTimeDay: (date, joinStr = '-') => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return [year, month, day].map(formatNumber).join(joinStr)
  },
  interTime: function (time) {
    if (!time || time.length < 19) {
      return {
        ymd: '',
        hms: ''
      }
    }
    return {
      ymd: time.slice(0, 10),
      hms: time.slice(11, 19)
    }
  },
  formatTime: (date, joinStr = '-') => {
    if (!date) return ''
    var date = new Date(date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return (
      [year, month, day].map(formatNumber).join(joinStr) +
      ' ' +
      [hour, minute, second].map(formatNumber).join(':')
    )
  },
  moneyFormat: function (money) {
    if (money) {
      return parseFloat(money).toFixed(2);
    } else {
      return ''
    }
  },
  checkIdCard: function (idcard) {
    const regIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!regIdCard.test(idcard)) {
      return false;
    } else {
      return true;
    }
  },
  // 店铺商品名称省略号
  isEllipsis: function (value) {
    if (!value) return ''
    if (value.length > 11) {
      value = value.slice(0, 11)
      return value + '...'
    } else {
      return value
    }
  },
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
export const toIndex = () => {
  console.log(process.env);
  window.location.href = `${process.env.BASE_URL}index.html`
}
export default Util
