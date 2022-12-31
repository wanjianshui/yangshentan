// pages/indexDetail/indexDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // 页面渲染数据容器
  obj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 加载顶部导航栏loading
   wx.showNavigationBarLoading()
    // 声明变量接收this
    var that = this
  //  接收url传递的参数
  // console.log("接收页面跳转过来传递的参数",options);
  // 请求对应信息做渲染
  wx.request({
    url: 'http://iwenwiki.com:3002/api/indexlist/detail',
    data:{
      id:options.id
    },
    success:function(res){
      // 设置动态的顶部导航栏标题
      wx.setNavigationBarTitle({
        title: res.data[0].title,
      })
      // console.log(res.data);
      that.setData({
        obj:res.data[0]
      })
    },
    complete:function(){
      // 加载完成后移除顶部导航栏loading
      wx.hideNavigationBarLoading()
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