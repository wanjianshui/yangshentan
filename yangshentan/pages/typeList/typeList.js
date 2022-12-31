// pages/typeList/typeList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 分类数据列表容器
  list:[]
  },
    // 点击列表跳转对应的商品详情界面
    getShopDetail:function(e){
      wx.navigateTo({
        url: '/pages/shopDetail/shopDetail?id='+e.currentTarget.dataset.mark,
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  // 接收跳转页面传递过来的数据
  // console.log("商品分类界面",options);
  // 接收请求分类详情数据
    wx.request({
      url: 'http://iwenwiki.com:3002/api/foods/list/type',
      data:{
        type:options.codeId
      },
      success:res=>{
        // console.log('分类列表',res.data.data);
        // 接收接口数据赋值给list
        this.setData({ 
          list:res.data.data
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