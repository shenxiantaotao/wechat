/**
 * @作者 陈巧君
 * @创建时间 2020-05-27 10：12
 */

class Util {

  // 跳转 tabBar 页面
  switchTab(url) {
    wx.switchTab({
      url,
    })
  }

  // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
  redirectTo(url){
    wx.redirectTo({
      url
    })
  }

  // 保留当前页面，跳转到应用内的某个页面
  navigateTo(url){
    wx.navigateTo({
      url,
    })
  }

  // 关闭当前页面，返回上一页面或多级页面
  navigateBack(delta){
    wx.navigateBack({
      delta
    })
  }

  // 拨打电话
  makePhoneCall(phoneNumber){
    wx.makePhoneCall({
      phoneNumber
    })
  }
}

export {
  Util
}