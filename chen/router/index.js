/**
 * @作者 陈巧君
 * @创建时间 2020-05-27 10：12
 */

import {
  menu
} from './menu'
import {
  Util
} from './../utils/util'

class Router extends Util{
 
  // push => navigateTo 并且兼容其他所有的方法
  push(index) {
    this.navigateTo(menu[index])
  }

  // to => wx.redirectTo
  to(index) {
    this.redirectTo(menu[index])
  }

  // go => wx.navigateBack 这里的url一般传入数字
  go(index) {
    this.navigateBack(index);
  }

  // tab => wx.switchTab
  tab(index) {
    this.switchTab(menu[index]);
  }
}

// 在app.js中 只会调用一次 所以全局只会new一遍
const router = new Router();

export {
  router
}