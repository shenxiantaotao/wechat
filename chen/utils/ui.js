/**
 * @作者 陈巧君
 * @创建时间 2020-05-27 10：12
 */
import {
  config
} from './../config/index'
const {
  ERROR,
  Icon
} = config;

// 弹窗
const showToast = (title = ERROR, icon = Icon) => {
  wx.showToast({
    title,
    icon,
    duration: 1500
  })
}


export {
  showToast
}