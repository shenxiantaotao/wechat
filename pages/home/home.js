import {
  Home
} from '../../models/homeModel'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    banner_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initAllData();
  },
  // 接口初始化
  async initAllData() {
    const res = await Home.getList();
    const banber = await Home.getBannerList();

    this.setData({
      list: res.list,
      banner_list: banber.list
    })

  }
})