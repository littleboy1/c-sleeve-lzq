import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/Activity";


Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA:null,
    themeE:null,
    themeESpu:[],
    bannerB:null,
    grid:[],
    activityD:null
  },

  /**
   * 生命周期函数--监听页面加载
   * JS类型的约束
   * 页面的JS文件不应该写业务逻辑
   * view试图层  前端分层
   * MVC controller
   * model  logic manager
   * service manager
   */
  onLoad: async function (options) {
    this.initAllData()
  },
  async initAllData() {
    // const data =await Theme.getHomeLocationA();
    const theme = new Theme();
    await theme.getThemes();
    const themeA = theme.getHomeLocationA();
    const themeE = theme.getHomeLocationE();
    let themeESpu = [];
    if (themeE.online){
      const data = await Theme.getHomeLocationESpu();
      if (data){
        themeESpu = data.spu_list.slice(0,8)
      }
    }
    const bannerB = await Banner.getHomeLocationB();
    const grid  = await Category.getHomeLocationC();
    const activityD  = await Activity.getHomeLocationD();
    this.setData({
      themeA:themeA,
      themeE,
      themeESpu,
      bannerB,
      grid,
      activityD
    });
    console.log("当前返回的grid-----"+grid+"------")
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
