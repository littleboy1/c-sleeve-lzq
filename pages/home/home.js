import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/Activity";
import {SpuPaging} from "../../model/SpuPaging";


Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA:null,
    themeE:null,
    themeF:null,
    themeH:null,
    themeESpu:[],
    bannerB:null,
    bannerG:null,
    grid:[],
    activityD:null,
    spuPaging:null
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
    this.initBottomSpuList()
  },
  async initBottomSpuList(){
    //如果在某些地方忘记加await返回的就是一个promis
    // e那样当前对象就是不可以使用的会导致对当前对象调用方法返回当前对象不是一个function的错误
    const paging = SpuPaging.getLatestPaging()
    this.data.spuPaging = paging
    console.log(paging + "this id ")
   const data = await paging.getMoreData()

    if(!data){
      return null
    }
    //自动累加数据 refresh 是为了清空瀑布流的数据
    //组件出不来的问题 未引入组件   组件的名字写错了  数据结构错误 忘记await
    wx.lin.renderWaterFlow(data.items)
  },
  async initAllData() {
    // const data =await Theme.getHomeLocationA();
    const theme = new Theme();
    await theme.getThemes();
    const themeA = theme.getHomeLocationA();
    const themeE = theme.getHomeLocationE();
    const themeF = theme.getHomeLocationF();
    const themeH = theme.getHomeLocationH();
    let themeESpu = [];
    if (themeE.online){
      const data = await Theme.getHomeLocationESpu();
      if (data){
        themeESpu = data.spu_list.slice(0,8)
      }
    }
    const bannerB = await Banner.getHomeLocationB();
    const bannerG = await Banner.getHomeLocationG();
    const grid  = await Category.getHomeLocationC();
    const activityD  = await Activity.getHomeLocationD();
    this.setData({
      themeA:themeA,
      themeE,
      themeF,
      themeH,
      themeESpu,
      bannerB,
      bannerG,
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
  onReachBottom: async function () {
    console.log("12344")
    const data = await this.data.spuPaging.getMoreData();
    if (!data) {
      return
    }
    wx.lin.renderWaterFlow(data.items)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
