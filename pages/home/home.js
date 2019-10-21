import {config} from "../../config/config";


Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTheme:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url:`${config.apiBaseUrl}theme/by/names`,
        method:"GET",
        data:{
          names:'t-1'
        },
        header:{
          appkey:`${config.appkey}`
        },
        success:res =>{
          //回调函数this指代转向问题当前直的是回调函数的this
        this.setData({
            topTheme:res.data[0]
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})