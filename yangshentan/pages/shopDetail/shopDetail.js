// pages/shopDetail/shopDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品详情页面数据的容器
  obj:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
  // console.log('商品详情页:',options);
  // 请求网络接口数据
  wx.request({
    url: 'http://iwenwiki.com:3002/api/foods/list/detail',
    data:{
      // id接口参数
      id:options.id
    },
    success:res=>{
      // console.log(res.data);
        this.setData({
          // 获取接口里第0项数据
          obj:res.data.data[0]
        })
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