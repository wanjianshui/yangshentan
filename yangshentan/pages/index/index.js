// 引入公共接口配置文件
const basseconfig = require('../../common/config.js');
var baseUrl=require('../../common/config.js')
console.log('公共配置文件',baseUrl);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图播放的第几个图片
    current:0,
    // 请求成功后数据渲染
    // 空容器 装列表数据
    ListArr:[],
  },
// 页数文字随轮播图改变，轮播图current值改变的时候自动触发事件
swiperChange:function(e){
  // 轮播图切换时detail里的detail值改变
  // console.log(e.detail);
  this.setData({
    current:e.detail.current
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
  // 数据加载提示框
  wx.showLoading({
    title: '数据正在加载...',
  })
  // 声明变量接收this
    var that = this
  //  wx.request({
  //    url: 'http://iwenwiki.com:3002/api/banner',
  //    success:function(res){
  //     //  res.data接口返回的数据
  //     //  console.log(res.data);
  //     if(res.data.status==200){
  //       // 请求成功
  //       console.log(res.data.data);
  //       // console.log(that);
  //      that.setData({
  //        bannerArr:res.data.data
  //      })
  //     }else{
  //       console.log("请求失败");
  //     }
  //    }
  //  })

  // 动态获取首页列表信息数据
  wx.request({
    // 列表信息接口  baseUrl.host+ 使用公共配置文件引入公共域名
    url: baseUrl.host+ '/api/indexlist',
    // 获取列表接口信息
    success:function(res){
      // 数据加载提示框
      wx.showToast({
        title: '数据加载成功',
      })
      // console.log(res.data,'89');
      // 获取列表信息
     if(res.data.status==200){
       that.setData({
         ListArr:res.data.data
       })
     }
    },
    // 失败操作
    fail:function(){
      console.log("请求失败");
    },
    // 加载完成操作
    complete:function(){
      // 隐藏
      wx.hideLoading()
    }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})