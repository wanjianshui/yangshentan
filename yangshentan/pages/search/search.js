// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // 搜索框内容显示数据的容器
  list:[],
  // 没有找到搜索框内容提示没有数据信息的容器
  msg:'',
  },
    // 点击商品列表跳转对应的商品详情界面
    getShopDetail:function(e){
      wx.navigateTo({
        url: '/pages/shopDetail/shopDetail?id='+e.currentTarget.dataset.mark,
      })
    },
  // 搜索框的函数=======================================================
  inputChange:function(e){
  // 获取搜索框输入的内容
  var val=e.detail.value
  if(val){// 如果输入框内容不为空执行以下操作
    // 请求数据
    wx.request({
      // 请求接口
      url: 'http://iwenwiki.com:3002/api/foods/list/type',
      // 获取接口参数
      data:{
        type:e.codeId,
        name:val
      },
      // 箭头函数是没有this的 会逐渐往上找 找到有this的为止
      success:res=>{
      // console.log(res.data);
      if(res.data.status==200){  //如果状态码为200执行以下操作
        // console.log('成功',res.data.data);
        // 获取接口数据赋值给list
        this.setData({
          list:res.data.data
        })
      }else{  //否则执行以下操作
        console.log('失败，无数据');
       this.setData({
        list:[],
         mas:'未找到该内容'
       })
      }
      }
    })
  }else{  //否则搜索框内容为空则执行以下操作
  this.setData({
    // list赋值为空数组
    list:[],
    msg:'搜索内容为空'
  })
  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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